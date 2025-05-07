import { useEffect } from "react";
import { defineCustomElements } from "@swisscom/sdx/dist/js/webcomponents/loader";
import "@swisscom/sdx/dist/css/webcomponents.css";
import './App.css';
import image from "./assets/pfp.jpeg"


function App() {
  useEffect(() => {
    defineCustomElements();
  }, []);

  return (
    <><sdx-header></sdx-header><div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f2f4f5"
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "320px",
          textAlign: "center"
        }}
      >

        <sdx-card label="" style={{ paddingTop: "60px", overflow: "visible" }} image-src={image}>
          <h2 style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>Hi I'm Nahier!</h2>
          <p><strong>Software Developer</strong></p>
          <h3 style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>Facts:</h3>
          <p> I like to play Basketball.</p>
          <p> I Read a lot.</p>
          <p> I like to play Open World games.</p>
          <sdx-button label="Portfolio" variant="primary" style={{ marginTop: "1rem" }}
            href="https://nahier.ch"></sdx-button>
        </sdx-card>
      </div>
    </div></>
    
  );
}

export default App;