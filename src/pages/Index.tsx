import React from 'react';
import styled from 'styled-components';
import { FlexboxGroup } from '../components/FlexboxGroup';
import { PageRoot } from '../components/root/PageRoot';
import { flexboxProperties, FlexboxProperty } from '../data/flexboxProperty';
import { deviceMaxWidth } from '../fixtures/screen';

type Props = {};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className } = props;
    return (
        <PageRoot>
            <main className={`${className}`}>
                <div className={`${className}__flexboxGroupWrapper`}>
                    {flexboxProperties.map((property: FlexboxProperty) => (
                        <FlexboxGroup
                            key={property.name}
                            assignClassName={className}
                            propertyName={property.name}
                            propertyInfoList={property.infoList}
                        />
                    ))}
                </div>
                <div className={`${className}__sourceCodeViewerWrapper`}>{/* <SourceCodeViewer /> */}</div>
            </main>
        </PageRoot>
    );
};

const StyledConponent: React.FC<Props> = styled(Component)`
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

    &__flexboxGroupWrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__flexboxGroup {
        padding: 0 0.75rem;
        justify-content: flex-start;

        @media ${deviceMaxWidth.mobileL} {
            padding: 0 0.25rem;
        }
    }
`;

const Container: React.FC<Props> = () => {
    return <StyledConponent />;
};

export const Index = Container;
