import React, {useState} from 'react';
import {Menu} from '../menu/Menu.tsx';
import {S} from '../HeaderMenu_Styles.ts';

export const MobileMenu: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    function handleClickBurgerButton() {
        setIsOpen(!isOpen)
    }
    function handleClickMenuItem(event: React.MouseEvent<HTMLDivElement>): void {
        const element = event.target as HTMLElement;
        if (element.tagName === 'A') {
            setIsOpen(!isOpen)
        }
    }

    return (
        <nav>
            <S.BurgerButton $isOpen={isOpen} onClick={handleClickBurgerButton} aria-haspopup>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup $isOpen={isOpen} aria-modal onClick={handleClickMenuItem}>
                <Menu/>
            </S.MobileMenuPopup>
        </nav>

    );
};

