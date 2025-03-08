import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';

const StyledLogo = styled.a`
    @media ${theme.media.mobile} {
        svg {
            width: 35px;
            height: 35px;
        }
    }
`

export const S = {
    StyledLogo
}
