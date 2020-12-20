import React from 'react';
import styled from 'styled-components';
import { useCustomIntl } from '../../../fixtures/hooks/useCustomIntl';
import { TextLink } from '../../common/link/TextLink';
import { LANGUAGE } from '../../providers/CustomIntlProvider';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const { language, formatMessage } = useCustomIntl();
    const isSelectedJa = language === LANGUAGE.ja;
    const rootUrl = `${location.origin}${process.env.ROOT_PATH}`;
    const termsPageUrl = isSelectedJa ? `${rootUrl}/terms.html` : `${rootUrl}/en/terms.html`;
    const privacyPageUrl = isSelectedJa ? `${rootUrl}/privacy.html` : `${rootUrl}/en/privacy.html`;
    const contactPageUrl = isSelectedJa ? `${rootUrl}/contact.html` : `${rootUrl}/en/contact.html`;

    return (
        <footer className={`${className}`}>
            <nav className={`${className}__navigation`}>
                <TextLink
                    appendClassName={`${className}__link`}
                    text={formatMessage({ id: 'footer.terms.link' })}
                    url={termsPageUrl}
                    fontSize={'xs'}
                />
                <TextLink
                    appendClassName={`${className}__link`}
                    text={formatMessage({ id: 'footer.privacy.link' })}
                    url={privacyPageUrl}
                    fontSize={'xs'}
                />
                <TextLink
                    appendClassName={`${className}__link`}
                    text={formatMessage({ id: 'footer.contact.link' })}
                    url={contactPageUrl}
                    fontSize={'xs'}
                />
            </nav>
            <p className={`${className}__copyright`}>
                <small>&copy;2020 Flexbox Cheat Site</small>
            </p>
        </footer>
    );
};

const StyledComponent: React.VFC = styled(Component)`
    &__navigation {
        display: flex;
        justify-content: center;
    }

    &__link {
        margin: 0 1rem;
    }

    &__copyright {
        text-align: center;
        color: ${({ theme }) => theme.color.blue900};
    }
`;

export const Footer = StyledComponent;
