import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: #5f4c46;
  margin-top: auto;
  padding: 10px 20px 10px;
`;

export const ListLinks = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 60px;
  row-gap: 20px;
  flex-wrap: wrap;
`;

export const ListItems = styled.li`
  font-size: 28px;
  color: #ffffff;

  :hover {
    color: #7a7878;
  }
`;

export const FooterText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  color: #ffffff;
`;
