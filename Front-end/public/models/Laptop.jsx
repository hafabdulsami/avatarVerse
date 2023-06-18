/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 laptop.glb
*/

import React, { useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("models/laptop.glb");
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      0.1 + Math.cos(t / 1.5) / 30,
      Math.sin(t / 20) / 20,
      0.3 - (1 + Math.sin(t / 4)) / 8
    );
    ref.current.position.y = (0 + Math.sin(t / 2)) / 30;
  });
  return (
    <group {...props} dispose={null}>
      <group ref={ref}>
        <group position={[-0.19, 0, -0.22]} rotation={[0, -Math.PI / 1.5, 0]}>
          <group position={[0, 0.01, 0]}>
            <mesh
              geometry={nodes.Cube001.geometry}
              material={materials.LaptopBody}
            />
            <mesh
              geometry={nodes.Cube001_1.geometry}
              material={materials.Laptop_TouchPad}
            />
            <mesh
              geometry={nodes.Cube001_2.geometry}
              material={materials.LaptopLight}
            />
            <mesh
              geometry={nodes.Cube001_3.geometry}
              material={materials.LaptopButtons}
            />
          </group>
          <group position={[-0.26, 0.02, 0]} rotation={[0, 0, 1.73]}>
            <mesh
              geometry={nodes.Cube003.geometry}
              material={materials.LaptopBody}
            />
            <mesh
              geometry={nodes.Cube003_1.geometry}
              material={materials.LaptopScreen}
            />
          </group>
          <mesh
            geometry={nodes.LaptopConnecter.geometry}
            material={materials.LaptopBody}
            position={[-0.26, 0.02, -0.17]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0, 0.01, 0]}
          />
          <mesh
            geometry={nodes.LaptopConnecter001.geometry}
            material={materials.LaptopBody}
            position={[-0.26, 0.02, 0.15]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0, 0.01, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/laptop.glb");