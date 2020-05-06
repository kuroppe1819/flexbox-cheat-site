import React, { ReactElement, useState, Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';
import { Index } from './Index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import 'normalize.css';
import '../static/css/style.css';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import useClipboard from 'react-use-clipboard';

export type MainContentsContextProps = {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
    parentStyle: string;
    setParentStyle: Dispatch<SetStateAction<string>>;
    copied: boolean;
    setCopiedCallback: () => void;
};

export const MainContentsContext = React.createContext({} as MainContentsContextProps);

const IndexContainer = (): ReactElement => {
    const [opened, setOpened] = useState(false);
    const [parentStyle, setParentStyle] = useState('');
    const [copied, setCopiedCallback] = useClipboard(parentStyle, {
        successDuration: 1000,
    });

    return (
        <MainContentsContext.Provider
            value={{ opened, setOpened, parentStyle, setParentStyle, copied, setCopiedCallback }}
        >
            <Index />;
        </MainContentsContext.Provider>
    );
};

library.add(fab, fas, far);
SyntaxHighlighter.registerLanguage('css', css);
ReactDOM.render(<IndexContainer />, document.getElementById('root'));
