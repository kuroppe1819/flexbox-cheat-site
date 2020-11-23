import React, { AriaAttributes } from 'react';

export type ButtonProps = {
    className: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    AriaAttributes;

const Component: React.FC<ButtonProps> = ({
    className,
    children,
    type,
    title,
    disabled = false,
    onClick,
    ...others
}) => (
    <button className={className} type={type} title={title} onClick={onClick} disabled={disabled} {...others}>
        {children}
    </button>
);

export const BaseButton = Component;
