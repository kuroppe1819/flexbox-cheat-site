import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import { deviceMaxWidth } from '../fixtures/device';

type Props = {
    open: boolean;
    onClickToggleViewerButton: React.MouseEventHandler<HTMLButtonElement>;
};

const Component: React.FC<Props & StyledProps> = (props: Props & StyledProps) => {
    const { className, open, onClickToggleViewerButton } = props;
    return (
        <div className={`${className}`}>
            <button className={`${className}__toggleViewerButton`} onClick={onClickToggleViewerButton}>
                {open ? (
                    <FontAwesomeIcon className={`${className}__arrowIcon`} icon={faAngleDoubleRight} size="1x" />
                ) : (
                    <FontAwesomeIcon className={`${className}__arrowIcon`} icon={faAngleDoubleLeft} size="1x" />
                )}
            </button>
        </div>
    );
};

const StyledComponent: React.FC<Props> = styled(Component)`
    &__toggleViewerButton {
        display: none;

        @media ${deviceMaxWidth.laptop} {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3rem;
            height: 3rem;
            background-color: ${({ theme }) => theme.color.gray400};
            border: none;
            border-top-left-radius: 0.375rem;
            border-bottom-left-radius: 0.375rem;
            box-shadow: 0 0 4px ${({ theme }) => theme.color.gray400};
            outline: none;
            cursor: pointer;
        }
    }
`;

export const SourceCodeViewer = StyledComponent;
