import { useState, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import AvatarSelection from "./AvatarSelection";

export default function ProfilePicture() {
  return (
    <div>
      <Canvas
      shadows
        camera={{ position: [0, 0.5,1.5] }}
        style={{
          width: "150px",
          height: "180px",
          position: "absolute",
          left: "69px",
          top: "70px",
          borderRadius: "40px",
        }}
      >
      <OrbitControls/>

        <color attach="background" args={["#E74646"]} />
        <ambientLight intensity={0.015} />
          <AvatarSelection />
          

      </Canvas>
    </div>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#FFE5CA"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
