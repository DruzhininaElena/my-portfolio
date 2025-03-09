import {theme} from '../../../../styles/Theme.ts';
import styled from 'styled-components';
import {Button} from '../../../../components/UI/button/Button.tsx';

const StyledProject = styled.div`
    display: flex;
    margin: 0 auto 80px;
    border-radius: 24px;
    overflow: hidden;
    min-height: 524px;
    max-width: 992px;
    
    box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);

    &:nth-of-type(even) {
        flex-direction: row-reverse;
    }
    
    
    @media ${theme.media.desktopXl} {
        max-width: 100%;
    }

    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        &:nth-of-type(even) {
            flex-direction: column-reverse;
        }
    }
`

const ProjectContent = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.tablet} {
        width: 100%;
    }
`

const ContentWrapper = styled.div`
    padding: 50px;
    ${Button} {
        border-radius: 24px;
    }

    @media ${theme.media.tablet} {
        padding: 130px 30px;
    }
`

const ProjectTitle = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
`

const ProjectDescription = styled.p`
    font-size: 18px;
    margin: 24px 0 30px;
`

const ProjectImg = styled.picture`
    width: 50%;
    source, img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media ${theme.media.tablet} {
        width: 100%;
        min-height: 524px;
        source, img {
            min-height: 524px;
        }
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