import {Social} from './social/Social.tsx';
import {FlexWrapper} from '../../components/FlexWrapper.ts';

import React from 'react';
import {S} from './Footer_Styles.ts';

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
                <FlexWrapper $direction={'column'} $align={'center'}>
                    <Social/>
                    <S.Copyright>© Elena Druzhinina, 2025</S.Copyright>
                </FlexWrapper>
                {/*<BackgroundFooter>*/}
                {/*    <img src={backgroundFooter} alt="background footer"/>*/}
                {/*</BackgroundFooter>*/}
        </S.StyledFooter>
    );
};


