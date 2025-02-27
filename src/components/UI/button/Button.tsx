import styled from 'styled-components';

type ButtonPropsType = {
    children: string
}

export const Button = ({children}: ButtonPropsType) => {
    return (
        <StyledButton>{children}</StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 8px 24px;
    height: 43px;
`