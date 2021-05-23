import React, {useState} from "react";

export default function useInput(initialValue: string):object {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}