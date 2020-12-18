import clsx from 'clsx';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { FlexboxPropertyInfo } from '../../../../data/flexboxProperties';
import { FlexboxList } from './FlexboxList';

type Props = {
    propertyName: string;
    propertyInfoList: FlexboxPropertyInfo[];
} & AppendClassName;

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, appendClassName, propertyName, propertyInfoList } = props;
    return (
        <div className={clsx(className, appendClassName && `${appendClassName}__FlexboxGroup`)} role="group">
            <div className={`${className}__title`}>
                <h2 className={`${className}__propertyName`}>{propertyName}</h2>
                <div className={`${className}__propertyDescription-align`}>
                    <h3 className={`${className}__propertyDescription`}>
                        <FormattedMessage id={`flexbox.property.description.${propertyName}`} />
                    </h3>
                </div>
            </div>
            <FlexboxList propertyName={propertyName} propertyInfoList={propertyInfoList} />
        </div>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    &__title {
        position: sticky;
        top: 0;
        background-color: ${({ theme }) => theme.color.white};
        margin-top: 0.5rem;
        padding: 0.75rem 0;
        z-index: 10;
        box-shadow: 0px 3px 3px -3px #cbd5e0;
    }

    &__propertyName {
        color: ${({ theme }) => theme.color.blue900};
        margin: 0;
        text-align: center;
        font-size: 1.5rem;
    }

    &__propertyDescription-align {
        display: flex;
        justify-content: center;
    }

    &__propertyDescription {
        max-width: 10.5rem;
        color: ${({ theme }) => theme.color.blue900};
        margin: auto 0;
        padding-top: 0.5rem;
        font-size: 0.875rem;
    }
`;

export const FlexboxGroup = StyledComponent;
