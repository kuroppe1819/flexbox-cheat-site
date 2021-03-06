import clsx from 'clsx';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { CodeViewer } from './codeViewer/CodeViewer';
import { FlexboxGroup } from './flexbox/FlexboxGroup';
import { OpenedCodeViewerContext } from '../../components/providers/OpenedCodeViewer';
import { deviceMaxWidth } from '../../data/deviceSize';
import { FlexboxProperty } from '../../data/flexboxProperties';
import { getFlexboxProperties } from '../../fixtures/functions/extractData';

const Component: React.VFC<StyledProps> = ({ className }) => {
    const [isOpenedCodeViewer] = useContext(OpenedCodeViewerContext);

    return (
        <main className={className}>
            <div className={`${className}__flexboxGroup`}>
                {getFlexboxProperties().map((property: FlexboxProperty) => (
                    <FlexboxGroup
                        key={property.name}
                        appendClassName={className}
                        propertyName={property.name}
                        propertyInfoList={property.infoList}
                    />
                ))}
            </div>
            <div className={clsx(`${className}__codeViewer`, !isOpenedCodeViewer && `${className}__hideCodeViewer`)}>
                <CodeViewer />
            </div>
        </main>
    );
};

const StyledComponent: React.FC = styled(Component)`
    display: flex;
    position: relative;
    width: 880px;
    right: 200px;
    margin: 1rem auto 3rem auto;

    @media ${deviceMaxWidth.laptop} {
        right: auto;
    }

    @media ${deviceMaxWidth.tablet} {
        width: auto;
    }

    @media ${deviceMaxWidth.mobileL} {
        margin-right: 0;
        margin-left: 0;
    }

    &__flexboxGroup {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &:after {
            content: '';
            width: 194px;
            height: 0;
        }
    }

    &__FlexboxGroup {
        padding: 0 0.75rem;
        justify-content: flex-start;

        @media ${deviceMaxWidth.mobileL} {
            padding: 0 0.25rem;
        }
    }

    &__codeViewer {
        position: fixed;
        left: calc(50% + 216px);
        top: 10rem;
        z-index: 20;

        @media ${deviceMaxWidth.laptop} {
            display: flex;
            align-items: flex-end;
            top: auto;
            right: 0;
            left: auto;
            bottom: 0.5rem;
            transform: translateX(0);
            transition: all 300ms 0s ease;
        }

        @media ${deviceMaxWidth.mobileL} {
            transform: translateX(0);
        }
    }

    &__hideCodeViewer {
        @media ${deviceMaxWidth.laptop} {
            transform: translateX(calc(24rem + 1px));
        }

        @media ${deviceMaxWidth.mobileL} {
            transform: translateX(calc(100vw - 3rem + 1px));
        }
    }
`;

export const PageBody = StyledComponent;
