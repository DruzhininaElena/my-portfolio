import {S} from './SectionTitle_Styles.ts';
import React from 'react';

type SectionTitlePropsType = {
    title: string
}

export const SectionTitle: React.FC<SectionTitlePropsType> = ({title}: SectionTitlePropsType) => {
    return (
        <S.StyledSectionTitle>{title}</S.StyledSectionTitle>
    );
};


