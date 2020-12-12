import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
import styled from 'styled-components';
import { deviceMaxWidth } from '../../../data/deviceSize';
import { FileExtension } from './CodeViewer';

type Props = {
    fileExtension: FileExtension;
    sourceCode: string;
};

const Component: React.FC<Props & StyledProps> = ({ className, fileExtension, sourceCode }) => (
    <div className={className}>
        <SyntaxHighlighter className={`${className}__syntaxHighlighter`} language={fileExtension} style={monoBlue}>
            {sourceCode}
        </SyntaxHighlighter>
    </div>
);

const StyledComponent: React.FC<Props> = styled(Component)`
    font-size: 1.1rem;

    &__syntaxHighlighter {
        margin: 0.75rem 0.5rem;
        background-color: ${({ theme }) => theme.color.blue400};
        min-height: 3rem;
        height: 15rem;

        @media ${deviceMaxWidth.laptop} {
            height: 10rem;
        }

        @media ${deviceMaxWidth.mobileL} {
            height: 8rem;
        }
    }
`;

export const CodeViewerContent = StyledComponent;
