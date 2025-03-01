import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Menu} from '../../components/menu/Menu.tsx';

export const Header = () => {
    return (
        <StyledHeader className={'container'}>
            <HeaderWrapper>
                <Logo/>
                <Menu/>
            </HeaderWrapper>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
`
const HeaderWrapper = styled.div`
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
