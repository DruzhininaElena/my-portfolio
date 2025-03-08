import styled from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

const StyledSocial = styled.div`
    margin-bottom: 29px;
`
const ListSocialIcons = styled.ul`
    display: flex;
    justify-content: space-around;
    min-width: 180px;
    color: ${theme.colors.primaryFont};
`

const SocialIcon = styled.li`
    
    transition: all 0.05s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`

export const S = {
    StyledSocial,
    ListSocialIcons,
    SocialIcon
}