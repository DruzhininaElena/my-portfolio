import styled from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

const StyledProjects = styled.section`
    position: relative;
    background-color: ${theme.colors.primaryBg};
`

const ProjectsWrapper = styled.div`
    display: grid;
    gap: 50px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
    }
`

export const S = {
    StyledProjects,
    ProjectsWrapper
}