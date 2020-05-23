import 'normalize.css';
import React, { ReactElement, useState, Dispatch, SetStateAction } from 'react';
import { useClipboard } from '../../common/util/useClipboard';
import '../../../static/css/style.css';
import { MainContents } from './MainContents';

export type MainContentsContextProps = {
    selectedCssCode: string;
    showReference: string;
    setOpenedCodeViewer: Dispatch<SetStateAction<boolean>>;
    setSelectedCssCode: Dispatch<SetStateAction<string>>;
    setShowReference: Dispatch<SetStateAction<string>>;
};

export const MainContentsContext = React.createContext({} as MainContentsContextProps);

export const MainContentsContainer = (): ReactElement => {
    const [isOpenedCodeViewer, setOpenedCodeViewer] = useState(false);
    const [selectedCssCode, setSelectedCssCode] = useState('');
    const [showReference, setShowReference] = useState('');

    return (
        <MainContentsContext.Provider
            value={{
                selectedCssCode,
                showReference,
                setOpenedCodeViewer,
                setSelectedCssCode,
                setShowReference,
            }}
        >
            <MainContents isOpenedCodeViewer={isOpenedCodeViewer} setOpenedCodeViewer={setOpenedCodeViewer} />
        </MainContentsContext.Provider>
    );
};
