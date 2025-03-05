import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Button} from '../../../components/UI/button/Button.tsx';
import {Container} from '../../../components/container/Container.tsx';
import {theme} from '../../../styles/Theme.ts';

export const Contacts = () => {
    return (
        <StyledContacts id={'contacts'}>
            <Container>
                <SectionTitle title={'Contact me'}/>
                <StyledForm>
                    <FieldWrapper>
                        <FieldLabel htmlFor={'name'}>Name</FieldLabel>
                        <Field id="name"/>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel htmlFor={'name'}>Email</FieldLabel>
                        <Field id="name"/>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel htmlFor={'name'}>Message</FieldLabel>
                        <Field as="textarea" id="name"/>
                    </FieldWrapper>
                    <Button as={'button'} type={'submit'}>Send</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
}

const StyledContacts = styled.section`
    margin-bottom: 56px;
`

const StyledForm = styled.form`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 24px;

    button {
        align-self: flex-end;
    }

    textarea {
        resize: none;
        height: 160px;
    }
`
const FieldWrapper = styled.div`
`

const FieldLabel = styled.label`
    display: inline-block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    flex-direction: column-reverse;
`

const Field = styled.input`
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 8px;
    width: 100%;
    padding: 8px 12px;
    min-height: 40px;
    background-color: ${theme.colors.secondaryBg};
    
    &:focus {
        outline: 1px solid ${theme.colors.accent};
    }
`
