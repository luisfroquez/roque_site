import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    model: THREE.Mesh
  }
  materials: {
    ['Silver Glossy']: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/Zacata.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={9.41}
        near={0}
        fov={34.52}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
      <mesh
        geometry={nodes.model.geometry}
        material={materials['Silver Glossy']}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 0.2]}
      />
    </group>
  )
}

useGLTF.preload('/Zacata.gltf')
