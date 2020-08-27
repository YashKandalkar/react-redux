import React from "react";
import PunList from "./components/PunList/PunList";
import PunFilter from "./components/PunFilter/PunFilter";
import AddPun from "./components/AddPun/AddPun";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Pun Search</h1>
      <PunFilter />
      <PunList />
      <AddPun />
    </div>
  );
}
