import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Preload } from '@react-three/drei'
import { Color } from 'three'
export default function Island({ ...props }) {
  const { scene, materials } = useGLTF('/Computer.glb')
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) =>
    (material.roughness = 0,
      material.metalness = 0,
      material.envMapIntensity,
      material.emissiveIntensity = 1,
      material.flatShading = false,
      material.emmisive = 2),)
    console.log(materials)
    Object.assign("materials.Material.004",
      {
        envMapIntensity: 1,
        emissiveIntensity: 1,
        metalness: 1,
      })
  }, [materials])
  return <primitive object={scene} castShadow={true}  {...props} />
}