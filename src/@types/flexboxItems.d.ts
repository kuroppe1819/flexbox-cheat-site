import { Dispatch, SetStateAction } from 'react';

export type FlexboxItemsProps = {
    propertyValue: string;
    setFlexboxItemsStyle: Dispatch<SetStateAction<string>>;
    setOpened: Dispatch<SetStateAction<boolean>>;
    setReference: Dispatch<SetStateAction<string>>;
};

export type FlexboxItemsForOthersProps = {
    setFlexboxItemsStyle: Dispatch<SetStateAction<string>>;
    setOpened: Dispatch<SetStateAction<boolean>>;
    setReference: Dispatch<SetStateAction<string>>;
};
