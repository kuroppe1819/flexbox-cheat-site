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
                <ToggleIcon icon={['fas', 'angle-double-right']} size="xs" />
            ) : (
                <ToggleIcon icon={['fas', 'angle-double-left']} size="xs" />
            )}
        </ToggleBackground>
    );
};

const ToggleBackground = styled.div`
    ${tw`bg-gray-400 w-4 rounded-l-md flex justify-center`}
`;

const ToggleIcon = styled(FontAwesomeIcon)`
    ${tw`text-blue-900 mt-1`}
`;
