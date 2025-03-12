import React from 'react';
import {S} from './PopupMessage_Styles.ts';
import {Icon} from '../icon/Icon.tsx';

type PopupMessagePropsType = {
    response: string;
    text: string;
    bgColor?: string;
    color?: string;
    viewBox: string;
    iconId: string;
    closePopup: () => void
}

export const PopupMessage: React.FC<PopupMessagePropsType> = ({text, bgColor, color, response, viewBox, iconId, closePopup}: PopupMessagePropsType) => {
    return (
        <S.PopupMessageStyled $bgColor={bgColor} $color={color} onClick={closePopup}>
            <S.MessageIcon>
                <Icon iconId={iconId} viewBox={viewBox} height={'30'} width={'30'}/>
            </S.MessageIcon>
            <S.Response $color={color}>{response}!</S.Response>
            <S.Text>{text}</S.Text>
        </S.PopupMessageStyled>
    );
};
