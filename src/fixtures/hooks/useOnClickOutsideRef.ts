import { useEffect, useRef } from 'react';

export const useOnClickOutsideRef = <T extends HTMLElement>(callback: () => void, initialValue = null) => {
    const targetRef = useRef<T | null>(initialValue);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const clickedNode = e.target as Node;
            const isInBody = document.body.contains(clickedNode);
            const isInTarget = targetRef.current && targetRef.current.contains(clickedNode);
            if (isInBody && !isInTarget) {
                callback();
            }
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [callback]);

    return targetRef;
};
