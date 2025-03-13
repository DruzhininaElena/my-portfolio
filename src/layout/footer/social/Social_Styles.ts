import styled from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

const StyledSocial = styled.div`
    margin-bottom: 29px;
`
const ListSocialIcons = styled.ul`
    display: flex;
    justify-content: space-around;
    min-width: 180px;
`

const SocialIcon = styled.li`
    color: ${theme.colors.primaryFont};
    
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateY(-5px);
        color: ${theme.colors.secondaryFont};
    }

    @media ${theme.media.tablet} {
        &:hover {
            transform: translateY(0);
            color: ${theme.colors.primaryFont};
        }
    }
    
    a svg {
        fill: currentColor;
    }
    
`



export const S = {
    StyledSocial,
    ListSocialIcons,
    SocialIcon
}