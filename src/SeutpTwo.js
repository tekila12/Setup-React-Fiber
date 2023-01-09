

import * as THREE from 'three'
import { useEffect, useLayoutEffect, useRef } from 'react'
import {useFrame } from '@react-three/fiber'
import { Clock } from 'three'

import { useGLTF, useAnimations} from '@react-three/drei'
import { AnimationActionLoopStyles, Color } from 'three'

export default function Setup({ ...props }) {
  const { scene, materials, animations } = useGLTF('/wholeSetup1.glb')
  const group = useRef()
  const {actions, mixer}= useAnimations(animations, group)
  const clock = new Clock()
  
  const color = new Color()
  color.setHex(0xff0000)


  useFrame(() => {
    mixer.update(clock.getDelta())
  }) 
  const onClickFunction = () => {
    // Check if the animation exists and is not already playing
   console.log(color)
      materials["Material.025"].color = color
    
   
    if (actions.Spin3 && actions.Spin3.isRunning()) {
      // Play the animation
      actions.Spin3.play();
      actions.Spin4.play(); 
      actions.Spin5.play(); 
      actions.Spin6.play();
      actions.Spin7.play();
      console.log(actions.Spin3.isRunning())
    }
  }
  
  // Assign the onClickFunction as the onClick event handler for Material.088
  materials["Material.074_10"].userData.onPointerDown = onClickFunction;
 
  


  return <primitive object={scene} ref={group}   {...props} />
}
