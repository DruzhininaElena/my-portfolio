import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.tsx';
import {Button} from '../../../components/UI/button/Button.tsx';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle title={'Contact me'}/>
            <StyledForm>
                <label>
                    Name
                    <Field/>
                </label>
                <label>
                    Email
                    <Field/>
                </label>
                <label>
                    Message
                    <Field/>
                </label>
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
