import React from 'react';
import { NumberBlock } from '../components/NumberBlock';
import { PageRoot } from '../components/root/PageRoot';

const Component = () => {
    return (
        <PageRoot>
            <NumberBlock index={1} />
        </PageRoot>
    );
};

export const Index = Component;
