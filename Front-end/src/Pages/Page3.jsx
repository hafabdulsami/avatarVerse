/* eslint-disable no-dupe-keys */
/* eslint-disable react/no-unknown-property */

import { useState, useMemo } from "react";
import AvatarSelection from "../components/AvatarSelection";
import SignUp from "../components/Signup";
import SignUpArt from "../components/SignUpArt";
import { Canvas } from "@react-three/fiber";
import { Stars } from "../components/Stars";
import { OrbitControls } from "@react-three/drei";

const Page3 = () => {
  const [LeftSide, Setleftside] = useState(false);
  const [currentModel, setCurrentModel] = useState("Man1");
  const cachedChildNode = useMemo(() => {
    // Generate or compute the child node here
    return (
      <>
        <Canvas
          camera={{ position: [0, 0, 2] }}
          style={{
            backgroundColor: "rgb(231, 70, 70)",
          }}
        >
          <>
            <Stars />
            <AvatarSelection
              currentModel={currentModel}
              setCurrentModel={setCurrentModel}
            />
          </>
          <OrbitControls />
        </Canvas>
      </>
    );
  }, [currentModel]);

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div style={{ width: "55%", position: "relative", height: "100%" }}>
        {!LeftSide ? (
          <SignUpArt />
        ) : (
         cachedChildNode
        )}
      </div>
      <div style={{ width: "45%", height: "100%" }}>
        <SignUp
          Setleftside={Setleftside}
          LeftSide={LeftSide}
          currentModel={currentModel}
        />
      </div>
    </div>
  );
};

export default Page3;

//function Scene() {
//  const depthBuffer = useDepthBuffer({ frames: 1 });
//
//  return (
//    <>
//      <Stars />
//      <AvatarSelection />
//    </>
//  );
//}
