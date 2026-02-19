"use client";
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("subject") || "";

    const [subject, setSubject] = useState(query);

    useEffect(() => {
        let newUrl = "";
        if (subject === "all") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
        }
        router.push(newUrl, { scroll: false });
    }, [subject]);

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input h-11 w-full md:w-[180px] capitalize bg-card/50 focus:bg-card">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
                <SelectItem value="all" className="cursor-pointer hover:bg-secondary focus:bg-secondary">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className="capitalize cursor-pointer hover:bg-secondary focus:bg-secondary">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;