import {LinkBtn} from '../../../../components/UI/linkBtn/LinkBtn.tsx';
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
            <S.ProjectImg>
                <source srcSet={imageSrcWebp} type={'image/webp'}/>
                <img src={imageSrc} alt="project photo"/>
            </S.ProjectImg>
            <S.ProjectContent>
                <S.ContentWrapper>
                    <S.ProjectTitle>{title}</S.ProjectTitle>
                    <S.ProjectDescription>{description}</S.ProjectDescription>
                    <LinkBtn href='#' $outlined>Project</LinkBtn>
                </S.ContentWrapper>
            </S.ProjectContent>
        </S.StyledProject>
    );
}
