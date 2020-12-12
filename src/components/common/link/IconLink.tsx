import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { BaseLink, LinkProps } from './BaseLink';

export type IconLinkProps = {
    assistiveText: string;
    icon: IconProp;
    iconSize: SizeProp;
} & Omit<LinkProps, 'className' | 'title'> &
    AppendClassName;

const Component: React.FC<IconLinkProps & StyledProps> = ({
    className,
    appendClassName,
    assistiveText,
    icon,
    iconSize,
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
        <FontAwesomeIcon role="img" icon={icon} size={iconSize} />
    </BaseLink>
);

const StyledComponent: React.FC<IconLinkProps> = styled(Component)`
    display: inline-block;
`;

export const IconLink = StyledComponent;
