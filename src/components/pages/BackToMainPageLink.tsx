import React from 'react';
import styled from 'styled-components';
import { TextLink } from '../common/link/TextLink';

const Component: React.VFC<StyledProps> = ({ className }) => (
    <div className={className}>
        <TextLink appendClassName={`${className}__TextLink`} text={'トップへ戻る'} url={process.env.ROOT_PATH} />
    </div>
);

const StyledComponent: React.VFC = styled(Component)`
    text-align: center;

    &__TextLink {
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

export const BackToMainPageLink = StyledComponent;
