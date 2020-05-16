import 'normalize.css';
import React, { ReactElement, useState } from 'react';
import { useClipboard } from '../../common/util/useClipboard';
import '../../../static/css/style.css';
import { MainContents } from './MainContents';

export const MainContentsContainer = (): ReactElement => {
    const [opened, setOpened] = useState(false);
    const [flexboxItemsStyle, setFlexboxItemsStyle] = useState('');
    const [copied, onCopy] = useClipboard(flexboxItemsStyle);
    const [reference, setReference] = useState('');

    return (
        <MainContents
            opened={opened}
            setOpened={setOpened}
            flexboxItemsStyle={flexboxItemsStyle}
            setFlexboxItemsStyle={setFlexboxItemsStyle}
            copied={copied}
            onCopy={onCopy}
            reference={reference}
            setReference={setReference}
        />
    );
};
