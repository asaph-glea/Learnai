'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
const SearchInput = () => {

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });

                router.push(newUrl, { scroll: false });
            }
            else {
                if (pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 250);

    }, [searchQuery, router, searchParams, pathname])

    return (
        <div className="relative flex items-center w-full max-w-sm">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                <Image src="/icons/search.svg" alt="Search" width={18} height={18} className="opacity-50" />
            </div>
            <input
                placeholder="Search Companions..."
                className="input h-11 pl-10 w-full text-base bg-card/50 focus:bg-card transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

// @ts-ignore
export default SearchInput;

