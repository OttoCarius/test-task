import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 10px;
  height: 100vh;
  background-position: left top;
  display: flex;
  justify-content: center;
  background-color: #f1d6cd;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;

  h2 {
    color: #000;
    font-size: 32px;
    font-weight: 500;
  }
  p {
    font-size: 22px;
    font-weight: 500;
  }
`;
