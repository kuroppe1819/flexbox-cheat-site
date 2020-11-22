import React, { AriaAttributes } from 'react';

export type LinkProps = {
    className: string;
    external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'> &
    AriaAttributes;

const Component: React.FC<LinkProps> = ({ className, children, href, title, external = false }) => (
    <a
        className={className}
        href={href}
        title={title}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
    >
        {children}
    </a>
);

export const BaseLink = Component;
