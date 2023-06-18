/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { Fragment, Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Environment, Loader } from "@react-three/drei";

import { F5 } from "../../public/models/F5";
import { F6 } from "../../public/models/F6";
import * as random from "maath/random/dist/maath-random.esm";
import { Points, PointMaterial } from "@react-three/drei";

import Poppins from "../assets/Poppins.ttf";

import { F7 } from "../../public/models/F7";

import { Link } from "react-router-dom";

function Sphere(props) {
  return (
    <mesh castShadow {...props} renderOrder={-2000000}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#FA9884" roughness={1} />
    </mesh>
  );
}

function Zoom({ vec = new THREE.Vector3(0, 0, 100) }) {
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 10, 0, 100), 0.075);
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 22, 0.075);
    state.camera.updateProjectionMatrix();
  });
}

function Spheres() {
  const group = useRef();
  useFrame((state) => {
    group.current.children[0].position.x = THREE.MathUtils.lerp(
      group.current.children[0].position.x,
      -18 - state.mouse.x * 3,
      0.02
    );
    group.current.children[1].position.x = THREE.MathUtils.lerp(
      group.current.children[1].position.x,
      -10 - state.mouse.x * 10,
      0.01
    );
    group.current.children[2].position.x = THREE.MathUtils.lerp(
      group.current.children[2].position.x,
      18 - state.mouse.x * 5,
      0.03
    );
    group.current.children[3].position.x = THREE.MathUtils.lerp(
      group.current.children[3].position.x,
      10 - state.mouse.x * 6,
      0.04
    );
  });
  return (
    <group ref={group}>
      <Sphere position={[-40, 1, 10]} />
      <Sphere position={[-20, 2, -20]} scale={2} />
      <Sphere position={[40, 3, -4]} scale={3} />
      <Sphere position={[30, 0.75, 10]} scale={0.75} />
    </group>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 55 })
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
          size={0.6}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function App() {
  return (
    <>
      <Fragment>
        <Canvas
          dpr={[1, 1.5]}
          shadows
          camera={{ position: [0, 0, 100], fov: 22 }}
        >
          <fog attach="fog" args={["rgb(255, 252, 252)", 100, 150]} />
          <color attach="background" args={["#E74646"]} />
          <spotLight
            penumbra={1}
            angle={1}
            castShadow
            position={[10, 60, -5]}
            intensity={8}
            shadow-mapSize={[512, 512]}
          />
          <Suspense fallback={null}>
            <group position={[2.5, -12, 0]}>
              <Spheres />

              <F6 scale={[10, 10, 10]} rotation={[0, -1, 0]} />

              <mesh
                rotation-x={-Math.PI / 2}
                position={[0, 0.01, 0]}
                scale={[200, 200, 200]}
                receiveShadow
                renderOrder={100000}
              >
                <planeGeometry />
                <shadowMaterial transparent color="#251005" opacity={0.4} />
              </mesh>
            </group>

            <group position={[-24, -12, 10]}>
              <F7 scale={[10, 10, 10]} rotation={[0, 1, 0]} />

              <mesh
                rotation-x={-Math.PI / 2}
                position={[0, 0.01, 0]}
                scale={[200, 200, 200]}
                receiveShadow
                renderOrder={100000}
              >
                <planeGeometry />
                <shadowMaterial transparent color="#251005" opacity={0.4} />
              </mesh>
            </group>

            <group position={[24, -12, -0]}>
              <F5 scale={[10, 10, 10]} rotation={[0, 0, 0]} />

              <mesh
                rotation-x={-Math.PI / 2}
                position={[0, 0.01, 0]}
                scale={[200, 200, 200]}
                receiveShadow
                renderOrder={100000}
              >
                <planeGeometry />
                <shadowMaterial transparent color="#251005" opacity={0.4} />
              </mesh>
            </group>
            <hemisphereLight intensity={0.2} />
            <ambientLight intensity={0.5} />
            <Environment preset="warehouse" />
            <Zoom />
            <Text
              position={[0, -5, -50]}
              letterSpacing={-0.05}
              font={Poppins}
              fontSize={19}
              color="#FFE5CA"
              material-toneMapped={false}
              material-fog={false}
              anchorX="center"
              anchorY="middle"
            >
              {`Avatar Verse`}
            </Text>
            <Stars />
          </Suspense>
        </Canvas>
        <Loader />
      </Fragment>



    
        <Link to="/Login">
          <a
            style={{
              position: "absolute",
              bottom: 40,
              left: 90,
              fontSize: "15px",
              color: "#FFE5CA",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Continue
          </a>
        </Link>

    </>
  );
}
