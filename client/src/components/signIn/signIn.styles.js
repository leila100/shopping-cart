import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    margin-bottom: 35px;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
