import logo from './logo.svg';
import './App.css';
import { Canvas, extend } from '@react-three/fiber'
import Setup from './Setup'
function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>   
    <Canvas enableShadow shadowMap camera={{ position: [10, 30, 100], fov: 55, near: 1, far: 20000 }}>
    <Setup receiveShadow scale ={2.21} position={[-1.3,-2.3,5.1]} rotation={[-0.22,-1.45, 6.06]}/>
   <ambientLight />
      </Canvas> 
     
    </div>
  );
}

export default App;
