import {theme} from '../../../../styles/Theme.ts';
import styled from 'styled-components';

const PhotoWrapper = styled.div`
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
        transform: translate(0, 0);
    }

    @media ${theme.media.mobile} {
        width: 100%;
        
    }
`

export const S = {
    PhotoWrapper
}