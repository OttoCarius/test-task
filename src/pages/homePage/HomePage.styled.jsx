import styled from "styled-components";
import hero from "../../img/hero2.jpg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 40px 10px;
  height: 100vh;

  display: flex;
  justify-content: center;

  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;

  @media (max-width: 880px) {
    padding: 30px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #f8eff4;
  margin-top: 150px;
  padding: 10px;
  background-color: rgb(95, 76, 70, 0.6);
  border-radius: 20px;
  text-align: center;

  @media (max-width: 880px) {
    font-size: 34px;
    font-weight: 500;
    color: #f8eff4;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    font-weight: 600;
    color: #f8eff4;

    background-color: rgb(95, 76, 70, 0.9);
  }
`;

export const Text = styled.p`
  font-size: 32px;
  font-weight: 500;
  color: #fff;
  margin-top: 90px;
  padding: 10px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 880px) {
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    margin-top: 80px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 32px;
  font-weight: 500;
  color: #fff;
  padding: 10px;
  background-color: #110f0f;
  border-radius: 30px;

  :hover {
    background-color: #554b4b;
  }

  @media (max-width: 880px) {
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    padding: 10px;
  }
`;
