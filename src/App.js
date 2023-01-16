import React,{useEffect, useState} from 'react'
import { Canvas,  } from '@react-three/fiber'
import {  OrbitControls, Text,  } from '@react-three/drei'
import {Setup} from './Setup'
import { Suspense } from 'react';

function App() {

 
  

  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [stopCounter, setStopCounter] = useState(false);
  
  useEffect(() => {
    if (!stopCounter && counter < 100) {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 10);
    } else {
      setStopCounter(true);
    }
  }, [counter, stopCounter]);

  useEffect(() => {
    setLoading(false);
  }, [])

  const Loading = () => <Text>Loading... {counter}</Text>;

  if (loading) {
    return (
      <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
        <Canvas camera={{ position: [0, 25, 70], fov: 55, near: 1, far: 20000 }} dpr={[1, 2]}>
          <Loading />
        </Canvas>
      </div>
    );
  }
   



  
  return (
    <div style={{ width: "100vw", height: "100vh", background:'black' }}>   
    
    <Canvas camera={{ position: [0, 25, 70], fov: 55, near: 1, far: 20000 }} dpr={[1,2]} > 
    <Suspense fallback={<Loading/>}>
  
    <Setup receiveShadow castShadow scale ={2.21} position={[-1.3,-1.3,39.1]} rotation={[0,0,0]} />
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
