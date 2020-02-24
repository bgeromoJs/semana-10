import React from "react";

import "./styles.css";

interface Props {
  dev: Dev;
}

interface Dev {
  _id: number;
  avatar_url: String;
  name: String;
  techs: Array<String>;
  bio: String;
  github_username: String;
}

const DevItem: React.FC<Props> = ({ dev }) => (
  <li className="dev-item">
    <header>
      <img src={`${dev.avatar_url}`} alt={`${dev.name}`} />
      <div className="user-info">
        <strong>{dev.name}</strong>
        <span>{dev.techs.join(", ")}</span>
      </div>
    </header>
    <p>{dev.bio}</p>
    <a href={`https://github.com/${dev.github_username}`}>
      Acessar perfil no Github
    </a>
  </li>
);

export default DevItem;
