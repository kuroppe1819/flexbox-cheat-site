import { Dispatch, SetStateAction } from 'react';

export type FlexboxItemsProps = {
    propertyValue: string;
    setFlexboxItemsStyle: Dispatch<SetStateAction<string>>;
    setOpened: Dispatch<SetStateAction<boolean>>;
};

export type FlexboxItemsForOthersProps = {
    setFlexboxItemsStyle: Dispatch<SetStateAction<string>>;
    setOpened: Dispatch<SetStateAction<boolean>>;
};
