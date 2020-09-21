import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { deviceMaxWidth } from '../fixtures/screen';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const SourceCodeType = {
    CSS: 'css',
    HTML: 'html',
} as const;

export type SourceCodeType = typeof SourceCodeType[keyof typeof SourceCodeType];

type Props = {
    open: boolean;
    sourceCode: string;
    sourceCodeType: SourceCodeType;
    onClickToggleViewerButton: React.MouseEventHandler<HTMLButtonElement>;
    // onClickCopyButton: React.MouseEventHandler<HTMLButtonElement>;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, open, sourceCode, sourceCodeType, onClickToggleViewerButton } = props;
    return (
        <div className={`${className}`}>
            <button className={`${className}__toggleViewerButton`} onClick={onClickToggleViewerButton}>
                {open ? (
                    <FontAwesomeIcon className={`${className}__arrowIcon`} icon={faAngleDoubleRight} size="1x" />
                ) : (
                    <FontAwesomeIcon className={`${className}__arrowIcon`} icon={faAngleDoubleLeft} size="1x" />
                )}
            </button>
            <div className={`${className}__sourceCodeView`}>
                <div className={`${className}__header`} role="header">
                    <button className={`${className}__cssViewButton`}>CSS</button>
                    <button className={`${className}__htmlViewButton`}>HTML</button>
                    <a className={`${className}__externalLink`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWindowRestore} size="lg" />
                    </a>
                    <button className={`${className}__clipboardCopyButton`}>
                        <FontAwesomeIcon icon={faCopy} size="lg" />
                    </button>
                    <span className={`${className}__feedbackCopiedText`}>Copied!</span>
                </div>
                <SyntaxHighlighter className={`${className}__content`}>{sourceCode}</SyntaxHighlighter>
            </div>
        </div>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: flex;
    align-items: flex-end;

    &__toggleViewerButton {
        display: none;

        @media ${deviceMaxWidth.laptop} {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3rem;
            height: 3rem;
            background-color: ${({ theme }) => theme.color.gray400};
            border: none;
            border-top-left-radius: 0.375rem;
            border-bottom-left-radius: 0.375rem;
            box-shadow: 0 0 4px ${({ theme }) => theme.color.gray400};
            outline: none;
            cursor: pointer;
        }
    }

    &__sourceCodeView {
        display: inline-block;
        width: 24rem;
        height: 100%;
        min-height: 7.5rem;
        background-color: ${({ theme }) => theme.color.white};
        border: 1px solid ${({ theme }) => theme.color.gray400};
        border-top-left-radius: 0.375rem;
        box-shadow: ${({ theme }) => theme.shadow.md};

        @media ${deviceMaxWidth.laptop} {
            box-shadow: 0 0 8px ${({ theme }) => theme.color.gray400};
        }

        @media ${deviceMaxWidth.mobileL} {
            width: calc(100vw - 3rem);
        }
    }

    &__header {
        display: flex;
        align-items: center;
        margin: 0.75rem;
    }

    &__cssViewButton,
    &__htmlViewButton {
        line-height: 1.375;
        font-size: 1rem;
        padding-top: 0.25rem;
        outline: none;
        cursor: pointer;
    }

    &__cssViewButton {
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        color: ${(props) =>
            props.sourceCodeType === SourceCodeType.CSS ? props.theme.color.blue100 : props.theme.color.blue900};
        background-color: ${(props) =>
            props.sourceCodeType === SourceCodeType.CSS ? props.theme.color.blue400 : props.theme.color.white};
        border: 1px solid
            ${(props) =>
                props.sourceCodeType === SourceCodeType.CSS ? props.theme.color.blue400 : props.theme.color.gray400};
    }

    &__htmlViewButton {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
        color: ${(props) =>
            props.sourceCodeType === SourceCodeType.HTML ? props.theme.color.blue100 : props.theme.color.blue900};
        background-color: ${(props) =>
            props.sourceCodeType === SourceCodeType.HTML ? props.theme.color.blue400 : props.theme.color.white};
        border: 1px solid
            ${(props) =>
                props.sourceCodeType === SourceCodeType.HTML ? props.theme.color.blue400 : props.theme.color.gray400};
    }

    &__externalLink {
        display: inline-block;
        margin-left: 0.75rem;
        color: ${({ theme }) => theme.color.gray700};
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }
    }

    &__clipboardCopyButton {
        margin-left: 0.5rem;
        padding: 0.25rem;
        color: ${({ theme }) => theme.color.gray700};
        background-color: ${({ theme }) => theme.color.white};
        border: none;
        outline: none;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }
    }

    &__feedbackCopiedText {
        margin-left: 0.25rem;
    }

    &__content {
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

export const SourceCodeViewer = StyledComponent;
