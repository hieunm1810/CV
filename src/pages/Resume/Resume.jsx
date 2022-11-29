import React from "react";

export default function Resume() {
  return (
    <div className="resume">
      <div className="container">
        <div>
          <div className="title__section">
            <span className="title">Resume</span>
            <span className="underline"></span>
          </div>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <i className="fa fa-suitcase"></i>
                  <span>Working History</span>
                </li>
                <li>
                  <h3>Intern - FPT Software</h3>
                  <p>May 2020 - Sep 2020</p>
                  <p>Learning and working with Java Spring Boot</p>
                </li>
                <li>
                  <h3>FPT Software</h3>
                  <p>Sep 2020 - Nov 2021</p>
                  <p>Build Hooks to reusable functionalities develop.</p>
                  <p>Designed reusable user interface component.</p>
                  <p>Use pusher to integrate data immediate for user.</p>
                  <p>Proficient use Material UI.</p>
                  <p>Understand UX/UI.</p>
                  <p>Style through SCSS, SASS.</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <i className="fa fa-graduation-cap"></i>{" "}
                  <span>Education History</span>
                </li>
                <li>
                  <h3>FPT University</h3>
                  <p>2015 - 2021 </p>
                  <p>Software Engineering</p>
                </li>
                {/* <li>
                  <h3>Cybersoft Academy</h3>
                  <p>Mar 2022 - Nov 2022</p>
                  <p>Web Front-End Developing</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
