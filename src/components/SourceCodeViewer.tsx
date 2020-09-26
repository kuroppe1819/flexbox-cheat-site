import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
import styled from 'styled-components';
import { constructCss, constructHtml } from '../fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfoById } from '../fixtures/functions/dataProvider';
import { Language } from '../fixtures/functions/language';
import { createReferenceUrl } from '../fixtures/functions/reference';
import { useClipboard } from '../fixtures/hooks/useClipboard';
import { deviceMaxWidth } from '../fixtures/screen';
import { IndexContext } from '../pages/Index';

export type FilenameExtension = typeof FilenameExtension[keyof typeof FilenameExtension];

const FilenameExtension = {
    CSS: 'css',
    MARKDOWN: 'markdown',
} as const;

type Props = {
    id: string | null;
    language: Language;
    reference: string | null;
    open: boolean;
    filenameExtension: FilenameExtension;
    sourceCode: string;
    copySuccess: boolean;
    onClickToggleViewerButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickCssViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickHtmlViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickCopyButton: React.MouseEventHandler<HTMLButtonElement>;
};

const getSourceCodeOfDisplay = (flexboxPropertyId: string | null, filenameExtension: FilenameExtension) => {
    if (flexboxPropertyId === null) {
        return '';
    }

    const info = getFlexboxPropertyInfoById(flexboxPropertyId);
    if (filenameExtension === FilenameExtension.CSS) {
        return constructCss(info.style);
    } else if (filenameExtension === FilenameExtension.MARKDOWN) {
        return constructHtml(info.numberOfNumberBlock, info.style);
    } else {
        throw new Error('You specified filename extension is not supported.');
    }
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const {
        className,
        reference,
        open,
        filenameExtension,
        sourceCode,
        copySuccess,
        onClickToggleViewerButton,
        onClickCssViewButton,
        onClickHtmlViewButton,
        onClickCopyButton,
    } = props;

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
                    <button className={`${className}__cssViewButton`} onClick={onClickCssViewButton}>
                        CSS
                    </button>
                    <button className={`${className}__htmlViewButton`} onClick={onClickHtmlViewButton}>
                        HTML
                    </button>
                    {reference && (
                        <a
                            className={`${className}__externalLink`}
                            href={reference}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faWindowRestore} size="lg" />
                        </a>
                    )}
                    <button className={`${className}__clipboardCopyButton`} onClick={onClickCopyButton}>
                        <FontAwesomeIcon icon={faCopy} size="lg" />
                    </button>
                    {copySuccess && <span className={`${className}__feedbackCopiedText`}>Copied!</span>}
                </div>
                <div className={`${className}__syntaxHighlighterWrapper`}>
                    <SyntaxHighlighter
                        className={`${className}__content`}
                        language={filenameExtension}
                        style={monoBlue}
                    >
                        {sourceCode}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export const StyledComponent: React.FC<Props> = styled(Component)`
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
        border-radius: 0.5rem;
        box-shadow: ${({ theme }) => theme.shadow.md};

        @media ${deviceMaxWidth.laptop} {
            border-radius: 0;
            border-top-left-radius: 0.5rem;
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
        line-height: 1.65;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
    }

    &__cssViewButton {
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        color: ${(props) =>
            props.filenameExtension === FilenameExtension.CSS ? props.theme.color.blue100 : props.theme.color.blue900};
        background-color: ${(props) =>
            props.filenameExtension === FilenameExtension.CSS ? props.theme.color.blue400 : props.theme.color.white};
        border: 1px solid
            ${(props) =>
                props.filenameExtension === FilenameExtension.CSS
                    ? props.theme.color.blue400
                    : props.theme.color.gray400};
    }

    &__htmlViewButton {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
        color: ${(props) =>
            props.filenameExtension === FilenameExtension.MARKDOWN
                ? props.theme.color.blue100
                : props.theme.color.blue900};
        background-color: ${(props) =>
            props.filenameExtension === FilenameExtension.MARKDOWN
                ? props.theme.color.blue400
                : props.theme.color.white};
        border: 1px solid
            ${(props) =>
                props.filenameExtension === FilenameExtension.MARKDOWN
                    ? props.theme.color.blue400
                    : props.theme.color.gray400};
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

    &__syntaxHighlighterWrapper {
        font-size: 1.1rem;
    }
`;

const Container: React.FC = () => {
    const { language, isOpenSourceCodeViewer, selectedFlexboxPropertyId, setOpenSourceCodeViewer } = useContext(
        IndexContext
    );
    const [filenameExtension, setFilenameExtension] = useState<FilenameExtension>(FilenameExtension.CSS);
    const reference = selectedFlexboxPropertyId ? createReferenceUrl(selectedFlexboxPropertyId, language) : null;
    const sourceCode = getSourceCodeOfDisplay(selectedFlexboxPropertyId, filenameExtension);
    const [copied, setCopy] = useClipboard(sourceCode);
    const handleClickToggleViewerButton = () => setOpenSourceCodeViewer((open) => !open);
    const handleClickCssViewButton = () => setFilenameExtension(FilenameExtension.CSS);
    const handleClickHtmlViewButton = () => setFilenameExtension(FilenameExtension.MARKDOWN);
    const handleClickCopyButton = () => setCopy();

    return (
        <StyledComponent
            id={selectedFlexboxPropertyId}
            language={language}
            reference={reference}
            open={isOpenSourceCodeViewer}
            filenameExtension={filenameExtension}
            sourceCode={sourceCode}
            copySuccess={copied}
            onClickToggleViewerButton={handleClickToggleViewerButton}
            onClickCssViewButton={handleClickCssViewButton}
            onClickHtmlViewButton={handleClickHtmlViewButton}
            onClickCopyButton={handleClickCopyButton}
        />
    );
};

export const SourceCodeViewer = Container;

export const VisibleForTesting = {
    FilenameExtension,
    getSourceCodeOfDisplay,
};
