"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { redirect, useRouter } from "next/navigation";
import { createCompanion } from "@/lib/actions/companion.actions";
import { toast } from "sonner"
import { Loader2, Sparkles } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, { message: 'Give your companion a name' }),
    subject: z.string().min(2, { message: 'Subject is required' }),
    topic: z.string().min(2, { message: 'Topic is required' }),
    voice: z.string().min(2, { message: 'Voice is required' }),
    style: z.string().min(2, { message: 'Style is required' }),
    duration: z.coerce.number().min(2, { message: 'Duration is required' }),
})


const CompanionForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 15,

        },
    })


    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const companion = await createCompanion(values);

            if (companion) {
                toast.success("Companion created successfully!");
                router.push(`/companions/${companion.id}`);
            } else {
                toast.error("Failed to create Companion. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 rounded-3xl border border-border bg-card shadow-lg animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-semibold">Companion Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Einstein"
                                        {...field}
                                        className='input h-12 text-lg bg-background/50 focus:bg-background transition-all' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg font-semibold">Subject</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}>
                                        <SelectTrigger className="input h-12 capitalize bg-background/50">
                                            <SelectValue placeholder="Select the Subject" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-card border-border">
                                            {subjects.map((subject) => (
                                                <SelectItem
                                                    value={subject}
                                                    key={subject}
                                                    className="capitalize cursor-pointer hover:bg-secondary focus:bg-secondary"
                                                >{subject}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg font-semibold">Topic & Context</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Describe what you want to learn. E.g., 'I want to practice conversational French for a trip to Paris'"
                                    {...field}
                                    className='input min-h-[120px] text-lg bg-background/50 focus:bg-background transition-all resize-none p-4' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                        control={form.control}
                        name="voice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-medium">Voice</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}>
                                        <SelectTrigger className="input h-11 bg-background/50">
                                            <SelectValue placeholder="Select Voice" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="style"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-medium">Teaching Style</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}>
                                        <SelectTrigger className="input h-11 bg-background/50">
                                            <SelectValue placeholder="Select Style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="formal">Formal</SelectItem>
                                            <SelectItem value="casual">Casual</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base font-medium">Duration (Minutes)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="15"
                                        {...field}
                                        value={field.value as number}
                                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                                        className='input h-11 bg-background/50'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="pt-4">
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full h-14 text-lg font-bold rounded-xl btn-gold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        {form.formState.isSubmitting ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Building Companion...
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                                Build your Companion
                            </div>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default CompanionForm;