import {Logo} from '../../components/logo/Logo.tsx';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu.tsx';
import {Container} from '../../components/container/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.ts';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu.tsx';
import * as React from 'react';
import {S} from './Heder_Styles.ts';
import {useState} from 'react';

export const Header: React.FC = () => {
    const [scroll, setScroll] = useState(window.scrollY)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function handleClickBurgerButton() {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header $isPageScrolled={scroll > 10} $menuIsOpen={menuIsOpen}>
            <Container>
                <FlexWrapper $justify={'space-between'} $align={'center'}>
                    <Logo/>
                    {width > breakpoint ? <DesktopMenu/> : <MobileMenu menuIsOpen={menuIsOpen} toggleMenu={handleClickBurgerButton}/>}
                </FlexWrapper>
                {/*<ThemeIcon>*/}
                {/*    <Icon iconId={'theme'} height={'40'} width={'40'} viewBox={'0 0 24 24'}/>*/}
                {/*</ThemeIcon>*/}
            </Container>
        </S.Header>
    );
};


