import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';
import backgroundFooter from '../../assets/images/yellow-bg-footer.png'

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

export const S = {
    StyledFooter,
    Copyright
}