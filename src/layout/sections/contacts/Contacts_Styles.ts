import {theme} from '../../../styles/Theme.ts';
import styled from 'styled-components';

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

export const S = {
    Field,
    FieldLabel,
    FieldWrapper,
    StyledForm,
    StyledContacts
}