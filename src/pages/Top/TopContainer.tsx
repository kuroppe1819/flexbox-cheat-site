import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import '../../../static/css/style.css';
import { Top } from './Top';

export type TopContextProps = {
    selectedCssCode: string;
    showReference: string;
    setOpenedCodeViewer: Dispatch<SetStateAction<boolean>>;
    setSelectedCssCode: Dispatch<SetStateAction<string>>;
    setShowReference: Dispatch<SetStateAction<string>>;
};

export const TopContext = React.createContext({} as TopContextProps);

export const TopContainer = (): ReactElement => {
    const [isOpenedCodeViewer, setOpenedCodeViewer] = useState(false);
    const [selectedCssCode, setSelectedCssCode] = useState('');
    const [showReference, setShowReference] = useState('');

    return (
        <TopContext.Provider
            value={{
                selectedCssCode,
                showReference,
                setOpenedCodeViewer,
                setSelectedCssCode,
                setShowReference,
            }}
        >
            <Top isOpenedCodeViewer={isOpenedCodeViewer} setOpenedCodeViewer={setOpenedCodeViewer} />
        </TopContext.Provider>
    );
};
