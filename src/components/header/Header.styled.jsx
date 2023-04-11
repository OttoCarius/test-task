import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #5f4c46;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 20px;
`;

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 60px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 880px) {
    column-gap: 30px;
    row-gap: 20px;
  }

  @media (max-width: 480px) {
    column-gap: 20px;
    row-gap: 20px;
  }
`;

export const LinkItems = styled.li`
  font-size: 18px;
  color: #fff;

  :hover {
    color: #afaaaa;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
