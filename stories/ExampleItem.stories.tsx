import React, { ReactElement } from 'react';
import { ExampleItem } from '../src/common/components/ExampleItem';

export default {
    title: 'ExampleItem',
    component: ExampleItem,
};

export const NumberText1 = (): ReactElement => <ExampleItem numberText="1" />;

export const NumberText2 = (): ReactElement => <ExampleItem numberText="2" />;

export const NumberText3 = (): ReactElement => <ExampleItem numberText="3" />;

export const NumberText4 = (): ReactElement => <ExampleItem numberText="4" />;
