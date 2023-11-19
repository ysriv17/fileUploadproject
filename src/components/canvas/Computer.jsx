/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react'

import { useGLTF } from '@react-three/drei'


function Computers({isMobile}) {
    const computer = useGLTF('./desktop_pc/scene.gltf')
    useGLTF.preload('./desktop_pc/scene.glft')
    return (
        <mesh>
            {console.log(isMobile)}
            <hemisphereLight intensity={1} groundColor="black" />
            <pointLight intensity={1} />
            <ambientLight />
            <spotLight target={computer.scene}/>
            <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.63}
                position={ [0, -3.25, -1.5]}
                rotation={[-0.01, -0.25, -0.1]} />
        </mesh>
    )
}

export default Computers;
