import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../themes/fontSize';
import { BaseLink, LinkProps } from './BaseLink';

export type TextLinkProps = {
    text: string;
    fontSize?: FontSize;
} & Omit<LinkProps, 'className' | 'title'> &
    AppendClassName;

const Component: React.FC<TextLinkProps & StyledProps> = ({
    className,
    appendClassName,
    text,
    url,
    external,
    ...others
}) => (
    <BaseLink className={clsx(className, appendClassName)} url={url} external={external} {...others}>
        {text}
    </BaseLink>
);

const StyledComponent: React.FC<TextLinkProps> = styled(Component)`
    text-decoration: none;
    font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.base)};
    color: ${({ theme }) => theme.color.blue900};

    &:hover {
        color: ${({ theme }) => theme.color.blue400};
    }
`;

export const TextLink = StyledComponent;
