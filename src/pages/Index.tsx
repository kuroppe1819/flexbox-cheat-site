import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { FlexboxGroup } from '../components/FlexboxGroup';
import { PageRoot } from '../components/root/PageRoot';
import { flexboxProperties, FlexboxProperty } from '../data/flexboxProperty';
import { deviceMaxWidth } from '../fixtures/screen';

const Component: React.FC<StyledProps> = (props: StyledProps) => {
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

export type IndexContextProps = {
    selectedFlexboxPropertyId: string | null;
    mouseOverFlexboxListItemId: string | null;
    setFlexboxPropertyId: Dispatch<SetStateAction<string | null>>;
    setMouseOverFlexboxListItemId: Dispatch<SetStateAction<string | null>>;
};

export const IndexContext = React.createContext({} as IndexContextProps);

const Container: React.FC = () => {
    const [selectedFlexboxPropertyId, setFlexboxPropertyId] = useState<string | null>(null);
    const [mouseOverFlexboxListItemId, setMouseOverFlexboxListItemId] = useState<string | null>(null);

    return (
        <IndexContext.Provider
            value={{
                selectedFlexboxPropertyId,
                mouseOverFlexboxListItemId,
                setFlexboxPropertyId,
                setMouseOverFlexboxListItemId,
            }}
        >
            <StyledComponent />
        </IndexContext.Provider>
    );
};

export const Index = Container;
