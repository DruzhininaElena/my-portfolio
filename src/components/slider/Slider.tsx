import testimonyPhoto from '../../assets/images/testimony-photo.jpg'
import React from 'react';
import {S} from './Slider_Styles.ts';

export const Slider: React.FC = () => {
    return (
        <div>
            <S.TestimonyPhoto>
                <img src={testimonyPhoto} alt={'user photo'}/>
            </S.TestimonyPhoto>
            <S.TestimonyText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </S.TestimonyText>
            <S.TestimonyName>
                @Karmani
            </S.TestimonyName>
        </div>
    );
};

