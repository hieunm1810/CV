import React from "react";
import htmlImg from "../../assets/imgs/html.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div>
          <div className="aboutMe">
            <div className="title__section">
              <span className="title">About Me</span>
              <span className="underline"></span>
            </div>

            <p>
              Having given up a bachelor's degree in information technology
              because of my previous bad habits, so when I have the opportunity
              to go back to continue my journey as a programmer, I try to take
              the time to update myself skills, learn new technologies and
              practice my programming skills, thus I can contribute more to the
              company that give me a chance.
            </p>
          </div>
          <div className="ability">
            <div className="title__section">
              <span className="title">My current abilities</span>
              <span className="underline"></span>
            </div>
            <div className="row">
              <div className="col-3">
                <div className="card">
                  <img src={htmlImg} alt="HTMLicon" width={50} height={50} />
                  <div className="card-body">
                    <h5 className="card-title">Front-End Development</h5>
                    <p className="card-text">
                      I have been learning and working with REACT JS for 6 month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="title__section">
              <span className="title">Code skills</span>
              <span className="underline"></span>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="skill__group">
                  <p>HTML5</p>
                  <div className="skill__progressBar">
                    <div className="percentage" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className="skill__group">
                  <p>CSS3</p>
                  <div className="skill__progressBar">
                    <div className="percentage" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="skill__group">
                  <p>Javascript</p>
                  <div className="skill__progressBar">
                  <div className="percentage" style={{width: "70%"}}></div>
                  </div>
                </div>
                <div className="skill__group">
                  <p>React JS</p>
                  <div className="skill__progressBar">
                  <div className="percentage" style={{width: "65%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
