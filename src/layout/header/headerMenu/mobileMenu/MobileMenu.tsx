import React, {useState} from 'react';
import {Menu} from '../menu/Menu.tsx';
import {S} from '../HeaderMenu_Styles.ts';

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function handleClickBurgerButton() {
        setMenuIsOpen(!menuIsOpen)
    }
    // function handleClickMenuItem(event: React.MouseEvent<HTMLDivElement>): void {
    //     const element = event.target as HTMLElement;
    //     if (element.tagName === 'A') {
    //         setMenuIsOpen(!menuIsOpen)
    //     }
    // }

    return (
        <nav>
            <S.BurgerButton $isOpen={menuIsOpen} onClick={ handleClickBurgerButton } aria-haspopup>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup $isOpen={menuIsOpen} aria-modal onClick={ () => { setMenuIsOpen(false) } }>
                <Menu/>
            </S.MobileMenuPopup>
        </nav>

    );
};

