import {theme} from '../../../../styles/Theme.ts';
import styled from 'styled-components';

const PhotoStyled = styled.div`
    width: 50%;
    transform: translate(8%, -28%);

    @media ${theme.media.desktopLg} {
        width: 60%;
    }

    @media ${theme.media.desktopLg} {
        width: 60%;
        align-self: flex-end;
    }

    @media ${theme.media.tablet} {
        width: 75%;
        transform: translate(8%, -24%);
    }

    @media ${theme.media.mobile} {
        width: 110%;
        transform: translate(0, -20%);
        
        svg {
            pattern {
                transform: translate(150px, 275px);
                image {
                    width: 70%;
                    height: 70%;
                }
            }
        }
    }
`

export const S = {
    PhotoStyled
}