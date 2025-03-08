import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Button} from '../../../components/UI/button/Button.tsx';
import {Container} from '../../../components/container/Container.ts';
import React from 'react';
import {S} from './Contacts_Styles.ts';

export const Contacts: React.FC = () => {
    return (
        <S.StyledContacts id={'contacts'}>
            <Container>
                <SectionTitle title={'Contact me'}/>
                <S.StyledForm>
                    <S.FieldWrapper>
                        <S.FieldLabel htmlFor={'name'}>Name</S.FieldLabel>
                        <S.Field id="name"/>
                    </S.FieldWrapper>
                    <S.FieldWrapper>
                        <S.FieldLabel htmlFor={'email'}>Email</S.FieldLabel>
                        <S.Field id="email"/>
                    </S.FieldWrapper>
                    <S.FieldWrapper>
                        <S.FieldLabel htmlFor={'message'}>Message</S.FieldLabel>
                        <S.Field as="textarea" id="message"/>
                    </S.FieldWrapper>
                    <Button as={'button'} type={'submit'}>Send</Button>
                </S.StyledForm>
            </Container>
        </S.StyledContacts>
    );
}

