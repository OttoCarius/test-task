import styled from "styled-components";

export const CourseWrap = styled.li`
  width: 200px;
  background-color: #5f4c46;
  box-shadow: 0px 5px 35px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :hover {
    background-color: #b48678;
  }

  @media (max-width: 750px) {
    width: 160px;
  }

  @media (max-width: 530px) {
    width: 270px;
  }
`;

export const CourseImg = styled.img`
  width: 200px;
  height: 230px;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 750px) {
    width: 160px;
    height: 180px;
  }

  @media (max-width: 530px) {
    width: 270px;
    height: 300px;
  }
`;

export const Section = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  text-align: center;
  padding: 5px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: #fff;
`;

export const Text = styled.p`
  text-align: center;
  padding: 5px;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
`;

// .project {
// 	max-width: 370px;
// 	background-color: var(--project-card-bg);
// 	box-shadow: var(--box-shadow);
// 	border-radius: 10px;
// }

// .project__img {
// 	border-radius: 10px;
// }

// .project__title {
// 	padding: 15px 20px 25px;
// 	font-weight: 700;
// 	font-size: 24px;
// 	line-height: 1.3;
// 	color: var(--project-card-text);
// }
