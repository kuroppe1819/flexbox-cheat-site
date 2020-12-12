import React, { Dispatch, SetStateAction, useState } from 'react';

export type OpenedCodeViewerContext = [boolean, Dispatch<SetStateAction<boolean>>];

export const OpenedCodeViewerContext = React.createContext<OpenedCodeViewerContext>({} as OpenedCodeViewerContext);

type Props = {
    children: React.ReactNode;
};

export const OpenedCodeViewerProvider: React.VFC<Props> = ({ children }) => {
    const [isOpenedCodeViewer, setOpenedCodeViewer] = useState(false);

    return (
        <OpenedCodeViewerContext.Provider value={[isOpenedCodeViewer, setOpenedCodeViewer]}>
            {children}
        </OpenedCodeViewerContext.Provider>
    );
};
