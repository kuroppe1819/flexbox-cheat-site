import React, { useState } from 'react';
import styled from 'styled-components';
import { useOnClickOutsideRef } from '../../../fixtures/hooks/useOnClickOutsideRef';
import { DropdownButton } from './DropdownButton';

type Props = {
    buttonText: string;
    assistiveText: string;
    menu: React.ReactNode;
    menuOpen: boolean;
    dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
    icon?: React.ReactNode;
    onClickMenuButton: React.ReactEventHandler<HTMLButtonElement>;
};

const Component: React.VFC<Props & StyledProps> = ({
    className,
    buttonText,
    assistiveText,
    menu,
    menuOpen,
    dropdownRef,
    icon,
    onClickMenuButton,
}) => (
    <div className={className} ref={dropdownRef}>
        <DropdownButton icon={icon} text={buttonText} assistiveText={assistiveText} onClick={onClickMenuButton} />
        {menuOpen && <div className={`${className}__menu`}>{menu}</div>}
    </div>
);

const StyledComponent: React.VFC<Props> = styled(Component)`
    display: inline-block;

    &__menu {
        width: 9rem;
        border: 1px solid ${({ theme }) => theme.color.gray400};
        border-radius: 0.5rem;
        box-shadow: ${({ theme }) => theme.shadow.md};
    }
`;

type OuterProps = {
    buttonText: string;
    assistiveText: string;
    menu: React.ReactNode;
    icon?: React.ReactNode;
};

const Container: React.VFC<OuterProps> = ({ buttonText, assistiveText, menu, icon }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    const targetRef = useOnClickOutsideRef<HTMLDivElement>(closeMenu);

    const handleClickButton = () => setMenuOpen(!menuOpen);

    return (
        <StyledComponent
            buttonText={buttonText}
            assistiveText={assistiveText}
            menu={menu}
            menuOpen={menuOpen}
            dropdownRef={targetRef}
            icon={icon}
            onClickMenuButton={handleClickButton}
        />
    );
};

export const Dropdown = Container;
