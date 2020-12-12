import React from 'react';
import styled from 'styled-components';
import { TextLink, TEXT_LINK_VARIANT } from '../common/link/TextLink';

const Component: React.VFC<StyledProps> = ({ className }) => (
    <div className={className}>
        <TextLink text={'トップへ戻る'} url={process.env.ROOT_PATH} variant={TEXT_LINK_VARIANT.SQUARE} />
    </div>
);

const StyledComponent: React.VFC = styled(Component)`
    text-align: center;
    margin: 4rem 0;
`;

export const BackToTopLink = StyledComponent;
