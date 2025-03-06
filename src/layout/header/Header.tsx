import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Menu} from './menu/Menu.tsx';
import {Container} from '../../components/container/Container.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {MenuMobile} from './menuMobile/MenuMobile.tsx';
// import {Icon} from '../../components/icon/Icon.tsx';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
                <MenuMobile/>
                {/*<ThemeIcon>*/}
                {/*    <Icon iconId={'theme'} height={'40'} width={'40'} viewBox={'0 0 24 24'}/>*/}
                {/*</ThemeIcon>*/}
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    ${FlexWrapper} {
        padding: 12px 0;
    }
    //position: absolute;
    //z-index: 10;
    //top: 0;
    //left: 0;
    //right: 0;
    
    position: sticky;
    top: 0;
    z-index: 10;

    ${Container} {
        position: relative;
    }
`

// const ThemeIcon = styled.div`
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     cursor: pointer;
// `
