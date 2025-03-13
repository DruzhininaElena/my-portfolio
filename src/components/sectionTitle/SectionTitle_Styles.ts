import {theme} from '../../styles/Theme.ts';
import styled from 'styled-components';

const StyledSectionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 1.5;
    text-align: center;
    color: #25282b;
    font-family: "Playfair Display", sans-serif;
    position: relative;
    margin-bottom: 88px;

    &::after {
        content: '';
        position: absolute;
        display: block;
        margin: 0 auto;
        bottom: -8px;
        left: 50%;
        transform: translate(-50%);
        border-radius: 2px;
        width: 100px;
        height: 4px;
        background: ${theme.colors.accent};
    }

    @media ${theme.media.desktopLg} {
        margin-bottom: 70px;
    }
    
    @media ${theme.media.tablet} {
        margin-bottom: 60px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 50px;
    }
`

export const S = {
    StyledSectionTitle
}