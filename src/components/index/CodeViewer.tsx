import { faAngleDoubleLeft, faAngleDoubleRight, faBook, faCopy } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import monoBlue from 'react-syntax-highlighter/dist/esm/styles/hljs/mono-blue';
import styled, { css, DefaultTheme, ThemeContext } from 'styled-components';
import { deviceMaxWidth } from '../../data/deviceSize';
import { constructCss, constructHtml } from '../../fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfoById } from '../../fixtures/functions/dataProvider';
import { Language } from '../../fixtures/functions/language';
import { createReferenceUrl } from '../../fixtures/functions/reference';
import { useClipboard } from '../../fixtures/hooks/useClipboard';
import { IndexContext } from '../../pages/Index';
import { IconButton } from '../common/button/IconButton';
import { TextButton, TEXT_BUTTON_COLOR } from '../common/button/TextButton';
import { IconLink } from '../common/link/IconLink';

export type FilenameExtension = typeof FILENAME_EXTENSION[keyof typeof FILENAME_EXTENSION];

export const FILENAME_EXTENSION = {
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

export const getSourceCodeOfDisplay = (flexboxPropertyId: string | null, filenameExtension: FilenameExtension) => {
    if (flexboxPropertyId === null) {
        return '';
    }

    const info = getFlexboxPropertyInfoById(flexboxPropertyId);
    if (filenameExtension === FILENAME_EXTENSION.CSS) {
        return constructCss(info.style);
    } else if (filenameExtension === FILENAME_EXTENSION.MARKDOWN) {
        return constructHtml(info.numberOfNumberBlock, info.style);
    } else {
        throw new Error('You specified filename extension is not supported.');
    }
};

const Component: React.FC<Props & StyledProps> = ({
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
}) => (
    <div className={`${className}`}>
        {open ? (
            <IconButton
                appendClassName={`${className}__toggleViewerButton`}
                assistiveText={'ソースコードを非表示にする'}
                icon={faAngleDoubleRight}
                iconSize={'1x'}
                onClick={onClickToggleViewerButton}
            />
        ) : (
            <IconButton
                appendClassName={`${className}__toggleViewerButton`}
                assistiveText={'ソースコードを表示する'}
                icon={faAngleDoubleLeft}
                iconSize={'1x'}
                onClick={onClickToggleViewerButton}
            />
        )}
        <div className={`${className}__sourceCodeView`}>
            <div className={`${className}__header`} role="header">
                <TextButton
                    appendClassName={`${className}__cssViewButton`}
                    text={'CSS'}
                    color={
                        filenameExtension === FILENAME_EXTENSION.CSS
                            ? TEXT_BUTTON_COLOR.PRIMARY
                            : TEXT_BUTTON_COLOR.SECONDARY
                    }
                    onClick={onClickCssViewButton}
                />
                <TextButton
                    appendClassName={`${className}__htmlViewButton`}
                    text={'HTML'}
                    color={
                        filenameExtension === FILENAME_EXTENSION.MARKDOWN
                            ? TEXT_BUTTON_COLOR.PRIMARY
                            : TEXT_BUTTON_COLOR.SECONDARY
                    }
                    onClick={onClickHtmlViewButton}
                />
                {reference && (
                    <IconLink
                        assistiveText={'MDNのドキュメントを開く'}
                        url={reference}
                        icon={faBook}
                        iconSize="lg"
                        external
                        styled={makeMdnLinkStyle(theme)}
                    />
                )}
                <IconButton
                    appendClassName={`${className}__copyButton`}
                    assistiveText={'ソースコードをコピーする'}
                    icon={faCopy}
                    iconSize={'lg'}
                    onClick={onClickCopyButton}
                />

                {copySuccess && <span className={`${className}__feedbackCopiedText`}>Copied!</span>}
            </div>
            <div className={`${className}__syntaxHighlighterWrapper`}>
                <SyntaxHighlighter className={`${className}__content`} language={filenameExtension} style={monoBlue}>
                    {sourceCode}
                </SyntaxHighlighter>
            </div>
        </div>
    </div>
);

const makeMdnLinkStyle = (theme: DefaultTheme) => css`
    margin-left: 0.75rem;
    color: ${theme.color.gray700};

    &:hover {
        color: ${theme.color.blue400};
    }
`;

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
            border-top-left-radius: 0.375rem;
            border-bottom-left-radius: 0.375rem;
            box-shadow: 0 0 4px ${({ theme }) => theme.color.gray400};
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

    &__cssViewButton {
        width: 3.7rem;
        line-height: 1.65;
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
    }

    &__htmlViewButton {
        width: 3.7rem;
        line-height: 1.65;
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    }

    &__copyButton {
        margin-left: 0.5rem;
        padding: 0.25rem;
        color: ${({ theme }) => theme.color.gray700};
        background-color: ${({ theme }) => theme.color.white};

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
    const [filenameExtension, setFilenameExtension] = useState<FilenameExtension>(FILENAME_EXTENSION.CSS);
    const reference = selectedFlexboxPropertyId ? createReferenceUrl(selectedFlexboxPropertyId, language) : null;
    const sourceCode = getSourceCodeOfDisplay(selectedFlexboxPropertyId, filenameExtension);
    const [copied, setCopy] = useClipboard(sourceCode);
    const handleClickToggleViewerButton = () => setOpenSourceCodeViewer((open) => !open);
    const handleClickCssViewButton = () => setFilenameExtension(FILENAME_EXTENSION.CSS);
    const handleClickHtmlViewButton = () => setFilenameExtension(FILENAME_EXTENSION.MARKDOWN);
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
