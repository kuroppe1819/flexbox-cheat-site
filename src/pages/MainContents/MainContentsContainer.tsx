import 'normalize.css';
import React, { ReactElement, useState, Dispatch, SetStateAction } from 'react';
import { useClipboard } from '../../common/util/useClipboard';
import '../../../static/css/style.css';
import { MainContents } from './MainContents';

export type MainContentsContextProps = {
    showCode: string;
    setOpenedCodeViewer: Dispatch<SetStateAction<boolean>>;
    setShowCode: Dispatch<SetStateAction<string>>;
    setShowReference: Dispatch<SetStateAction<string>>;
};

export const MainContentsContext = React.createContext({} as MainContentsContextProps);

export const MainContentsContainer = (): ReactElement => {
    const [isOpenedCodeViewer, setOpenedCodeViewer] = useState(false);
    const [showCode, setShowCode] = useState('');
    const [showReference, setShowReference] = useState('');
    const [copied, onCopy] = useClipboard(showCode);

    return (
        <MainContentsContext.Provider
            value={{
                showCode,
                setOpenedCodeViewer,
                setShowCode,
                setShowReference,
            }}
        >
            <MainContents
                isOpenedCodeViewer={isOpenedCodeViewer}
                setOpenedCodeViewer={setOpenedCodeViewer}
                showCode={showCode}
                setShowCode={setShowCode}
                copied={copied}
                onCopy={onCopy}
                showReference={showReference}
            />
        </MainContentsContext.Provider>
    );
};
