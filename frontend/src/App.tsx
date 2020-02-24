import React, { useEffect, useState } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

import DevItem from "./components/DevItem/index";
import DevForm from "./components/DevForm/index";

interface Dev {
  _id: number;
  avatar_url: String;
  name: String;
  techs: Array<String>;
  bio: String;
  github_username: String;
}

function App() {
  const [devs, setDevs] = useState<Dev[]>([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data: Object) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
