import React, { useState } from 'react';
import Logo from './Navigation/Logo';
import MenuLinks from './Navigation/MenuLinks';
import MenuToggle from './Navigation/MenuToggle';
import NavBarContainer from './Navigation/NavBarContainer';
import ToggleLayout from './Navigation/ToggleLayout';
import LoginModal from '@components/LoginModal';
import MenuAvatar from '@components/Navigation/MenuAvatar';
import SearchBar from '@components/Navigation/SearchBar';

import styles from '@styles/NavBar.module.sass';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Logo w="150px" />
            <SearchBar />
            <MenuLinks isOpen={isOpen} />
            <LoginModal />
            <ToggleLayout />
            <MenuToggle toggle={toggle} isOpen />
            <MenuAvatar />
        </NavBarContainer>
    )
}

export default NavBar;