import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Icon} from '../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {Slider} from '../../../components/slider/Slider.tsx';
import {Container} from '../../../components/container/Container.ts';
import {S} from './Testimony_Styles.ts';
import React from 'react';

export const Testimony: React.FC = () => {
    return (
        <S.StyledTestimony id={'testimony'}>
            <Container>
                <FlexWrapper $direction={'column'} $align={'center'}>
                    <SectionTitle title={'Testimony'}/>
                    <S.SliderWrapper>
                        <S.IconWrapper className={'firstQuote'}>
                            <Icon iconId={'quote'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
                        </S.IconWrapper>
                        <Slider/>
                        <S.IconWrapper className={'secondQuote'}>
                            <Icon iconId={'quote'} width={'30'} height={'30'} viewBox={'0 0 50 50'}/>
                        </S.IconWrapper>
                    </S.SliderWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledTestimony>
    );
}
