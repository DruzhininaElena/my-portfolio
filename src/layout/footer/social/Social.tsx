import {Icon} from '../../../components/icon/Icon.tsx';
import {S} from './Social_Styles.ts';
import React from 'react';


export const Social: React.FC = () => {
    return (
        <S.StyledSocial>
            <S.ListSocialIcons>
                <S.SocialIcon><a href="#"><Icon iconId={'telegram'} height={'40'} width={'40'} viewBox={'3 2 18 18'}/></a></S.SocialIcon>
                <S.SocialIcon><a href="#"><Icon iconId={'whatsapp'} height={'40'} width={'40'} viewBox={'-2 -2 23 23'}/></a></S.SocialIcon>
                <S.SocialIcon><a href="#"><Icon iconId={'email'} height={'40'} width={'40'} viewBox={'-2 -8 45 45'}/></a></S.SocialIcon>
            </S.ListSocialIcons>
        </S.StyledSocial>
    );
};


