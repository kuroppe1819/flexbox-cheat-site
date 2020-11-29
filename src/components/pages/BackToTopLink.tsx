import clsx from 'clsx';
import React from 'react';
import styled from 'styled-components';
import { TextLink, TEXT_LINK_VARIANT } from '../common/link/TextLink';

type Props = AppendClassName;

const Component: React.FC<Props & StyledProps> = ({ className, appendClassName }) => (
    <div className={clsx(className, appendClassName)}>
        <TextLink text={'トップへ戻る'} url={process.env.ROOT_PATH} variant={TEXT_LINK_VARIANT.SQUARE} />
    </div>
);

const StyledComponent: React.FC<Props> = styled(Component)`
    text-align: center;
`;

export const BackToTopLink = StyledComponent;
