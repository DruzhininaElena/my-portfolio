import {theme} from '../../../styles/Theme.ts';
import styled from 'styled-components';

const StyledSkills = styled.section`
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    gap: 74px 0;
    justify-items: center;
    

    svg {
        width: 100px;height: 100px;
    }
    
    
    @media ${theme.media.desktopXl} {
        grid-template-columns: repeat(4, 1fr);
    }
    @media ${theme.media.desktopLg} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px 0;
    }
`

export const S = {
    StyledSkills,
    GridWrapper
}