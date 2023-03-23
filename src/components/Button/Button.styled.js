import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  background: none;
  padding: 8px 24px;
  font-size: 20px;

  ${(props) => console.log("props :>> ", props)}

  ${({ variant, theme }) => {
    return `background-color: ${
      variant === "error"
        ? theme.colors.error
        : variant === "warn"
        ? theme.colors.warn
        : variant === "success"
        ? theme.colors.success
        : "none"
    }`;
  }}
`;
