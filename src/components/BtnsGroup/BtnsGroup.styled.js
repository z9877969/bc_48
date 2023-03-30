import styled from "styled-components";

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  gap: 1rem;
`;

export const Button = styled.div`
  width: 40%;
  padding: 2.4rem 0;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.2rem;
  background: ${(props) => {
    return props.theme.color.btn;
  }};
  color: rgb(251, 251, 251);
`;
