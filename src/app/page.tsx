"use client"

import {useState, FormEvent} from "react";
import InfoFipe from "./components/InfoFipe";
export default function Home() {
  const [codigoFipe, setCodigoFipe] = useState("");
  const handleSubmit = (event : FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>Insira o codigo Fipe</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Insira o codigo fipe" className="text-black" value={codigoFipe} onChange={(e) => setCodigoFipe(e.target.value)}></input>
            <button type="submit"> Pesquisar</button>
        </form>
        <InfoFipe codigoFipe={codigoFipe}/>
      </div>

    </div>
  )
}
