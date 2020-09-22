import React from 'react';
import styled from 'styled-components';
import { FlexboxGroup } from '../components/FlexboxGroup';
import { PageRoot } from '../components/root/PageRoot';
import { SourceCodeViewer } from '../components/SourceCodeViewer';
import { FlexboxGroupData, flexboxGroupData } from '../data/flexboxGroupData';
import { deviceMaxWidth } from '../fixtures/screen';

type Props = {};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className } = props;
    return (
        <PageRoot>
            <main className={`${className}`}>
                <div className={`${className}__flexboxGroupWrapper`}>
                    {flexboxGroupData.map((data: FlexboxGroupData) => {
                        return <FlexboxGroup key={data.name} assignClassName={className} id={data.name} />;
                    })}
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
        margin-bottom: 8rem;
    }

    @media ${deviceMaxWidth.tablet} {
        width: auto;
        margin-bottom: 3rem;
    }

    @media ${deviceMaxWidth.mobileL} {
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 8rem;
    }

    &__flexboxGroupWrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    &__flexboxGroup {
        padding: 0 0.75rem;

        @media ${deviceMaxWidth.mobileL} {
            padding: 0 0.25rem;
        }
    }
`;

const Container: React.FC<Props> = () => {
    return <StyledConponent />;
};

export const Index = Container;
