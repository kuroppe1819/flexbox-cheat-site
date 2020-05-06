import { useState, useEffect, useCallback } from 'react';
import copy from 'copy-to-clipboard';

export const useClipboard = (value: string): [boolean, () => void] => {
    const [copied, setCopied] = useState(false);

    const onCopy = useCallback(() => {
        const didCopy = copy(value);
        setCopied(didCopy);
    }, [value]);

    useEffect(() => {
        if (copied) {
            const id = setTimeout(() => {
                setCopied(false);
            }, 1500);

            return (): void => clearTimeout(id);
        }
    }, [copied]);

    return [copied, onCopy];
};
