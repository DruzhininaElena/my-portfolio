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
                            delay: 75,
                        }}
                    />
                </S.Title>
                <S.Name>Hello, my name is Elena Druzhinina</S.Name>
                <S.Description>
                    Front-end developer with experience in creating SPAs using TypeScript, React, Redux (RTK Query).
                    Constantly improving my working technologies. Also planning to expand my technical expertise towards
                    Node.js to become a Full-Stack developer.
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






