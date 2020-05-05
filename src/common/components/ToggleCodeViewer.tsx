import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type Props = {
    opened: boolean;
};

export const ToggleCodeViewer = (props: Props): ReactElement => {
    return (
        <ToggleBackground>
            {props.opened ? (
                <ToggleIcon icon={['fas', 'chevron-up']} size="xs" />
            ) : (
                <ToggleIcon icon={['fas', 'chevron-down']} size="xs" />
            )}
        </ToggleBackground>
    );
};

const ToggleBackground = styled.div`
    ${tw`bg-gray-400 h-4 flex justify-end items-center rounded-b-md`}
`;

const ToggleIcon = styled(FontAwesomeIcon)`
    ${tw`mx-2`}
`;
