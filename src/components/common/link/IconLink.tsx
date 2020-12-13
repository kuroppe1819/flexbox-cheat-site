import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { BaseLink, LinkProps } from './BaseLink';

export type IconLinkProps = {
    children: React.ReactNode;
    assistiveText: string;
} & Omit<LinkProps, 'className' | 'title'> &
    AppendClassName;

const Component: React.VFC<IconLinkProps & StyledProps> = ({
    className,
    appendClassName,
    children,
    assistiveText,
    url,
    external,
    ...others
}) => (
    <BaseLink
        className={clsx(className, appendClassName)}
        url={url}
        external={external}
        title={assistiveText}
        aria-label={assistiveText}
        {...others}
    >
        {children}
    </BaseLink>
);

const StyledComponent: React.VFC<IconLinkProps> = styled(Component)`
    display: inline-block;
`;

export const IconLink = StyledComponent;
