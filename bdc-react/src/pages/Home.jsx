import React from 'react';

import course1 from '../assets/img/course1.jpg';
import course2 from '../assets/img/course2.jpg';
import course3 from '../assets/img/course3.jpg';
import course4 from '../assets/img/course4.jpg';

const Home = () => {
  return (
    <>
      <div className="header_text">
        <h3>buddha degree college</h3>
        <p>one of the top college in Gorakhpur</p>
      </div>

      <div className="btn1">
        <a href="#courses">Courses</a>
      </div>

      <h1 className="center">- Courses we offers-</h1>

      <section className="course-section" id="courses">
        <div className="course-card">
          <a href="/courses"><img src={course1} alt="Course 1" /></a>
          <h3>BCA</h3>
        </div>
        <div className="course-card">
          <a href="/courses"><img src={course2} alt="Course 2" /></a>
          <h3>BBA</h3>
        </div>
        <div className="course-card">
          <a href="/courses"><img src={course4} alt="Course 2" /></a>
          <h3>B-COM</h3>
        </div>
        <div className="course-card">
          <a href="/courses"><img src={course3} alt="Course 3" /></a>
          <h3>B.Sc</h3>
        </div>
      </section>

      <div className="placement">
        <h4>- placement companies-</h4>
        <div>
          <marquee behavior="" direction="left">
            <img src="/img/pl.jpg" alt="" />
            <img src="/img/pl1.jpg" alt="" />
            <img src="/img/pl2.jpg" alt="" />
          </marquee>
        </div>
        <h4>recent placements-</h4>
        <div>
          <marquee behavior="" direction="right">
            <img src="/img/pls1.jpg" alt="" />
            <img src="/img/pls2.jpg" alt="" />
            <img src="/img/pls3.jpg" alt="" />
            <img src="/img/pls4.jpg" alt="" />
            <img src="/img/pls5.jpg" alt="" />
            <img src="/img/pls6.jpg" alt="" />
          </marquee>
        </div>
      </div>

      <div className="hostel">
        <h2>- Hostel -</h2>
        <div>
          <a href="/hostel" className="hs">
            <img src="/img/5.jpg" alt="" />
          </a>
          <a href="/hostel">More about...</a>
        </div>
      </div>

      <div className="event">
        <h1>-- Events --</h1>
        <div className="recent">
          <marquee behavior="" direction="up">
            <img src="/img/ev1.jpeg" alt="" />
            <img src="/img/ev2.jpeg" alt="" />
          </marquee>
          <div>
            <div>
              <h1>TECH-WIZARD (Annual Technical Fest)</h1>
              <p>Will be organized in Buddha Spring and Winter Festival in every semester.</p>
            </div>
          </div>
        </div>
      </div>

      <h1>College Facilities</h1>

      <div className="facility">
        <h2>Library</h2>
        <div className="sport_img">
          <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1664300897489-fd98eee64faf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1661963938208-582f8f30baa6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <p>
          The college library provides a wide range of books, journals, and online resources for students and faculty.
          <br />
          It is a quiet and comfortable space for studying and research.
        </p>
      </div>

      <div className="facility">
        <h2>Laboratory</h2>
        <div className="sport_img">
          <img src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1682431922475-a0dd6ba340a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img src="https://plus.unsplash.com/premium_photo-1681822618853-d0e61c478b44?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <p>
          The college laboratory is equipped with state-of-the-art facilities for conducting practical experiments and research in various fields of study.
          <br />
          Students can gain hands-on experience and enhance their learning.
        </p>
      </div>

      <div className="facility">
        <h2>Sports Facilities</h2>
        <div className="sport_img">
          <img src="https://plus.unsplash.com/premium_photo-1676634832351-ed7ecb9b9a58?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sports Facilities" />
          <img src="https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sports Facilities" />
          <img src="https://images.unsplash.com/photo-1494778696781-8f23fd5553c4?q=80&w=1622&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sports Facilities" />
          <img src="https://images.unsplash.com/photo-1582086772405-6e2dcef428d4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sports Facilities" />
          <img src="https://images.unsplash.com/photo-1612729271925-f215dfbc0191?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sports Facilities" />
          <img src="https://plus.unsplash.com/premium_photo-1708962200478-6f6fa4ad727d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sports Facilities" />
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

export default Home;
