import { FlattenSimpleInterpolation } from 'styled-components';
import { useRef, useEffect, useState, ReactElement, useContext } from 'react';
import { BehaviorFlexbox } from '../../components/BehaviorFlexbox';
import React from 'react';
import { MainContentsContext } from '../../../pages/MainContents/MainContentsContainer';

type Props = {
    parentStyle: FlattenSimpleInterpolation;
    childStyle?: FlattenSimpleInterpolation;
    firstChildStyle?: FlattenSimpleInterpolation;
    childFeaturedStyle?: FlattenSimpleInterpolation;
    lastChildStyle?: FlattenSimpleInterpolation;
    propertyValue: string;
    uniqueCode: string;
    uniqueReference: string;
};

export const BehaviorFlexboxContainer = (props: Props): ReactElement => {
    const { uniqueCode } = props;
    const context = useContext(MainContentsContext);

    const [isKeepedHighlight, setKeepedHighlight] = useState(false);
    const [isMouseEnter, setMouseEnter] = useState(false);
    const uniqueCodeRef = useRef(uniqueCode);

    useEffect(() => {
        if (uniqueCodeRef.current !== context.selectedCssCode && isKeepedHighlight) {
            setKeepedHighlight(false);
        }
    }, [context.selectedCssCode, isKeepedHighlight]);

    return (
        <BehaviorFlexbox
            isKeepedHighlight={isKeepedHighlight}
            isMouseEnter={isMouseEnter}
            setKeepedHighlight={setKeepedHighlight}
            setMouseEnter={setMouseEnter}
            {...props}
            {...context}
        />
    );
};
