import {Icon} from '../icon/Icon.tsx';
import {S} from './Logo_Styles.ts';
import React from 'react';

export const Logo: React.FC = () => {
    return (
        <S.StyledLogo href={'#main'}>
            <Icon iconId={'logo'} viewBox={'0 -2 50 50'} height={'50'} width={'50'}/>
        </S.StyledLogo>
    );
};


