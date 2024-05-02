import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AvatarSelection from "./AvatarSelection";

export default function ProfilePicture() {
  return (
    <div>
      <Canvas
        shadows
        camera={{ position: [0, 0.5, 1.5] }}
        style={{
          width: "150px",
          height: "180px",
          position: "absolute",
          left: "69px",
          top: "70px",
          borderRadius: "40px",
        }}
      >
        <OrbitControls />

        <color attach="background" args={["#E74646"]} />
        <ambientLight intensity={0.015} />
        <AvatarSelection currentModel="Man1" />
      </Canvas>
    </div>
  );
}
