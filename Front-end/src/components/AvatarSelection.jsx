/* eslint-disable react/no-unknown-property */

import { Female1 } from "../../public/models/Female1.jsx";
import { Man1 } from "../../public/models/Man1.jsx";
import { F2 } from "../../public/models/F2.jsx";
import { F3 } from "../../public/models/F3.jsx";
import { F4 } from "../../public/models/F4.jsx";
import { F5 } from "../../public/models/F5.jsx";
import { F6 } from "../../public/models/F6.jsx";
import { F7 } from "../../public/models/F7.jsx";
import { F8 } from "../../public/models/F8.jsx";
import { F9 } from "../../public/models/F9.jsx";
import { F10 } from "../../public/models/F10.jsx";
import { Suspense } from "react";
import React from "react"
import PropTypes from "prop-types";

const AvatarSelection = ({currentModel , setCurrentModel }) => {
  const manGroupRef = React.useRef();

  //const [currentModel, setCurrentModel] = useState("Man1");
  const models = {
    Man1,
    Female1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
  };

  const handleArrowClick = () => {
    const modelNames = Object.keys(models);
    const currentIndex = modelNames.indexOf(currentModel);
    const nextIndex = (currentIndex + 1) % modelNames.length;
    const nextModel = modelNames[nextIndex];
    setCurrentModel(nextModel);
  };

  const handleBackClick = () => {
    const modelNames = Object.keys(models);
    const currentIndex = modelNames.indexOf(currentModel);
    const previousIndex =
      (currentIndex - 1 + modelNames.length) % modelNames.length;
    const previousModel = modelNames[previousIndex];
    setCurrentModel(previousModel);
  };

  return (
    <>
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />
      <ambientLight />

      <spotLight position={[0, -1, 0]} />

      <group position={[-0.1, -1, 0]}>
        <Suspense fallback={null}>
          <group ref={manGroupRef}>
            {React.createElement(models[currentModel])}
          </group>
        </Suspense>
      </group>

      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
     
      <mesh
        position={[1.3, 0.15, 0]}
        onClick={handleArrowClick}
        sx={{ cursor: "pointer" }}
      >
        <boxBufferGeometry />
        <meshStandardMaterial color="#ce0c0c" visible={false} />
      </mesh>
      <mesh position={[-1.3, 0.15, 0]} onClick={handleBackClick}>
        <boxBufferGeometry />
        <meshStandardMaterial color="#871515" visible={false} />
      </mesh>
    </>
  );
};

export default AvatarSelection;

AvatarSelection.propTypes = {
  setCurrentModel : PropTypes.func.isRequired,
  currentModel : PropTypes.node.isRequired,
};
