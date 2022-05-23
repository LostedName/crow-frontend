import React, { useRef, useState } from "react"

export const useFieldState: () => [state: string, setState: React.Dispatch<React.SetStateAction<string>>, isValid: React.MutableRefObject<boolean>] = () => {
    const [state, setState] = useState<string>("");
    const isValid = useRef<boolean>(true);
    return [state, setState, isValid];
}