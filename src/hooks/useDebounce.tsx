import React, {useCallback, useRef, useState} from "react";

export default function useDebounce(callback: Function, delay: number):Function {
    const timer = useRef<any>();

    const debounceCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay)

    }, [callback, delay])

    return debounceCallback;
}