import Header from "../Header/Header";
import "./Main.css";
import { useContext } from "react";

function Main() {
  return <main className="main">
    <section className="main__header">
      <Header/>
    </section>
    <div className="main__searchbar">
      <h1 className="main__searchbar_title">What's going on in the world?</h1>
      <p className="main__searchbar_description">Find the latest news on any topic and save them in your personal account.</p>
    </div>
  </main>;
}

export default Main;
