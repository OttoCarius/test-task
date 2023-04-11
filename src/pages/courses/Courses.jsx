import React, { useState } from "react";
import { courses } from "../../helpers/coursesList";
import { CoursesWrap, Container, Input, InputWrap } from "./Courses.styled";
import Course from "../../components/course/Course";

function CoursesPage() {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <InputWrap>
        <Input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputWrap>
      <div>
        <CoursesWrap>
          {courses
            .filter(
              (course) =>
                course.title.toLowerCase().includes(query) ||
                course.skills.toLowerCase().includes(query)
            )
            .map((course, id) => {
              return (
                <Course
                  key={id}
                  title={course.title}
                  skills={course.skills}
                  img={course.img}
                  id={id}
                />
              );
            })}
        </CoursesWrap>
      </div>
    </Container>
  );
}

export default CoursesPage;
