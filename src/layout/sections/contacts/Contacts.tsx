import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {Button} from '../../../components/UI/button/Button.tsx';
import {Container} from '../../../components/container/Container.ts';
import React, {useRef, useState} from 'react';
import {S} from './Contacts_Styles.ts';
import emailjs from '@emailjs/browser';
import {PopupMessage} from '../../../components/popupMessage/PopupMessage.tsx';

export const Contacts: React.FC = () => {

    const [isShowPopupSuccess, setIsShowPopupSuccess] = useState(false)
    const [isShowPopupFailed, setIsShowPopupFailed] = useState(false)

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_cqrb5ju', 'template_hh9jb5f', form.current, {
                publicKey: 'mQMPdrR-jVpbBU4Vu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsShowPopupSuccess(true)
                    setTimeout(() => {setIsShowPopupSuccess(false)}, 3000)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsShowPopupFailed(true)
                    setTimeout(() => {setIsShowPopupFailed(false)}, 3000)
                },
            );

        e.currentTarget.reset()
    };

    return (
        <S.StyledContacts id={'contacts'}>
            <Container>
                <SectionTitle title={'Contact me'}/>
                <S.StyledForm ref={form} onSubmit={sendEmail}>
                    <S.FieldWrapper>
                        <S.FieldLabel htmlFor={'name'}>Name</S.FieldLabel>
                        <S.Field id="name" name={'user_name'} required/>
                    </S.FieldWrapper>
                    <S.FieldWrapper>
                        <S.FieldLabel htmlFor={'email'}>Email</S.FieldLabel>
                        <S.Field id="email" name={'email'} required/>
                    </S.FieldWrapper>
                    <S.FieldWrapper>
                        <S.FieldLabel htmlFor={'message'}>Message</S.FieldLabel>
                        <S.Field as="textarea" id="message" name={'message'} required/>
                    </S.FieldWrapper>
                    <Button as={'button'} type={'submit'}>Send</Button>
                </S.StyledForm>
            </Container>
            {isShowPopupSuccess && <PopupMessage text={'Your message has been sent successfully'}/>}
            {isShowPopupFailed && <PopupMessage text={'Error! Your message was not sent.'} bgColor={'rgba(253,130,165,0.5)'}/>}
        </S.StyledContacts>
    );
}

