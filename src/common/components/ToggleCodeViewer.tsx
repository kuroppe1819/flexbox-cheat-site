import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { deviceMaxWidth } from '../util/DefineProperty';

type Props = {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
};

export const ToggleCodeViewer = (props: Props): ReactElement => {
    const { opened, setOpened } = props;

    return (
        <ToggleBackground
            onClick={(): void => {
                setOpened(!opened);
            }}
        >
            {opened ? (
                <ToggleIcon icon={['fas', 'angle-double-right']} size="1x" />
            ) : (
                <ToggleIcon icon={['fas', 'angle-double-left']} size="1x" />
            )}
        </ToggleBackground>
    );
};

const ToggleBackground = styled.div`
    ${tw`hidden`}

    @media ${deviceMaxWidth.laptop} {
        ${tw`inline-block bg-gray-400 w-12 h-12 rounded-l-md flex justify-center items-center cursor-pointer shadow-md`}
    }
`;

const ToggleIcon = styled(FontAwesomeIcon)`
    ${tw`text-blue-900 mt-1`}
`;
