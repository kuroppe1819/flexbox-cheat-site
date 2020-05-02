import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">FlexBox Cheat Site</h1>
            <FontAwesomeIcon icon={['fas', 'share-alt']} />
            <FontAwesomeIcon icon={['fab', 'github']} />
        </header>
    );
};
