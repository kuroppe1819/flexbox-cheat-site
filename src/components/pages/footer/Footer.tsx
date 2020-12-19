import React from 'react';
import styled from 'styled-components';
import { useCustomIntl } from '../../../fixtures/hooks/useCustomIntl';
import { TextLink } from '../../common/link/TextLink';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const { formatMessage } = useCustomIntl();

    return (
        <footer className={`${className}`}>
            <nav className={`${className}__navigation`}>
                <TextLink
                    appendClassName={`${className}__link`}
                    text={formatMessage({ id: 'footer.terms.link' })}
                    url="./terms.html"
                    fontSize={'xs'}
                />
                <TextLink
                    appendClassName={`${className}__link`}
                    text={formatMessage({ id: 'footer.privacy.link' })}
                    url="./privacy.html"
                    fontSize={'xs'}
                />
                <TextLink
                    appendClassName={`${className}__link`}
                    text={formatMessage({ id: 'footer.contact.link' })}
                    url="./contact.html"
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
