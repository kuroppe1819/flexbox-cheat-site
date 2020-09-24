import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { faAngleDoubleLeft, faAngleDoubleRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';
import { constructCss, constructHtml } from '../fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfo } from '../fixtures/functions/dataProvider';
import { Language } from '../fixtures/functions/language';
import { parseFlexboxPropertyId } from '../fixtures/functions/managementId';
import { createReferenceUrl } from '../fixtures/functions/reference';
import { useClipboard } from '../fixtures/hooks/useClipboard';
import { deviceMaxWidth } from '../fixtures/screen';
import { IndexContext } from '../pages/Index';

export const SourceCodeType = {
    CSS: 'css',
    HTML: 'html',
} as const;

export type SourceCodeType = typeof SourceCodeType[keyof typeof SourceCodeType];

type Props = {
    id: string | null;
    language: Language;
    reference: string | null;
    open: boolean;
    sourceCodeType: SourceCodeType;
    sourceCode: string;
    copySuccess: boolean;
    onClickToggleViewerButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickCssViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickHtmlViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickCopyButton: React.MouseEventHandler<HTMLButtonElement>;
};

const getSourceCodeOfDisplay = (flexboxPropertyId: string | null, sourceCodeType: SourceCodeType) => {
    if (flexboxPropertyId === null) {
        return '';
    }

    const { propertyName, propertyValue } = parseFlexboxPropertyId(flexboxPropertyId);
    const info = getFlexboxPropertyInfo(propertyName, propertyValue);
    if (sourceCodeType === SourceCodeType.CSS) {
        return constructCss(info.style);
    } else if (sourceCodeType === SourceCodeType.HTML) {
        return constructHtml(info.numberOfNumberBlock, info.style);
    } else {
        // TODO: SourceCodeType -> filenameExtension
        throw new Error('You specified SourceCodeType is not support');
    }
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const {
        className,
        id,
        language,
        reference,
        open,
        sourceCodeType,
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

const Container: React.FC = () => {
    const { language, selectedFlexboxPropertyId } = useContext(IndexContext);
    const [open, setOpen] = useState(false);
    const [sourceCodeType, setSourceCodeType] = useState<SourceCodeType>(SourceCodeType.CSS);
    const reference = selectedFlexboxPropertyId ? createReferenceUrl(selectedFlexboxPropertyId, language) : null;
    const sourceCode = getSourceCodeOfDisplay(selectedFlexboxPropertyId, sourceCodeType);
    const [copied, setCopy] = useClipboard(sourceCode);
    const handleClickToggleViewerButton = () => setOpen(!open);
    const handleClickCssViewButton = () => setSourceCodeType(SourceCodeType.CSS);
    const handleClickHtmlViewButton = () => setSourceCodeType(SourceCodeType.HTML);
    const handleClickCopyButton = () => setCopy();

    return (
        <StyledComponent
            id={selectedFlexboxPropertyId}
            language={language}
            reference={reference}
            open={open}
            sourceCodeType={sourceCodeType}
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
