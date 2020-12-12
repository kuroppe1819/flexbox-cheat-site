import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../themes/fontSize';
import { BaseLink, LinkProps } from './BaseLink';

export type TextLinkVariant = TypeOfValues<typeof TEXT_LINK_VARIANT>;

export const TEXT_LINK_VARIANT = {
    NORMAL: 'normal',
    SQUARE: 'square',
} as const;

export type TextLinkProps = {
    text: string;
    fontSize?: FontSize;
    variant?: TextLinkVariant;
} & Omit<LinkProps, 'className' | 'title'> &
    AppendClassName;

const Component: React.FC<TextLinkProps & StyledProps> = ({
    className,
    appendClassName,
    text,
    variant = TEXT_LINK_VARIANT.NORMAL,
    url,
    external,
    ...others
}) => (
    <BaseLink
        className={clsx(
            className,
            appendClassName,
            TEXT_LINK_VARIANT.NORMAL === variant && `${className}__${TEXT_LINK_VARIANT.NORMAL}`,
            TEXT_LINK_VARIANT.SQUARE === variant && `${className}__${TEXT_LINK_VARIANT.SQUARE}`
        )}
        url={url}
        external={external}
        {...others}
    >
        {text}
    </BaseLink>
);

const StyledComponent: React.FC<TextLinkProps> = styled(Component)`
    text-decoration: none;
    font-size: ${({ theme, fontSize }) => (fontSize ? theme.fontSize[fontSize] : theme.fontSize.base)};

    &__normal {
        color: ${({ theme }) => theme.color.blue900};

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }
    }

    &__square {
        display: inline-block;
        padding: 0.75rem 1.75rem;
        color: ${({ theme }) => theme.color.blue400};
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.blue400};
        transition: 0.3s;

        &:hover {
            color: ${({ theme }) => theme.color.white};
            box-shadow: inset ${({ theme }) => theme.color.blue400} 0 0 0 2em;
        }
    }
`;

export const TextLink = StyledComponent;
