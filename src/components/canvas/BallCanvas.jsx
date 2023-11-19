/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from "../Loader"

import { Decal, Float, useTexture } from '@react-three/drei'
function Ball(props) {
 const [decal] = useTexture([props.icon.icon])
 
  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight />
        <directionalLight position={[0, 0, 0, 25]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5}
            flatShading />
          <Decal map={decal}  position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading />
         
        </mesh>
      </Float>
    </>
  )
}
const BallCanvas = (icon) => {

  return (
    <>
      <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }} c >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball icon={icon} />
        </Suspense >
        <Preload all />
      </Canvas>
    </>

  )
}

export default BallCanvas