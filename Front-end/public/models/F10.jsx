/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 F10.gltf
*/

import React, { useRef , useEffect} from 'react'
import { useGLTF, useAnimations  } from '@react-three/drei'

export function F10(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/F10.gltf')
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[4]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Worker_Body">
            <skinnedMesh castShadow name="Cube009" geometry={nodes.Cube009.geometry} material={materials.Skin} skeleton={nodes.Cube009.skeleton} />
            <skinnedMesh castShadow name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.Worker_Vest} skeleton={nodes.Cube009_1.skeleton} />
            <skinnedMesh castShadow name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={materials.White} skeleton={nodes.Cube009_2.skeleton} />
            <skinnedMesh castShadow name="Cube009_3" geometry={nodes.Cube009_3.geometry} material={materials.Worker_Yellow} skeleton={nodes.Cube009_3.skeleton} />
          </group>
          <group name="Worker_Feet">
            <skinnedMesh castShadow name="Cube055" geometry={nodes.Cube055.geometry} material={materials.Skin} skeleton={nodes.Cube055.skeleton} />
            <skinnedMesh castShadow name="Cube055_1" geometry={nodes.Cube055_1.geometry} material={materials.Black} skeleton={nodes.Cube055_1.skeleton} />
          </group>
          <group name="Worker_Head">
            <skinnedMesh castShadow name="Cube035" geometry={nodes.Cube035.geometry} material={materials.Skin} skeleton={nodes.Cube035.skeleton} />
            <skinnedMesh castShadow name="Cube035_1" geometry={nodes.Cube035_1.geometry} material={materials.DarkBrown} skeleton={nodes.Cube035_1.skeleton} />
            <skinnedMesh castShadow name="Cube035_2" geometry={nodes.Cube035_2.geometry} material={materials.Brown} skeleton={nodes.Cube035_2.skeleton} />
            <skinnedMesh castShadow name="Cube035_3" geometry={nodes.Cube035_3.geometry} material={materials.Worker_Yellow} skeleton={nodes.Cube035_3.skeleton} />
          </group>
          <group name="Worker_Legs">
            <skinnedMesh castShadow name="Cube056" geometry={nodes.Cube056.geometry} material={materials.Brown_02} skeleton={nodes.Cube056.skeleton} />
            <skinnedMesh castShadow name="Cube056_1" geometry={nodes.Cube056_1.geometry} material={materials.Brown2} skeleton={nodes.Cube056_1.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/F10.gltf')
