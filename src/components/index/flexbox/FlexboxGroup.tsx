import clsx from 'clsx';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { FlexboxPropertyInfo } from '../../../data/flexboxProperties';
import { FlexboxList } from './FlexboxList';

type Props = {
    propertyName: string;
    propertyInfoList: FlexboxPropertyInfo[];
} & AssignClassNameProps;

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, assignClassName, propertyName, propertyInfoList } = props;
    return (
        <div className={clsx(className, assignClassName && `${assignClassName}__flexboxGroup`)} role="group">
            <div className={`${className}__title`}>
                <h2 className={`${className}__propertyName`}>{propertyName}</h2>
                <h3 className={`${className}__propertyDescription`}>
                    <FormattedMessage id={`flexbox.property.description.${propertyName}`} />
                </h3>
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
        padding-top: 0.75rem;
        z-index: 10;
        box-shadow: 0px 3px 3px -3px #cbd5e0;
    }

    &__propertyName {
        color: ${({ theme }) => theme.color.blue900};
        margin: 0;
        text-align: center;
        font-size: 1.5rem;
    }

    &__propertyDescription {
        color: ${({ theme }) => theme.color.blue900};
        margin: 0;
        padding-top: 0.25rem;
        text-align: center;
        font-size: 0.875rem;
        line-height: 2;
    }
`;

export const FlexboxGroup = StyledComponent;
