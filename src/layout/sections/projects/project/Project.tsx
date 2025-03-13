import {LinkBtn} from '../../../../components/UI/linkBtn/LinkBtn.tsx';
import {S} from './Project_Styles.ts';
import React from 'react';
import {FlexWrapper} from '../../../../components/FlexWrapper.ts';

type ProjectPropsType = {
    title: string;
    description: string,
    imageSrc: string,
    directionContent?: string,
    projectSrc?: string,
    gitHubSrc?: string

}

export const Project: React.FC<ProjectPropsType> = ({
                                                        title,
                                                        description,
                                                        imageSrc,
                                                        projectSrc,
                                                        gitHubSrc}: ProjectPropsType) => {
    return (
        <S.StyledProject>
            <S.ProjectImg src={imageSrc} alt="project photo"/>
            <S.ProjectContent>
                <S.ContentWrapper>
                    <S.ProjectTitle>{title}</S.ProjectTitle>
                    <S.ProjectDescription>{description}</S.ProjectDescription>
                    <FlexWrapper $gap={'20px'}>
                        <LinkBtn href={projectSrc} target={'_blank'} $outlined>Project</LinkBtn>
                        <LinkBtn href={gitHubSrc} target={'_blank'} $outlined>Code</LinkBtn>
                    </FlexWrapper>

                </S.ContentWrapper>
            </S.ProjectContent>
        </S.StyledProject>
    );
}
