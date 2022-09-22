import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Muhammad Iqbal</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> About Me</h1>
        <ol className="list">
          <li className="item">
            <span>
            I am someone who is organized and focused
            on work results. Even so I'm a person
            realistic when setting a goal and
            try to be better and more efficient in achieving
            those goals.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;