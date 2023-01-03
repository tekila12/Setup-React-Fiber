import * as THREE from 'three'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Preload, useAnimations } from '@react-three/drei'
import { Color } from 'three'
export default function Island({ ...props }) {
  const { scene, materials, animations } = useGLTF('/SetupWhole.glb')
const group=useRef()
const {actions} = useAnimations(animations, group)

useEffect(()=>{
  actions.Spin2.play()
  actions.Spin1.play()
  actions.Spin.play()
  actions.Spin3.play()
  actions.Spin4.play()
  actions.Spin5.play()
  actions.Spin6.play()
  actions.Spin7.play()


})
console.log(actions)
console.log(materials)
  useLayoutEffect(() => {
    Object.values(materials).forEach((material) =>
    (material.roughness = 0,
      material.metalness = 0,
      material.envMapIntensity,
      material.emissiveIntensity = 1,
      material.flatShading = false,
      material.emmisive = 2),)
   
    Object.assign("materials.Material.004",
      {
        envMapIntensity: 1,
        emissiveIntensity: 1,
        metalness: 1,
      })
  }, [materials])
  return <primitive object={scene}  ref={group}  {...props} />
}