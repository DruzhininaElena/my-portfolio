import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Button} from '../../../components/UI/button/Button.tsx';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact me</SectionTitle>
            <StyledForm>
                <div>
                    <label htmlFor={'name'}>Name</label>
                    <Field id={'name'}/>
                </div>
                <div>
                    <label htmlFor={'email'}>Email</label>
                    <Field id={'email'}/>
                </div>
                <div>
                    <label htmlFor={'message'}>Message</label>
                    <Field as={'textarea'} id={'message'}/>
                </div>
                <Button type={'submit'}>Send</Button>
            </StyledForm>
        </StyledContacts>
    );
}

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #ffece4;
`

const StyledForm = styled.form`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 24px;

    button {
        align-self: flex-end;
    }
`
const Field = styled.input`
    border: 1px solid #e8ecf4;
    border-radius: 8px;
    display: block;
    width: 100%;
    padding: 8px 12px;
    min-height: 40px;
`
