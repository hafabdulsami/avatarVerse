/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 F7.gltf
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function F7(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/F7.gltf')
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[16]].reset().fadeIn(0.5).play();
  }, []);

  useEffect(() => {
    const animationAction = actions[names[16]];
    animationAction.play();
    animationAction.paused = false;
    animationAction.time = 60 / animationAction.getClip().frameRate;
    animationAction.paused = true;
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Soldier_Body">
            <skinnedMesh castShadow name="Cube057" geometry={nodes.Cube057.geometry} material={materials.Black} skeleton={nodes.Cube057.skeleton} />
            <skinnedMesh castShadow name="Cube057_1" geometry={nodes.Cube057_1.geometry} material={materials.Swat} skeleton={nodes.Cube057_1.skeleton} />
            <skinnedMesh castShadow name="Cube057_2" geometry={nodes.Cube057_2.geometry} material={materials.Skin} skeleton={nodes.Cube057_2.skeleton} />
          </group>
          <group name="Soldier_Feet">
            <skinnedMesh castShadow name="Cube000" geometry={nodes.Cube000.geometry} material={materials.Grey} skeleton={nodes.Cube000.skeleton} />
            <skinnedMesh castShadow name="Cube000_1" geometry={nodes.Cube000_1.geometry} material={materials.Black} skeleton={nodes.Cube000_1.skeleton} />
          </group>
          <group name="Soldier_Head">
            <skinnedMesh castShadow name="Cube036" geometry={nodes.Cube036.geometry} material={materials.Skin} skeleton={nodes.Cube036.skeleton} />
            <skinnedMesh castShadow name="Cube036_1" geometry={nodes.Cube036_1.geometry} material={materials.Hair_Brown} skeleton={nodes.Cube036_1.skeleton} />
            <skinnedMesh castShadow name="Cube036_2" geometry={nodes.Cube036_2.geometry} material={materials.Brown} skeleton={nodes.Cube036_2.skeleton} />
          </group>
          <group name="Soldier_Legs">
            <skinnedMesh castShadow name="Cube041" geometry={nodes.Cube041.geometry} material={materials.Grey} skeleton={nodes.Cube041.skeleton} />
            <skinnedMesh castShadow name="Cube041_1" geometry={nodes.Cube041_1.geometry} material={materials.Black} skeleton={nodes.Cube041_1.skeleton} />
            <skinnedMesh castShadow name="Cube041_2" geometry={nodes.Cube041_2.geometry} material={materials.Swat} skeleton={nodes.Cube041_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/F7.gltf')
