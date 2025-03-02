import styled from 'styled-components';
import {Social} from './Social.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {Container} from '../../components/container/Container.tsx';
import {theme} from '../../styles/Theme.ts';
import backgroundFooter from '../../assets/images/yellow-bg-footer.svg'

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Social/>
                    <Copyright>Madelyn Torff 2021 </Copyright>
                </FlexWrapper>
                <BackgroundFooter>
                    <img src={backgroundFooter} alt="background footer"/>
                </BackgroundFooter>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    ${Container} {
        position: relative;
    }
    
`
const Copyright = styled.small`
    text-align: center;
    font-size: 16px;
    color: ${theme.colors.secondaryFont};
    margin-bottom: 240px;
`

const BackgroundFooter = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 50%;
    transform: translate(-50%);
`