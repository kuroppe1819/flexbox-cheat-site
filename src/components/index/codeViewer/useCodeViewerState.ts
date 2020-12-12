import { Language } from './../../../fixtures/functions/language';
import { useContext, useState } from 'react';
import { constructCss, constructHtml } from '../../../fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfoById } from '../../../fixtures/functions/dataProvider';
import { IndexContext } from '../../../pages/Index';

export type FileExtension = typeof FILE_EXTENSION[keyof typeof FILE_EXTENSION];

export const FILE_EXTENSION = {
    CSS: 'css',
    MARKDOWN: 'markdown',
} as const;

export const getSourceCodeOfDisplay = (flexboxPropertyId: string | null, fileExtension: FileExtension): string => {
    if (flexboxPropertyId === null) {
        return '';
    }

    const info = getFlexboxPropertyInfoById(flexboxPropertyId);
    if (fileExtension === FILE_EXTENSION.CSS) {
        return constructCss(info.style);
    } else if (fileExtension === FILE_EXTENSION.MARKDOWN) {
        return constructHtml(info.numberOfNumberBlock, info.style);
    } else {
        throw new Error('You specified file extension is not supported.');
    }
};

export const useCodeViewerState = (): [
    Language,
    string | null,
    string,
    boolean,
    FileExtension,
    React.Dispatch<React.SetStateAction<boolean>>,
    React.Dispatch<React.SetStateAction<FileExtension>>
] => {
    const { language, isOpenSourceCodeViewer, selectedFlexboxPropertyId, setOpenSourceCodeViewer } = useContext(
        IndexContext
    );
    const [fileExtension, setFileExtension] = useState<FileExtension>(FILE_EXTENSION.CSS);
    const sourceCode = getSourceCodeOfDisplay(selectedFlexboxPropertyId, fileExtension);

    return [
        language,
        selectedFlexboxPropertyId,
        sourceCode,
        isOpenSourceCodeViewer,
        fileExtension,
        setOpenSourceCodeViewer,
        setFileExtension,
    ];
};
