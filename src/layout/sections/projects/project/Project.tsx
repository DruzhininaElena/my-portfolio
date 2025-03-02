import {Button} from '../../../../components/UI/button/Button.tsx';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme.ts';

type ProjectPropsType = {
    title: string;
    description: string,
    imageSrc: string,
    directionContent?: string

}

export const Project = ({title, description, imageSrc}: ProjectPropsType) => {
    return (
        <StyledProject>
            <ProjectContent>
                <ContentWrapper>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>{description}</ProjectDescription>
                    <Button as='a' href='#' outlined>View Project</Button>
                </ContentWrapper>
            </ProjectContent>
            <ProjectImg src={imageSrc} alt="project image"/>
        </StyledProject>
    );
}

const StyledProject = styled.div`
    display: flex;
    margin: 0 104px 80px;
    border-radius: 24px;
    overflow: hidden;

    &:nth-last-of-type(even) {
        flex-direction: row-reverse;
    }
    
    //@media screen and (max-width: 1200px) {
    //    margin: 0 0 80px 0;
    //}
`

const ProjectContent = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentWrapper = styled.div`
    padding: 50px;
    ${Button} {
        border-radius: 24px;
    }
`

// const ProjectTitle = dfstyled(SectionTitle)`
//     font-size: 20px;
//     &::after {
//         display: none;
//     }
// `

const ProjectTitle = styled.h3`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.5;
`

const ProjectDescription = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: ${theme.colors.secondaryFont};
    margin: 24px 0;
`

const ProjectImg = styled.img`
    width: 50%;
    object-fit: cover;
`