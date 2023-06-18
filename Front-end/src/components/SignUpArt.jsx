import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { createTheme } from "@mui/material/styles";
import { Stars } from "./Stars";

const theme = createTheme();

export default function SignUpArt() {
  return (
    <div style={{}}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#e74646",
        }}
      >
        <Stars />
        <OrbitControls />
      </Canvas>

      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h1
          style={{
            margin: 0,
            padding: 0,
            fontSize: "4em",
            fontWeight: 500,
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
            fontFamily: "Felix",
            userSelect: "none",
            background: `linear-gradient(30deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.5em",
          }}
        >
          AvatarVerse
        </h1>
      </div>
    </div>
  );
}



// Rest of the code remains the same
