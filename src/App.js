import React,{useEffect, useState} from 'react'
import { Canvas,  } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {  OrbitControls, Text, Environment, Merged, SpotLight, ContactShadows, MeshReflectorMaterial, useProgress, Loader, Center  } from '@react-three/drei'
import {Setup} from './Setup'
import { Suspense } from 'react';



function App() {

 



  const  Loader=()=> {
    const { active, progress, errors, item, loaded, total } = useProgress()
         
    return  <Center maxWidth={10}>
            <Text  maxWidth={50} center>Loading 3D Model.  It can take some time {progress.toFixed(2)} %  </Text>

          </Center>
  }





  
  return (
    <div style={{ width: "100vw", height: "100vh", background:'black' }}>   
    
    <Canvas camera={{ position: [0, 25, 70], fov: 55, near: 1, far: 20000 }} dpr={[1,2]} > 


    <Suspense fallback={<Loader />}>
       <Setup receiveShadow castShadow scale ={2.21} position={[-1.3,-1.3,39.1]}  rotation={[0,0,0]} />    
          
      </Suspense>
    
    
      <ambientLight intensity={0.25} />
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight>

   
      <OrbitControls />
      <Environment preset="night"   />
      </Canvas> 
      
     
    </div>
  );
}

export default App;
