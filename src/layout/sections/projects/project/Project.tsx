import {Button} from '../../../../components/UI/button/Button.tsx';
import {S} from './Project_Styles.ts';
import React from 'react';

type ProjectPropsType = {
    title: string;
    description: string,
    imageSrc: string,
    imageSrcWebp: string,
    directionContent?: string

}

export const Project: React.FC<ProjectPropsType> = ({title, description, imageSrc, imageSrcWebp}: ProjectPropsType) => {
    return (
        <S.StyledProject>
            <S.ProjectContent>
                <S.ContentWrapper>
                    <S.ProjectTitle>{title}</S.ProjectTitle>
                    <S.ProjectDescription>{description}</S.ProjectDescription>
                    <Button href='#' $outlined>View Project</Button>
                </S.ContentWrapper>
            </S.ProjectContent>
            <S.ProjectImg>
                <source srcSet={imageSrcWebp} type={'image/webp'}/>
                <img src={imageSrc} alt="project photo"/>
            </S.ProjectImg>
        </S.StyledProject>
    );
}
