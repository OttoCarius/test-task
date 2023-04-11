import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 10px 20px 10px;
  background-color: #f1d6cd;
`;

export const CoursesWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-items: center;

  column-gap: 50px;
  row-gap: 30px;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-template-rows: repeat(3, 300px);

  @media (max-width: 750px) {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(3, 250px);
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 320px;
  padding: 10px;
  text-align: start;
  border-color: #fff;
  border-radius: 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10px;
  margin-bottom: 10px;
`;
