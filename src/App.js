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
    <Canvas camera={{ position: [-30, 40, 80], fov: 55, near: 1, far: 20000 }} >
    
    
    <Setup receiveShadow scale ={2.21} position={[-1.3,-1.3,39.1]} rotation={[-0.22,12.45, 0.06]} />
   <ambientLight />

   <OrbitControls />
      </Canvas> 
      </Suspense>
     
    </div>
  );
}

export default App;
