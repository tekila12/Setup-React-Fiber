import React,{useEffect, useState} from 'react'
import { Canvas,  } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {  OrbitControls, Text,  } from '@react-three/drei'
import {Setup} from './Setup'
import { Suspense } from 'react';

function App() {

 
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/veryNewSetup1234.glb', (gltf) => {
      setModel(gltf);
    }, (xhr) => {
      if (xhr.lengthComputable) {
        updateProgressBar(xhr.loaded / xhr.total * 100);
        console.log( Math.round( xhr.loaded / xhr.total * 100, 2 ) + '% downloaded' );
      }
    });
  }, []);

  function updateProgressBar(fraction) {
    setLoadingProgress(fraction);
  }

  const Loading = () => <Text>Loading... {(loadingProgress * 100).toFixed(2)}%</Text>;



  
  return (
    <div style={{ width: "100vw", height: "100vh", background:'black' }}>   
    
    <Canvas camera={{ position: [0, 25, 70], fov: 55, near: 1, far: 20000 }} dpr={[1,2]} > 
  
    <Suspense fallback={<Loading />}>
       {model && <Setup receiveShadow castShadow model={model} scale ={2.21} position={[-1.3,-1.3,39.1]}  rotation={[0,0,0]} />}       
      </Suspense>
    
 
 
   <ambientLight color={'white'}/>
   <directionalLight color={'white'}/>
   <OrbitControls />
   <pointLight position={[2, -1, 0]} intensity={0.5} />
   <pointLight position={[1, -1, 1]} intensity={0.5} />

   <spotLight position={[0, 1, 0]} color={'blue'}/>
  <hemisphereLight skyColor={0xffffbb}
      groundColor={0x888466}
      intensity={1.5}/>
      </Canvas> 
      
     
    </div>
  );
}

export default App;
