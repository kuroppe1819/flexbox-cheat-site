import DoubleArrow from '@material-ui/icons/DoubleArrow';
import React from 'react';
import { useIntl } from 'react-intl';
import styled, { useTheme } from 'styled-components';
import { deviceMaxWidth } from '../../../../data/deviceSize';
import { useClipboard } from '../../../../fixtures/hooks/useClipboard';
import { IconButton } from '../../../common/button/IconButton';
import { Language } from '../../../providers/CustomIntlProvider';
import { CodeViewerContent } from './CodeViewerContent';
import { CodeViewerHeader } from './CodeViewerHeader';
import { FileExtension, FILE_EXTENSION, useCodeViewerState } from './useCodeViewerState';

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

const Component: React.VFC<Props & StyledProps> = ({
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
}) => {
    const theme = useTheme();
    const intl = useIntl();

    return (
        <div className={`${className}`}>
            {open ? (
                <IconButton
                    appendClassName={`${className}__toggleViewerButton`}
                    assistiveText={intl.formatMessage({ id: 'codeviewer.assistive.to.invisible' })}
                    onClick={onClickToggleViewerButton}
                >
                    <DoubleArrow style={{ color: theme.color.blue900, fontSize: theme.fontSize.lg }} />
                </IconButton>
            ) : (
                <IconButton
                    appendClassName={`${className}__toggleViewerButton`}
                    assistiveText={intl.formatMessage({ id: 'codeviewer.assistive.to.visible' })}
                    onClick={onClickToggleViewerButton}
                >
                    <DoubleArrow
                        style={{ color: theme.color.blue900, fontSize: theme.fontSize.lg, transform: 'rotate(180deg)' }}
                    />
                </IconButton>
            )}
            <div className={`${className}__codeView`}>
                <CodeViewerHeader
                    selectedFlexboxPropertyId={selectedFlexboxPropertyId}
                    language={language}
                    fileExtension={fileExtension}
                    onClickCssViewButton={onClickCssViewButton}
                    onClickHtmlViewButton={onClickHtmlViewButton}
                />
                <CodeViewerContent
                    selectedFlexboxPropertyId={selectedFlexboxPropertyId}
                    copySuccess={copySuccess}
                    sourceCode={sourceCode}
                    fileExtension={fileExtension}
                    onClickCopyButton={onClickCopyButton}
                />
            </div>
        </div>
    );
};

export const StyledComponent: React.VFC<Props> = styled(Component)`
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

const Container: React.VFC = () => {
    const [
        language,
        selectedFlexboxPropertyId,
        sourceCode,
        open,
        fileExtension,
        setOpenSourceCodeViewer,
        setFileExtension,
    ] = useCodeViewerState();
    const [copySuccess, setCopy] = useClipboard(sourceCode);

    const handleClickToggleViewerButton = () => setOpenSourceCodeViewer((open) => !open);
    const handleClickCssViewButton = () => setFileExtension(FILE_EXTENSION.CSS);
    const handleClickHtmlViewButton = () => setFileExtension(FILE_EXTENSION.MARKDOWN);

    return (
        <StyledComponent
            language={language}
            selectedFlexboxPropertyId={selectedFlexboxPropertyId}
            open={open}
            fileExtension={fileExtension}
            sourceCode={sourceCode}
            copySuccess={copySuccess}
            onClickToggleViewerButton={handleClickToggleViewerButton}
            onClickCssViewButton={handleClickCssViewButton}
            onClickHtmlViewButton={handleClickHtmlViewButton}
            onClickCopyButton={setCopy}
        />
    );
};

export const CodeViewer = Container;
