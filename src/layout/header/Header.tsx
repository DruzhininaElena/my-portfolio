import {Logo} from '../../components/logo/Logo.tsx';
import {MenuDesktop} from './menuDesktop/MenuDesktop.tsx';
import {Container} from '../../components/container/Container.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {MenuMobile} from './menuMobile/MenuMobile.tsx';
import * as React from 'react';
import {S} from './Heder_Styles.ts';
import {useState} from 'react';

export const Header: React.FC = () => {
    const [scroll, setScroll] = useState(window.scrollY)

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <S.Header $isPageScrolled={scroll > 0}>
            <Container>
                <FlexWrapper $justify={'space-between'} $align={'center'}>
                    <Logo/>
                    <MenuDesktop/>
                </FlexWrapper>
                <MenuMobile/>
                {/*<ThemeIcon>*/}
                {/*    <Icon iconId={'theme'} height={'40'} width={'40'} viewBox={'0 0 24 24'}/>*/}
                {/*</ThemeIcon>*/}
            </Container>
        </S.Header>
    );
};


