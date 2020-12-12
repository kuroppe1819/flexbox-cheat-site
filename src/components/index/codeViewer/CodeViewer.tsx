import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { deviceMaxWidth } from '../../../data/deviceSize';
import { constructCss, constructHtml } from '../../../fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfoById } from '../../../fixtures/functions/dataProvider';
import { Language } from '../../../fixtures/functions/language';
import { useClipboard } from '../../../fixtures/hooks/useClipboard';
import { IndexContext } from '../../../pages/Index';
import { IconButton } from '../../common/button/IconButton';
import { CodeViewerContent } from './CodeViewerContent';
import { CodeViewerHeader } from './CodeViewerHeader';

export type FileExtension = typeof FILE_EXTENSION[keyof typeof FILE_EXTENSION];

export const FILE_EXTENSION = {
    CSS: 'css',
    MARKDOWN: 'markdown',
} as const;

export const getSourceCodeOfDisplay = (flexboxPropertyId: string | null, fileExtension: FileExtension) => {
    if (flexboxPropertyId === null) {
        return '';
    }

    const info = getFlexboxPropertyInfoById(flexboxPropertyId);
    if (fileExtension === FILE_EXTENSION.CSS) {
        return constructCss(info.style);
    } else if (fileExtension === FILE_EXTENSION.MARKDOWN) {
        return constructHtml(info.numberOfNumberBlock, info.style);
    } else {
        throw new Error('You specified filename extension is not supported.');
    }
};

type Props = {
    language: Language;
    selectedFlexboxPropertyId: string | null;
    open: boolean;
    fileExtension: FileExtension;
    sourceCode: string;
    copySuccess: boolean;
    onClickToggleViewerButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickCssViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickHtmlViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickCopyButton: React.MouseEventHandler<HTMLButtonElement>;
};

const Component: React.FC<Props & StyledProps> = ({
    className,
    language,
    selectedFlexboxPropertyId,
    open,
    fileExtension,
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
        <div className={`${className}__codeView`}>
            <CodeViewerHeader
                selectedFlexboxPropertyId={selectedFlexboxPropertyId}
                language={language}
                fileExtension={fileExtension}
                copySuccess={copySuccess}
                onClickCssViewButton={onClickCssViewButton}
                onClickHtmlViewButton={onClickHtmlViewButton}
                onClickCopyButton={onClickCopyButton}
            />
            <CodeViewerContent sourceCode={sourceCode} fileExtension={fileExtension} />
        </div>
    </div>
);

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

    &__codeView {
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
`;

const Container: React.FC = () => {
    const { language, isOpenSourceCodeViewer, selectedFlexboxPropertyId, setOpenSourceCodeViewer } = useContext(
        IndexContext
    );
    const [fileExtension, setFileExtension] = useState<FileExtension>(FILE_EXTENSION.CSS);
    const sourceCode = getSourceCodeOfDisplay(selectedFlexboxPropertyId, fileExtension);
    const [copied, setCopy] = useClipboard(sourceCode);
    const handleClickToggleViewerButton = () => setOpenSourceCodeViewer((open) => !open);
    const handleClickCssViewButton = () => setFileExtension(FILE_EXTENSION.CSS);
    const handleClickHtmlViewButton = () => setFileExtension(FILE_EXTENSION.MARKDOWN);

    return (
        <StyledComponent
            selectedFlexboxPropertyId={selectedFlexboxPropertyId}
            language={language}
            open={isOpenSourceCodeViewer}
            fileExtension={fileExtension}
            sourceCode={sourceCode}
            copySuccess={copied}
            onClickToggleViewerButton={handleClickToggleViewerButton}
            onClickCssViewButton={handleClickCssViewButton}
            onClickHtmlViewButton={handleClickHtmlViewButton}
            onClickCopyButton={setCopy}
        />
    );
};

export const CodeViewer = Container;
