import { Dispatch, SetStateAction, useState } from 'react';

export type FilenameExtension = typeof FilenameExtension[keyof typeof FilenameExtension];

export const FilenameExtension = {
    CSS: 'css',
    MARKDOWN: 'markdown',
} as const;

export const useFilenameExtension = (): [FilenameExtension, Dispatch<SetStateAction<FilenameExtension>>] => {
    const [filenameExtension, setFilenameExtension] = useState<FilenameExtension>(FilenameExtension.CSS);
    return [filenameExtension, setFilenameExtension];
};
