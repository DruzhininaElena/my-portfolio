import {SectionTitle} from '../../../components/sectionTitle/SectionTitle.tsx';
import {LinkBtn} from '../../../components/UI/linkBtn/LinkBtn.tsx';
import {Container} from '../../../components/container/Container.ts';
import React, {useRef, useState} from 'react';
import {S} from './Contacts_Styles.ts';
import emailjs from '@emailjs/browser';
import {PopupMessage} from '../../../components/popupMessage/PopupMessage.tsx';

export const Contacts: React.FC = () => {

    const [isShowPopupSuccess, setIsShowPopupSuccess] = useState(false)
    const [isShowPopupError, setIsShowPopupError] = useState(false)

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
                    setIsShowPopupSuccess(true)
                    setTimeout(() => {
                        setIsShowPopupSuccess(false)
                    }, 3000)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsShowPopupError(true)
                    setTimeout(() => {
                        setIsShowPopupError(false)
                    }, 3000)
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
                        <S.Field id="email" name={'email'} type={'email'} required/>
                    </S.FieldWrapper>
                    <S.FieldWrapper>
                        <S.FieldLabel htmlFor={'message'}>Message</S.FieldLabel>
                        <S.Field as="textarea" id="message" name={'message'} required/>
                    </S.FieldWrapper>
                    <LinkBtn as={'button'} type={'submit'}>Send</LinkBtn>
                </S.StyledForm>
            </Container>
            {isShowPopupSuccess && <PopupMessage response={'success'}
                                                 text={'Your message has been sent'}
                                                 viewBox={'0 -2 14 14'}
                                                 iconId={'success'}
                                                 closePopup={() => setIsShowPopupSuccess(false)}
                                    />
            }
            {isShowPopupError && <PopupMessage response={'error'}
                                               text={'Your message was not sent'}
                                               bgColor={'#ffecf4'}
                                               color={'#83080f'}
                                               viewBox={'0 -2 24 24'}
                                               iconId={'error'}
                                               closePopup={() => setIsShowPopupError(false)}
            />
            }
        </S.StyledContacts>
    );
}

