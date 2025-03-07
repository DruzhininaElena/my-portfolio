import styled from 'styled-components';
import {Social} from './Social.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {theme} from '../../styles/Theme.ts';
import backgroundFooter from '../../assets/images/yellow-bg-footer.png'

export const Footer = () => {
    return (
        <StyledFooter>
                <FlexWrapper $direction={'column'} $align={'center'}>
                    <Social/>
                    <Copyright>Madelyn Torff 2021 </Copyright>
                </FlexWrapper>
                {/*<BackgroundFooter>*/}
                {/*    <img src={backgroundFooter} alt="background footer"/>*/}
                {/*</BackgroundFooter>*/}
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    margin: 0 auto;
    background-image: url(${backgroundFooter});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    max-width: 1440px;
    width: 100%;
`
const Copyright = styled.small`
    text-align: center;
    font-size: 16px;
    color: ${theme.colors.secondaryFont};
    margin-bottom: 240px;

    @media ${theme.media.tablet} {
        margin-bottom: 200px;
    }
    
    @media ${theme.media.mobile} {
        margin-bottom: 177px;
    }
`
