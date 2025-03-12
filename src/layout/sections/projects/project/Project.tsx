import {LinkBtn} from '../../../../components/UI/linkBtn/LinkBtn.tsx';
import {S} from './Project_Styles.ts';
import React from 'react';

type ProjectPropsType = {
    title: string;
    description: string,
    imageSrc: string,
    directionContent?: string

}

export const Project: React.FC<ProjectPropsType> = ({title, description, imageSrc}: ProjectPropsType) => {
    return (
        <S.StyledProject>
            <S.ProjectImg src={imageSrc} alt="project photo"/>
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
