import React, { AriaAttributes } from 'react';

export type LinkProps = {
    className: string;
    url: string;
    external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target' | 'href'> &
    AriaAttributes;

const Component: React.FC<LinkProps> = ({ className, children, url, title, external = false, ...others }) => (
    <a
        className={className}
        href={url}
        title={title}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...others}
    >
        {children}
    </a>
);

export const BaseLink = Component;
