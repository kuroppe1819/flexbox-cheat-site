import React, { Dispatch, SetStateAction, useState } from 'react';

export type SelectedFlexboxPropertyIdContext = [string | null, Dispatch<SetStateAction<string | null>>];

export const SelectedFlexboxPropertyIdContext = React.createContext<SelectedFlexboxPropertyIdContext>(
    {} as SelectedFlexboxPropertyIdContext
);

type Props = {
    children: React.ReactNode;
};

export const SelectedFlexboxPropertyIdProvider: React.VFC<Props> = ({ children }) => {
    const [selectedFlexboxPropertyId, setFlexboxPropertyId] = useState<string | null>(null);

    return (
        <SelectedFlexboxPropertyIdContext.Provider value={[selectedFlexboxPropertyId, setFlexboxPropertyId]}>
            {children}
        </SelectedFlexboxPropertyIdContext.Provider>
    );
};
