import React from 'react';
import styled from 'styled-components';
import { useCustomIntl } from '../../fixtures/hooks/useCustomIntl';
import { TextLink } from '../common/link/TextLink';
import { LANGUAGE } from '../providers/CustomIntlProvider';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const { language, formatMessage } = useCustomIntl();
    const rootUrl = `${location.origin}${process.env.ROOT_PATH}`;
    const mainPageUrl = language === LANGUAGE.ja ? rootUrl : `${rootUrl}/en`;

    return (
        <div className={className}>
            <TextLink
                appendClassName={`${className}__TextLink`}
                text={formatMessage({ id: 'back.to.main.page.link' })}
                url={mainPageUrl}
            />
        </div>
    );
};

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
