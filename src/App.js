import logo from './logo.svg';
import './App.css';
import { Canvas, extend } from '@react-three/fiber'
import { Effects, Environment,Lightformer, OrbitControls, useGLTF } from '@react-three/drei'
import {Setup} from './Setup'
import { Suspense } from 'react';
import { DirectionalLight } from 'three';
function App() {

  return (
    <div style={{ width: "100vw", height: "100vh", background:'black' }}>   
    <Suspense fallback={null}>
    <Canvas camera={{ position: [0, 25, 70], fov: 55, near: 1, far: 20000 }} dpr={[1,2]} >    
    <Setup receiveShadow castShadow scale ={2.21} position={[-1.3,-1.3,39.1]} rotation={[0,0,0]} />
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
      </Suspense>
     
    </div>
  );
}

export default App;
