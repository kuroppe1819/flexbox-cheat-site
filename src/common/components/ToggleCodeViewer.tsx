import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

type Props = {
    opened: boolean;
    onClickHandler: () => void;
};

export const ToggleCodeViewer = (props: Props): ReactElement => {
    const { opened, onClickHandler } = props;
    return (
        <ToggleBackground onClick={onClickHandler}>
            {opened ? (
                <ToggleIcon icon={['fas', 'angle-double-right']} size="1x" />
            ) : (
                <ToggleIcon icon={['fas', 'angle-double-left']} size="sm" />
            )}
        </ToggleBackground>
    );
};

const ToggleBackground = styled.div`
    ${tw`bg-gray-400 w-12 h-12 rounded-l-md flex justify-center items-center cursor-pointer`}
`;

const ToggleIcon = styled(FontAwesomeIcon)`
    ${tw`text-blue-900 mt-1`}
`;
