import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo.tsx';
import {Menu} from '../../components/menu/Menu.tsx';
import {Container} from '../../components/container/Container.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    ${FlexWrapper} {
        padding: 12px 0;
    }
`
