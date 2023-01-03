import logo from './logo.svg';
import './App.css';
import { Canvas, extend } from '@react-three/fiber'
import { Effects, Environment,Lightformer, OrbitControls } from '@react-three/drei'
import Setup from './Setup'
function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>   
    <Canvas enableShadow shadowMap camera={{ position: [-30, 40, 80], fov: 55, near: 1, far: 20000 }}>
    <Environment resolution={512}>       
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
       
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        
        <Lightformer form="ring" color="blue" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
    <Setup receiveShadow scale ={2.21} position={[-1.3,-1.3,39.1]} rotation={[-0.22,12.45, 0.06]}/>
   <ambientLight />
   <OrbitControls />
      </Canvas> 
     
    </div>
  );
}

export default App;
