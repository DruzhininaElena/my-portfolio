import {theme} from '../../../../styles/Theme.ts';
import styled from 'styled-components';

const StyledProject = styled.div`
    border-radius: 24px;
    overflow: hidden;
    background-color: ${theme.colors.secondaryBg};
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
    height: 100%;
    transition: .2s ease-in-out;

    @media ${theme.media.tablet} {
        max-width: 500px;
    }
    
    &:hover {
        box-shadow: 0 3px 30px rgba(0, 0, 0, 0.7);
        transform: scale(1.01);
    }
`

const ProjectContent = styled.div`
    width: 100%;
`

const ContentWrapper = styled.div`
    padding: 30px;
`

const ProjectTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.5;
`

const ProjectDescription = styled.p`
    font-size: 18px;
    margin: 24px 0 30px;
`

const ProjectImg = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
    height: 250px;
`

export const S = {
    StyledProject,
    ProjectContent,
    ContentWrapper,
    ProjectTitle,
    ProjectDescription,
    ProjectImg
}