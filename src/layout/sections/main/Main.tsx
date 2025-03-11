import {LinkBtn} from '../../../components/UI/linkBtn/LinkBtn.tsx';
import {Photo} from './photo/Photo.tsx';
import {S} from './Main-Styles.ts';
import React from 'react';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.StyledMain id={'about'}>
            <S.ContentWrapper>
                <S.Title>
                    <p>Frontend Developer</p>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </S.Title>
                <S.Name>Hello, my name is Elena Druzhinina</S.Name>
                <S.Description>
                    Short text with details about you, what you do or your professional career. You can add more
                    information on the about page.
                </S.Description>
                <S.ButtonsWrapper>
                    <LinkBtn href={'#projects'}>Projects</LinkBtn>
                    <LinkBtn href={'#'} $outlined>LinkedIn</LinkBtn>
                </S.ButtonsWrapper>
            </S.ContentWrapper>
            <Photo/>
        </S.StyledMain>
    );
};






