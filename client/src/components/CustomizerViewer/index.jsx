import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei/core";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import CustomizerOptions from "../CustomizerOptions";

function CustomizerViewer() {
  const cameraState = useState({
    zoom: 1.7,
    rotateY: 0,
    rotateX: 0,
    intensity: 0.8,
  });
  const cameraRef = useRef(null);
  return (
    <div className="w-[500px] h-[500px] absolute left-28">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={cameraState[0].intensity} />
        <Environment preset="city" />
        <CameraRig cameraState={cameraState} ref={cameraRef}>
          <Center>
            <mesh position={[-1.6, 0, 0]}>
              <Shirt />
            </mesh>
          </Center>
        </CameraRig>
      </Canvas>
      <CustomizerOptions cameraState={cameraState} camerRef={cameraRef} />
    </div>
  );
}

export default CustomizerViewer;
