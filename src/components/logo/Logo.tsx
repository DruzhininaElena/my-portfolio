import {Icon} from '../icon/Icon.tsx';
import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';

export const Logo = () => {
    return (
        <StyledLogo href={'#main'}>
            <Icon iconId={'logo'} viewBox={'0 -2 50 50'} height={'50'} width={'50'}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    @media ${theme.media.mobile} {
        svg {
            width: 35px;
            height: 35px;
        }
    }
`
