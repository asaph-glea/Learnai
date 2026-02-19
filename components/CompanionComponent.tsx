'use client';

import { useEffect, useRef, useState } from 'react'
import { cn, configureAssistant, getSubjectColor } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import soundwaves from '@/constants/soundwaves.json'
import { addToSessionHistory } from "@/lib/actions/companion.actions";
import { Mic, MicOff, Phone, PhoneOff, User } from 'lucide-react';

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const CompanionComponent = ({ companionId, subject, topic, name, userName, userImage, style, voice }: CompanionComponentProps) => {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [messages, setMessages] = useState<SavedMessage[]>([]);

    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if (lottieRef.current) {
            if (isSpeaking) {
                lottieRef.current.play()
            } else {
                lottieRef.current.stop()
            }
        }
    }, [isSpeaking])

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);

        const onCallEnd = () => {
            setCallStatus(CallStatus.FINISHED);
            addToSessionHistory(companionId)
        }

        const onMessage = (message: Message) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = { role: message.role, content: message.transcript }
                setMessages((prev) => [newMessage, ...prev])
            }
        }

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onError = (error: Error) => console.log('Error', error);

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('error', onError);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('error', onError);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
        }
    }, []);

    const toggleMicrophone = () => {
        const isMuted = vapi.isMuted();
        vapi.setMuted(!isMuted);
        setIsMuted(!isMuted)
    }

    const handleCall = async () => {
        setCallStatus(CallStatus.CONNECTING)

        const assistantOverrides = {
            variableValues: { subject, topic, style },
            clientMessages: ["transcript"],
            serverMessages: [],
        }

        // @ts-expect-error
        vapi.start(configureAssistant(voice, style), assistantOverrides)
    }

    const handleDisconnect = () => {
        setCallStatus(CallStatus.FINISHED)
        vapi.stop()
    }

    return (
        <section className="flex flex-col gap-6 h-[75vh]">
            <div className="flex flex-col lg:flex-row gap-6 h-full">
                {/* Companion Visual Area */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 rounded-3xl border border-border bg-card shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundColor: getSubjectColor(subject) }} />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <div className="relative">
                            <div
                                className="w-48 h-48 md:w-64 md:h-64 rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-1000"
                                style={{ backgroundColor: getSubjectColor(subject) }}
                            >
                                {/* Static Avatar (Hidden when active) */}
                                <div
                                    className={cn(
                                        'absolute inset-0 flex items-center justify-center transition-opacity duration-700 p-8',
                                        callStatus === CallStatus.ACTIVE ? 'opacity-0' : 'opacity-100'
                                    )}>
                                    <Image src={`/icons/${subject}.svg`} alt={subject} width={100} height={100} className="w-full h-full object-contain drop-shadow-lg" />
                                </div>

                                {/* Speaking Animation (Visible when active) */}
                                <div className={cn('absolute inset-0 flex items-center justify-center transition-opacity duration-700', callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0')}>
                                    <Lottie
                                        lottieRef={lottieRef}
                                        animationData={soundwaves}
                                        autoplay={false}
                                        className="w-full h-full opacity-80"
                                    />
                                </div>

                                {/* Connection Pulse */}
                                {callStatus === CallStatus.CONNECTING && (
                                    <div className="absolute inset-0 rounded-3xl border-4 border-white/50 animate-ping blur-sm" />
                                )}
                            </div>

                            {/* Status Indicator */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-md flex items-center gap-2 text-xs font-semibold whitespace-nowrap">
                                <span className={cn("w-2 h-2 rounded-full",
                                    callStatus === CallStatus.ACTIVE ? "bg-green-500 animate-pulse" :
                                        callStatus === CallStatus.CONNECTING ? "bg-yellow-500 animate-bounce" : "bg-muted-foreground")}
                                />
                                {callStatus === CallStatus.ACTIVE ? "Listening" :
                                    callStatus === CallStatus.CONNECTING ? "Connecting..." : "Offline"}
                            </div>
                        </div>

                        <div className="text-center space-y-1 mt-4">
                            <h2 className="text-3xl font-bold tracking-tight">{name}</h2>
                            <p className="text-muted-foreground font-medium capitalize">{subject} • {style}</p>
                        </div>
                    </div>
                </div>

                {/* Interaction Area */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Transcript/Messages */}
                    <div className="flex-1 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 overflow-hidden relative shadow-inner">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />

                        <div className="h-full overflow-y-auto pr-2 space-y-4 no-scrollbar flex flex-col-reverse">
                            {messages.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40 gap-3">
                                    <div className="p-4 rounded-full bg-muted">
                                        <Mic className="w-8 h-8" />
                                    </div>
                                    <p className="text-lg font-medium">Start talking to see the conversation here</p>
                                </div>
                            )}
                            {messages.map((message, index) => (
                                <div key={index} className={cn(
                                    "p-4 rounded-2xl max-w-[85%] text-base leading-relaxed animate-in slide-in-from-bottom-2 fade-in",
                                    message.role === 'assistant'
                                        ? "self-start bg-secondary/80 text-foreground ml-0 rounded-tl-sm"
                                        : "self-end bg-cta/10 text-foreground border border-cta/20 mr-0 rounded-tr-sm"
                                )}>
                                    <span className="text-xs font-bold opacity-50 mb-1 block uppercase tracking-wider">
                                        {message.role === 'assistant' ? name : userName}
                                    </span>
                                    {message.content}
                                </div>
                            ))}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />
                    </div>

                    {/* Controls */}
                    <div className="p-4 rounded-3xl border border-border bg-card shadow-lg flex items-center justify-center gap-4 md:gap-8">
                        {/* Mic Toggle */}
                        <div className="flex flex-col items-center gap-2">
                            <button
                                className={cn(
                                    "w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-md",
                                    isMuted ? "bg-red-500 text-white hover:bg-red-600" : "bg-secondary hover:bg-secondary/80 text-foreground",
                                    callStatus !== CallStatus.ACTIVE && "opacity-50 cursor-not-allowed grayscale"
                                )}
                                onClick={toggleMicrophone}
                                disabled={callStatus !== CallStatus.ACTIVE}
                            >
                                {isMuted ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
                            </button>
                            <span className="text-xs font-medium text-muted-foreground hidden md:block">
                                {isMuted ? "Unmute" : "Mute"}
                            </span>
                        </div>

                        {/* Main Call Button */}
                        <div className="flex flex-col items-center gap-2">
                            <button
                                className={cn(
                                    "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl transform hover:scale-105 active:scale-95 border-4 border-background",
                                    callStatus === CallStatus.ACTIVE
                                        ? "bg-red-500 hover:bg-red-600 text-white shadow-red-500/20"
                                        : callStatus === CallStatus.CONNECTING
                                            ? "bg-yellow-500 text-white animate-pulse"
                                            : "bg-cta-gold hover:bg-amber-400 text-black shadow-cta-gold/30"
                                )}
                                onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                            >
                                {callStatus === CallStatus.ACTIVE ? (
                                    <PhoneOff className="w-9 h-9" />
                                ) : (
                                    <Phone className="w-9 h-9" />
                                )}
                            </button>
                            <span className="text-xs font-bold uppercase tracking-wider hidden md:block">
                                {callStatus === CallStatus.ACTIVE ? "End Session" : "Start Learning"}
                            </span>
                        </div>

                        {/* User Avatar Placeholder/Link */}
                        <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border">
                                {userImage ? (
                                    <Image src={userImage} alt={userName} width={64} height={64} />
                                ) : (
                                    <User className="w-8 h-8" />
                                )}
                            </div>
                            <span className="text-xs font-medium text-muted-foreground hidden md:block">Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanionComponent