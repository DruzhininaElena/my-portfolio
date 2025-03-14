import {Icon} from '../../../components/icon/Icon.tsx';
import {S} from './Social_Styles.ts';
import React from 'react';


export const Social: React.FC = () => {
    return (
        <S.StyledSocial>
            <S.ListSocialIcons>
                <S.SocialIcon>
                    <a href="https://t.me/Druzhinina_EA" target={'_blank'}>
                        <Icon iconId={'telegram'} height={'40'} width={'40'} viewBox={'3 2 18 18'}/>
                    </a>
                </S.SocialIcon>
                <S.SocialIcon>
                    <a href="https://api.whatsapp.com/send?phone=9969384377" target={'_blank'}>
                        <Icon iconId={'whatsapp'} height={'40'} width={'40'} viewBox={'-2 -2 23 23'}/>
                    </a>
                </S.SocialIcon>
                <S.SocialIcon>
                    <a href="https://www.instagram.com/dr_elena_druzhinina" target={'_blank'}>
                        <Icon iconId={'instagram'} height={'40'} width={'40'} viewBox={'-3 -5 42 43'}/>
                    </a>
                </S.SocialIcon>
            </S.ListSocialIcons>
        </S.StyledSocial>
    );
};


