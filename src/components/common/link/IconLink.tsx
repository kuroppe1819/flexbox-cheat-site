import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { AssistiveText } from '../assistiveText/AssistiveText';
import { BaseLink, LinkProps } from './BaseLink';

export type IconLinkProps = {
    assistiveText: string;
    icon: IconProp;
    iconSize: SizeProp;
    styled?: FlattenSimpleInterpolation;
} & Omit<LinkProps, 'className' | 'title'>;

const Component: React.FC<IconLinkProps & StyledProps> = ({
    className,
    assistiveText,
    icon,
    iconSize,
    url,
    external,
    ...others
}) => (
    <BaseLink className={className} url={url} external={external} title={assistiveText} {...others}>
        <AssistiveText>
            <span>{assistiveText}</span>
        </AssistiveText>
        <FontAwesomeIcon icon={icon} size={iconSize} />
    </BaseLink>
);

const StyledComponent: React.FC<IconLinkProps> = styled(Component)`
    display: inline-block;
    ${({ styled }) => styled};
`;

export const IconLink = StyledComponent;
