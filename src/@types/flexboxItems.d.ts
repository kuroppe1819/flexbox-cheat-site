import { Dispatch, SetStateAction } from 'react';

export type FlexboxItemsProps = {
    propertyValue: string;
    setFlexboxItemsStyle: Dispatch<SetStateAction<string>>;
};
