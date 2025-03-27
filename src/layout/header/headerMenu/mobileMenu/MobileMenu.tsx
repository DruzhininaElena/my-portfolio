
import {Menu} from '../menu/Menu.tsx';
import {S} from '../HeaderMenu_Styles.ts';

type Props = {
    menuIsOpen: boolean
    toggleMenu: () => void
}

export const MobileMenu = ({menuIsOpen, toggleMenu}: Props) => {

    return (
        <nav>
            <S.BurgerButton $isOpen={menuIsOpen} onClick={toggleMenu} aria-haspopup>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup $isOpen={menuIsOpen} aria-modal onClick={toggleMenu}>
                <Menu/>
            </S.MobileMenuPopup>
        </nav>

    );
};

