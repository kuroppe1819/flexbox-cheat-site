import FileCopyOutlined from '@material-ui/icons/FileCopyOutlined';
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
import styled, { useTheme } from 'styled-components';
import { deviceMaxWidth } from '../../../../data/deviceSize';
import { IconButton } from '../../../common/button/IconButton';
import { FileExtension } from './useCodeViewerState';

type Props = {
    fileExtension: FileExtension;
    sourceCode: string;
    copySuccess: boolean;
    onClickCopyButton: React.MouseEventHandler<HTMLButtonElement>;
};

const Component: React.VFC<Props & StyledProps> = ({
    className,
    fileExtension,
    sourceCode,
    copySuccess,
    onClickCopyButton,
}) => {
    const theme = useTheme();

    return (
        <div className={className}>
            <SyntaxHighlighter className={`${className}__syntaxHighlighter`} language={fileExtension} style={monoBlue}>
                {sourceCode}
            </SyntaxHighlighter>
            <div className={`${className}__copyButton-wrapper`}>
                <span className={`${className}__copyButton-wrapper-flex`}>
                    {copySuccess && <span className={`${className}__feedbackCopiedText`}>Copied!</span>}
                    <IconButton
                        appendClassName={`${className}__copyButton`}
                        assistiveText={'ソースコードをコピーする'}
                        onClick={onClickCopyButton}
                    >
                        <FileCopyOutlined style={{ fontSize: theme.fontSize.xl }} />
                    </IconButton>
                </span>
            </div>
        </div>
    );
};

const StyledComponent: React.VFC<Props> = styled(Component)`
    position: relative;
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

    &__copyButton-wrapper {
        position: absolute;
        top: 4px;
        right: 12px;

        &-flex {
            display: flex;
            align-items: center;
        }
    }

    &__copyButton {
        padding: 0.25rem;
        color: ${({ theme }) => theme.color.gray700};
        background-color: transparent;

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }
    }

    &__feedbackCopiedText {
        font-size: 1rem;
        color: ${({ theme }) => theme.color.gray700};
    }
`;

export const CodeViewerContent = StyledComponent;
