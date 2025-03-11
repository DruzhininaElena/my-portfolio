import {theme} from '../../../../styles/Theme.ts';
import styled from 'styled-components';

const StyledProject = styled.div`
    border-radius: 24px;
    overflow: hidden;
    background-color: ${theme.colors.secondaryBg};
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);

    @media ${theme.media.tablet} {
        max-width: 500px;
    }
    
`



const ProjectContent = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

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

const ProjectImg = styled.picture`
    width: 100%;
    display: block;
    source, img {
        object-fit: cover;
        width: 100%;
        max-height: 250px;
    }
`

export const S = {
    StyledProject,
    ProjectContent,
    ContentWrapper,
    ProjectTitle,
    ProjectDescription,
    ProjectImg
}