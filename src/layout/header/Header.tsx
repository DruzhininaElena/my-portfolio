import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Menu} from './menu/Menu.tsx';
import {Container} from '../../components/container/Container.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {MenuMobile} from './menuMobile/MenuMobile.tsx';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
                <MenuMobile/>
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
`
