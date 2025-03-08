import {Button} from '../../../components/UI/button/Button.tsx';
import {Photo} from './photo/Photo.tsx';
import {S} from './Main-Styles.ts';
import React from 'react';

export const Main: React.FC = () => {
    return (
        <S.StyledMain id={'main'}>
            <S.ContentWrapper>
                <S.Title>Frontend Developer</S.Title>
                <S.Name>Hello, my name is Elena Druzhinina</S.Name>
                <S.Description>
                    Short text with details about you, what you do or your professional career. You can add more
                    information on the about page.
                </S.Description>
                <S.ButtonsWrapper>
                    <Button href={'#projects'}>Projects</Button>
                    <Button href={'#'} $outlined>LinkedIn</Button>
                </S.ButtonsWrapper>
            </S.ContentWrapper>
            <Photo/>
        </S.StyledMain>
    );
};






