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
    
    a svg {
        fill: currentColor;
    }

    @media screen and (max-width: 768px) {
        &:hover {
            transform: translateY(-5px);
            color: ${theme.colors.secondaryFont};
        }
    }
`



export const S = {
    StyledSocial,
    ListSocialIcons,
    SocialIcon
}