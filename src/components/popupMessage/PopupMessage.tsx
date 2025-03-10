import React from 'react';
import {S} from './PopupMessage_Styles.ts';

type PopupMessagePropsType = {
    text: string;
    bgColor?: string
}

export const PopupMessage: React.FC<PopupMessagePropsType> = ({text, bgColor}: PopupMessagePropsType) => {
    return (
        <S.PopupMessageStyled $bgColor={bgColor}>{text}</S.PopupMessageStyled>
    );
};
