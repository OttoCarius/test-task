import styled from "styled-components";
import hero3 from "../../img/hero3.jpg";

export const Container = styled.div`
  padding: 40px 10px;
  height: 100vh;

  background-image: url(${hero3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Text = styled.p`
  max-width: 600px;
  padding: 20px;
  background-color: rgb(241, 214, 205, 0.6);
  margin: 0 10px;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 50px;

  @media (max-width: 980px) {
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  @media (max-width: 530px) {
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;

export const Text2 = styled.p`
  max-width: 600px;
  padding: 20px;
  background-color: rgb(241, 214, 205, 0.6);
  margin: 0 10px;
  color: #000;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 980px) {
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  @media (max-width: 530px) {
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
