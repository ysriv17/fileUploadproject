import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Computers from './Computer'
import  Loader  from '../Loader'
function computerCanvas({isMobile}) {
  return (
    <>
      <Canvas frameLoop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }} c >
        <Suspense fallback={<Loader/>} >
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate={true} />
          
            <Computers isMobile={isMobile} />
          
          
        </Suspense >
        <Preload all />
      </Canvas>
    </>

  )
}

export default computerCanvas