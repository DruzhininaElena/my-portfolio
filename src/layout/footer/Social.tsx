import styled from 'styled-components';
import {Icon} from '../../components/icon/Icon.tsx';
import {theme} from '../../styles/Theme.ts';


export const Social = () => {
    return (
        <StyledSocial>
            <ListSocialIcons>
                <SocialIcon><a href="#"><Icon iconId={'telegram'} height={'40'} width={'40'} viewBox={'3 2 18 18'}/></a></SocialIcon>
                <SocialIcon><a href="#"><Icon iconId={'whatsapp'} height={'40'} width={'40'} viewBox={'-2 -2 23 23'}/></a></SocialIcon>
                <SocialIcon><a href="#"><Icon iconId={'email'} height={'40'} width={'40'} viewBox={'-2 -8 45 45'}/></a></SocialIcon>
            </ListSocialIcons>
        </StyledSocial>
    );
};

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
