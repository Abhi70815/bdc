import React from 'react';

import course1 from '../';
import course2 from '../assets/img/course2.jpg';
import course3 from '../assets/img/course3.jpg';
import course4 from '../assets/img/course4.jpg';

import '../styles/courses.css';

const Courses = () => {
  return (
    <>
      <div className="header_text">
        <h3>Our Courses</h3>
      </div>

      <h1 className="center">- Courses we offer-</h1>

      <section className="course-section" id="courses">
        <div className="course-card">
          <img src={course1} alt="Course 1" />
          <h3>BCA</h3>
        </div>
        <div className="course-card">
          <img src={course2} alt="Course 2" />
          <h3>BBA</h3>
        </div>
        <div className="course-card">
          <img src={course4} alt="Course 2" />
          <h3>B-COM</h3>
        </div>
        <div className="course-card">
          <img src={course3} alt="Course 3" />
          <h3>B.Sc</h3>
        </div>
      </section>

      <div className="fees">
        <h2>College Fees</h2>
        <p>
          The fees should be deposited in four installments:
          <span>* 1st installment at the time of admission in the respective year - 25% fees</span>
          <span>* 2nd installment before the start of CT-1 of odd semester - 25% fees</span>
          <span>* 3rd Installment at the start of even semester - 25% fees</span>
          <span>* Last installment before the start of 1st CT of even semester - 25% fees</span>
          <span>* Penalty is imposed after due date.</span>
          <span><a href="/contact">Click here to Pay Now</a></span>
        </p>
      </div>

      <h1>College Facilities</h1>

      <div className="facility">
        <h2>Library</h2>
        <div className="sport_img">
          <img src="/img/labrary1.jpeg" alt="" />
          <img src="/img/labrary2.jpeg" alt="" />
          <img src="/img/labrary3.jpeg" alt="" />
          <img src="/img/labrary1.jpeg" alt="" />
        </div>
        <p>
          The college library provides a wide range of books, journals, and online resources for students and faculty.
          <br />
          It is a quiet and comfortable space for studying and research.
        </p>
      </div>

      <div className="facility">
        <h2>Sports Facilities</h2>
        <div className="sport_img">
          <img src="/img/sport1.jpg" alt="Sports Facilities" />
          <img src="/img/sport2.jpg" alt="Sports Facilities" />
          <img src="/img/sport4.jpg" alt="Sports Facilities" />
          <img src="/img/sport6.jpg" alt="Sports Facilities" />
          <img src="/img/sport8.jpg" alt="Sports Facilities" />
          <img src="/img/sport1.jpg" alt="Sports Facilities" />
          <img src="/img/sport5.jpg" alt="Sports Facilities" />
          <img src="/img/sport4.jpg" alt="Sports Facilities" />
        </div>
        <p>
          The college offers a variety of sports facilities including a gymnasium, basketball court, football field, and swimming pool.
          <br />
          Students can participate in sports activities and stay fit.
        </p>
      </div>
    </>
  );
};

export default Courses;
