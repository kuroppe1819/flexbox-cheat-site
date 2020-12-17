import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownButton } from './DropdownButton';

type Props = {
    menu: React.ReactNode;
    menuOpen: boolean;
    onClickMenuButton: React.ReactEventHandler<HTMLButtonElement>;
};

const Component: React.VFC<Props & StyledProps> = ({ className, menu, menuOpen, onClickMenuButton }) => (
    <div className={className}>
        <DropdownButton assistiveText="言語の変更" onClick={onClickMenuButton} />
        {menuOpen && <div className={`${className}__menu`}>{menu}</div>}
    </div>
);

const StyledComponent: React.VFC<Props> = styled(Component)`
    &__menu {
        width: 9rem;
        border: 1px solid ${({ theme }) => theme.color.gray400};
        border-radius: 0.5rem;
        box-shadow: ${({ theme }) => theme.shadow.md};
    }
`;

type OuterProps = {
    menu: React.ReactNode;
};

const Container: React.VFC<OuterProps> = ({ menu }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClickButton = () => setMenuOpen(!menuOpen);

    return <StyledComponent menu={menu} menuOpen={menuOpen} onClickMenuButton={handleClickButton} />;
};

export const Dropdown = Container;
