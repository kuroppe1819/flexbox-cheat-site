import { faBook, faCopy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { Language } from '../../../fixtures/functions/language';
import { createReferenceUrl } from '../../../fixtures/functions/reference';
import { IconButton } from '../../common/button/IconButton';
import { TextButton, TEXT_BUTTON_THEME } from '../../common/button/TextButton';
import { IconLink } from '../../common/link/IconLink';
import { FileExtension, FILE_EXTENSION } from './useCodeViewerState';

type Props = {
    language: Language;
    selectedFlexboxPropertyId: string | null;
    fileExtension: FileExtension;
    copySuccess: boolean;
    onClickCssViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickHtmlViewButton: React.MouseEventHandler<HTMLButtonElement>;
    onClickCopyButton: React.MouseEventHandler<HTMLButtonElement>;
};

const Component: React.VFC<Props & StyledProps> = ({
    className,
    language,
    selectedFlexboxPropertyId,
    fileExtension,
    copySuccess,
    onClickCssViewButton,
    onClickHtmlViewButton,
    onClickCopyButton,
}) => {
    const reference = selectedFlexboxPropertyId ? createReferenceUrl(selectedFlexboxPropertyId, language) : null;

    return (
        <div className={className}>
            <TextButton
                appendClassName={`${className}__cssViewButton`}
                text={'CSS'}
                color={fileExtension === FILE_EXTENSION.CSS ? TEXT_BUTTON_THEME.PRIMARY : TEXT_BUTTON_THEME.SECONDARY}
                onClick={onClickCssViewButton}
            />
            <TextButton
                appendClassName={`${className}__htmlViewButton`}
                text={'HTML'}
                color={
                    fileExtension === FILE_EXTENSION.MARKDOWN ? TEXT_BUTTON_THEME.PRIMARY : TEXT_BUTTON_THEME.SECONDARY
                }
                onClick={onClickHtmlViewButton}
            />
            {reference && (
                <IconLink
                    appendClassName={`${className}__mdnLink`}
                    assistiveText={'MDNのドキュメントを開く'}
                    url={reference}
                    icon={faBook}
                    iconSize="lg"
                    external
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
    );
};

const StyledComponent: React.VFC<Props> = styled(Component)`
    display: flex;
    align-items: center;
    margin: 0.75rem;

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

    &__mdnLink {
        margin-left: 0.75rem;
        color: ${({ theme }) => theme.color.gray700};

        &:hover {
            color: ${({ theme }) => theme.color.blue400};
        }
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
`;

export const CodeViewerHeader = StyledComponent;
