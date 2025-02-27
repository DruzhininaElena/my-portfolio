import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';
import {Button} from '../../../../components/UI/button/Button.tsx';
import styled from 'styled-components';

type ProjectPropsType = {
    title: string;
    description: string,
    imageSrc: string,
    directionContent?: string

}

export const Project = ({title, description, imageSrc, directionContent}: ProjectPropsType) => {
    return (
        <FlexWrapper direction={directionContent}>
            <ProjectContent>
                <h3>{title}</h3>
                <p>{description}</p>
                <Button>View Project</Button>
            </ProjectContent>
            <StyledImgProject src={imageSrc} alt="project image"/>
        </FlexWrapper>
    );
}

const ProjectContent = styled.div`
`
const StyledImgProject = styled.img`
    width: 50%;
`
