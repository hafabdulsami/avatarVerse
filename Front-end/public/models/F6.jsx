/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 F6.gltf
*/

import React, { useRef ,useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function F6(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/F6.gltf')
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[6]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="SciFi_Body">
            <skinnedMesh castShadow name="Cube045" geometry={nodes.Cube045.geometry} material={materials.Skin} skeleton={nodes.Cube045.skeleton} />
            <skinnedMesh castShadow name="Cube045_1" geometry={nodes.Cube045_1.geometry} material={materials.Black} skeleton={nodes.Cube045_1.skeleton} />
            <skinnedMesh castShadow name="Cube045_2" geometry={nodes.Cube045_2.geometry} material={materials.Metal} skeleton={nodes.Cube045_2.skeleton} />
            <skinnedMesh castShadow name="Cube045_3" geometry={nodes.Cube045_3.geometry} material={materials.LightBlue} skeleton={nodes.Cube045_3.skeleton} />
            <skinnedMesh castShadow name="Cube045_4" geometry={nodes.Cube045_4.geometry} material={materials.Blue} skeleton={nodes.Cube045_4.skeleton} />
          </group>
          <group name="SciFi_Feet">
            <skinnedMesh castShadow name="Cube046" geometry={nodes.Cube046.geometry} material={materials.Black} skeleton={nodes.Cube046.skeleton} />
            <skinnedMesh castShadow name="Cube046_1" geometry={nodes.Cube046_1.geometry} material={materials.Metal} skeleton={nodes.Cube046_1.skeleton} />
          </group>
          <group name="SciFi_Head">
            <skinnedMesh castShadow name="Cube028" geometry={nodes.Cube028.geometry} material={materials.Skin} skeleton={nodes.Cube028.skeleton} />
            <skinnedMesh castShadow name="Cube028_1" geometry={nodes.Cube028_1.geometry} material={materials.Black} skeleton={nodes.Cube028_1.skeleton} />
            <skinnedMesh castShadow name="Cube028_2" geometry={nodes.Cube028_2.geometry} material={materials.Brown} skeleton={nodes.Cube028_2.skeleton} />
            <skinnedMesh castShadow name="Cube028_3" geometry={nodes.Cube028_3.geometry} material={materials.Hair_Black} skeleton={nodes.Cube028_3.skeleton} />
            <skinnedMesh castShadow name="Cube028_4" geometry={nodes.Cube028_4.geometry} material={materials.Blue} skeleton={nodes.Cube028_4.skeleton} />
          </group>
          <group name="SciFi_Legs">
            <skinnedMesh castShadow name="Cube010" geometry={nodes.Cube010.geometry} material={materials.Black} skeleton={nodes.Cube010.skeleton} />
            <skinnedMesh castShadow name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials.Metal} skeleton={nodes.Cube010_1.skeleton} />
            <skinnedMesh castShadow name="Cube010_2" geometry={nodes.Cube010_2.geometry} material={materials.LightBlue} skeleton={nodes.Cube010_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/F6.gltf')
