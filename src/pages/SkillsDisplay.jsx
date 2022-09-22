import React from "react";
import { useParams } from "react-router-dom";
import { SkillsList } from "../helpers/SkillsList";
import "../styles/SkillsDisplay.css";

function SkillsDisplay() {
  const { id } = useParams();
  const skills = SkillsList[id];
  return (
    <div className="skills">
      <h1> {skills.name}</h1>
      <img src={skills.image} />
      <p>
        <b>Skills:</b> {skills.skills}
      </p>
    </div>
  );
}

export default SkillsDisplay;