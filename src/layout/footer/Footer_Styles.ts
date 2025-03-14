import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';


const StyledFooter = styled.footer`
    margin: 0 auto;
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