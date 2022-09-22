import React from "react";
import SkillsItem from "../components/SkillsItem";
import { SkillsList } from "../helpers/SkillsList";

import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="SkillsList">
        {SkillsList.map((skills, idx) => {
          return (
            <SkillsItem id={idx} name={skills.name} image={skills.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Skills;