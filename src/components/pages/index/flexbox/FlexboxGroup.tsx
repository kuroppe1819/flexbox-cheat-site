import clsx from 'clsx';
import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { FlexboxPropertyInfo } from '../../../../data/flexboxProperties';
import { CustomIntlContext, LANGUAGE } from '../../../providers/CustomIntlProvider';
import { FlexboxList } from './FlexboxList';

type Props = {
    propertyName: string;
    propertyInfoList: FlexboxPropertyInfo[];
} & AppendClassName;

const Component: React.VFC<Props & StyledProps> = ({ className, appendClassName, propertyName, propertyInfoList }) => {
    const [language] = useContext(CustomIntlContext);

    return (
        <div className={clsx(className, appendClassName && `${appendClassName}__FlexboxGroup`)} role="group">
            <div className={`${className}__title`}>
                <h2 className={`${className}__property-name`}>{propertyName}</h2>
                <div
                    className={clsx(
                        `${className}__property-description-wrapper-align`,
                        language === LANGUAGE.en && `${className}__property-description-wrapper-height`
                    )}
                >
                    <h3 className={`${className}__property-description`}>
                        <FormattedMessage id={`flexbox.property.description.${propertyName}`} />
                    </h3>
                </div>
            </div>
            <FlexboxList propertyName={propertyName} propertyInfoList={propertyInfoList} />
        </div>
    );
};

const StyledComponent: React.VFC<Props> = styled(Component)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    &__title {
        position: sticky;
        top: 0;
        background-color: ${({ theme }) => theme.color.white};
        margin-top: 0.5rem;
        padding: 0.5rem 0;
        z-index: 10;
        box-shadow: 0px 3px 3px -3px #cbd5e0;
    }

    &__property {
        &-name {
            color: ${({ theme }) => theme.color.blue900};
            margin: 0;
            text-align: center;
            font-size: 1.5rem;
        }

        &-description-wrapper {
            &-align {
                display: flex;
                justify-content: center;
            }

            &-height {
                height: 2.5rem;
            }
        }

        &-description {
            max-width: 10.5rem;
            margin: 0;
            color: ${({ theme }) => theme.color.blue900};
            padding-top: 0.5rem;
            font-size: 0.875rem;
        }
    }
`;

export const FlexboxGroup = StyledComponent;
