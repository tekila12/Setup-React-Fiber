

import React, { useRef, useEffect, useState, useMemo,   } from 'react'
import { useGLTF, useAnimations, Center,Text3D, PositionalAudio } from '@react-three/drei'
import {  useFrame, useThree } from "@react-three/fiber";
import * as THREE from 'three'

export function Setup(props) {
  const group = useRef()
  const meshRef = useRef();
  const sound = useRef();
  const images = [  ['/images/newAjnur1.jpg'],  ['/images/windows-loader.jpg'],  ['/images/newAjnur1.jpg'],   ]
  const { nodes, materials, animations } = useGLTF('/veryNewSetup1234.glb')
  const { actions } = useAnimations(animations, group)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [scale, setScale] = useState(1)
  const [focus, setFocus] = useState(true);
  const [textContent, setTextContent] = useState("Click on the Power to turn the ON the Computer")
  const blackMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });


  const [material, setMaterial] = useState(blackMaterial);

useEffect(() => {
  setMaterial(blackMaterial);
}, []);
  const vec = new THREE.Vector3();
 
  materials['Material.074_36'].color.set(`white`)
  materials['Material.074_36'].needsUpdate = true

  const zoomIn = ()=> {
    if (meshRef.current) {
      setZoom(true);
      setFocus(meshRef.current.position);
      setIsZooming(true);
    }

  }

  
  
  
 

useFrame((state) => {
    if (meshRef.current && isZooming && focus) {
        const step = 0.015;
        vec.set(meshRef.current.position.x, meshRef.current.position.y, meshRef.current.position.z + 0.1);
        state.camera.position.lerp(vec, step);
        state.camera.lookAt(meshRef.current.position);
        state.camera.updateProjectionMatrix();
    }
});





  useEffect(() => {
    if (isZooming) {
      const timeoutId = setTimeout(() => {
        setIsZooming(false);
        window.location.href = 'https://windows-recreation.netlify.app';
      }, 700);
      return () => clearTimeout(timeoutId);
    }
  }, [isZooming]);

  let intervalId;
  
 






  const handleClick =()=> {

    setTimeout(()=>{
      sound.current.setLoop(false);
      sound.current.play();
    },3000)

    clearTimeout(intervalId);
    intervalId = setTimeout(() => {
      intervalId = setInterval(() => {
        clearInterval(intervalId);
        setMaterial(new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(images[currentImageIndex]) }));
        setCurrentImageIndex((currentImageIndex, length) => (currentImageIndex + 2) % length, images.length);
        if (currentImageIndex === 0 ) {
          setTextContent("Now click on the monitor to zoom in");
        }
      }, 3000);
    }, 3000);
   console.log(currentImageIndex)
    const material001 = materials["Material.001"]
    const color001 = new THREE.Color(0xff0000)
    material001.color = color001
    material001.needsUpdate = true;
    handlekeyboard()
    Animations()
}


const Animations= ()=>{
    actions.Spin3.play()
    actions.Spin2.play()
    actions.Spin1.play()
    actions.Spin4.play()
    actions.Spin5.play()
    actions.Spin6.play()
    actions.Spin7.play()
    actions.Spin.play()
}




const transitionColor = (material) => {
  const endColor = new THREE.Color(Math.random() * 0xffffff);
  let rStep = (endColor.r - material.color.r) / 60;
  let gStep = (endColor.g - material.color.g) / 60;
  let bStep = (endColor.b - material.color.b) / 60;
  let transitionInterval = setInterval(() => {
      material.color.r += rStep;
      material.color.g += gStep;
      material.color.b += bStep;
      material.needsUpdate = true;
      if (Math.abs(material.color.r - endColor.r) < 0.01 &&
          Math.abs(material.color.g - endColor.g) < 0.01 &&
          Math.abs(material.color.b - endColor.b) < 0.01 ) {
          clearInterval(transitionInterval);
      }
  }, 1000 / 50);
}



const handlekeyboard  = () => {
  intervalId = setInterval(() => {
    const material026 = materials["Material.019"] 
    const color026 = new THREE.Color(0x00ff00)
    material026.color = color026
    material026.needsUpdate = true;
    transitionColor(materials['Material.074_36']);
    transitionColor(materials['Material.074_7']);
    transitionColor(materials['Material.074_6']);
    transitionColor(materials['Material.074_37']);
    transitionColor(materials['Material.074_39']);
    transitionColor(materials['Material.074_38']);
    transitionColor(materials['Tasten_2']);
    transitionColor(materials['Material.074_33']);
    transitionColor(materials['Material.074_32']);
    transitionColor(materials['Material.074_34']);
    transitionColor(materials['Material.074_35']);
    transitionColor(materials['Material.074_25']);
    transitionColor(materials['Material.021']);
  }, 3000);
}


  return (
    <group ref={group}  {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[5.75, 5.41, 0.03]} rotation={[-2.79, -1.57, 0]} scale={0.72}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder001_0" />
              <group name="Plane001_2" position={[0, 0, -0.01]} scale={0.99} />
            </group>
          </group>
        </group>
        <PositionalAudio ref={sound}  url="/vista.ogv" distance={3} />
        <group name="Sketchfab_model002" position={[0, 4.23, 0]} rotation={[-Math.PI / 2, 0, -1.56]}>
          <group name="dd12f1d0399348aab05d4e554860e7c0fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode001">
              <group name="aorus_logotranspa" position={[-182.43, 181.7, -315.85]} scale={[8.65, 8.65, 9.09]}>
                <mesh name="aorus_logotranspa_aorus_logotranspa_0" geometry={nodes.aorus_logotranspa_aorus_logotranspa_0.geometry} material={materials['Material.074_24']} />
              </group>
              <group name="BezierCircle" position={[87.65, 308.19, -282.27]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={5.7} />
              <group name="BezierCurve" position={[73.03, 238.2, -437.39]} rotation={[Math.PI, 0, Math.PI / 2]} scale={100}>
                <mesh name="BezierCurve_Material088_0" geometry={nodes.BezierCurve_Material088_0.geometry} material={materials['Material.088']} />
              </group>
              <group name="BezierCurve001" position={[-57.66, 118.32, -315.6]} rotation={[Math.PI / 2, -1.23, 0]} scale={100}>
                <mesh name="BezierCurve001_Material085_0" geometry={nodes.BezierCurve001_Material085_0.geometry} material={materials['Material.085']} />
              </group>
              <group name="BezierCurve002" position={[-31.44, 183.79, -440.16]} rotation={[Math.PI / 2, -1.23, 0]} scale={100}>
                <mesh name="BezierCurve002_Material087_0" geometry={nodes.BezierCurve002_Material087_0.geometry} material={materials['Material.087']} />
              </group>
              <group name="BezierCurve003" position={[-158.9, 127.66, 299.39]} rotation={[2.46, -Math.PI / 2, 0]} scale={100}>
                <mesh name="BezierCurve003_Material091_0" geometry={nodes.BezierCurve003_Material091_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="BezierCurve004" position={[-33.39, 29.83, -26.83]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="BezierCurve004_Material099_0" geometry={nodes.BezierCurve004_Material099_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="BezierCurve005" position={[83.41, 25.97, 360.7]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                <mesh name="BezierCurve005_Material103_0" geometry={nodes.BezierCurve005_Material103_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="BezierCurve006" position={[-275.73, 25.97, 569.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                <mesh name="BezierCurve006_Material106_0" geometry={nodes.BezierCurve006_Material106_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="BezierCurve007" position={[-271.34, 25.97, 569.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                <mesh name="BezierCurve007_Material105_0" geometry={nodes.BezierCurve007_Material105_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="BezierCurve008" position={[-280.43, 25.97, 28.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={100}>
                <mesh name="BezierCurve008_Material107_0" geometry={nodes.BezierCurve008_Material107_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="bg2" position={[-153.71, 194.92, 83.03]} rotation={[1.57, -1.44, 1.57]} scale={113.03}>
                <mesh name="bg2_bg2_0" geometry={nodes.bg2_bg2_0.geometry} material={materials['Material.074_29']} />
              </group>
              <group name="Color-PewDiePie-Logo" position={[129.54, 46.55, -27.48]} rotation={[-Math.PI / 2, 0.28, Math.PI / 2]} scale={12.41}>
                <mesh name="Color-PewDiePie-Logo_Color-PewDiePie-Logo_0" geometry={nodes['Color-PewDiePie-Logo_Color-PewDiePie-Logo_0'].geometry} material={materials['Material.074_27']} />
              </group>
              <group name="Cube001" position={[-138.59, 295.65, 300.41]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[325.34, 4.05, 184.09]}>
                <mesh name="Cube001_Material055_0" geometry={nodes.Cube001_Material055_0.geometry} material={materials['Material.055']} />
              </group>
              <group name="Cube002" position={[-146.71, 263.68, 300.41]} rotation={[Math.PI / 2, 0.12, -Math.PI / 2]} scale={[-325.34, -14.75, -152.85]}>
                <mesh name="Cube002_Material044_0" geometry={nodes.Cube002_Material044_0.geometry} material={materials['Material.044']} />
              </group>
              <group name="Cube003" position={[-157.13, 447.65, 300.41]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[325.34, 4.05, 31.03]}>
                <mesh name="Cube003_Material001_0" geometry={nodes.Cube003_Material001_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube004" position={[-148.74, 180.97, 299.25]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[167.6, 17.79, 193.5]}>
                <mesh name="Cube004_Material002_0" geometry={nodes.Cube004_Material002_0.geometry} material={materials['Material.002']} />
              </group>
              <group name="Cube005" position={[-186.53, 291.56, 297.43]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[16.32, 28.81, 12.94]}>
                <mesh name="Cube005_Material003_0" geometry={nodes.Cube005_Material003_0.geometry} material={materials['Material.003']} />
              </group>
              <group name="Cube006" position={[-202.96, -64.82, 300.41]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[40.59, 16.64, 531.61]}>
                <mesh name="Cube006_Material043_0" geometry={nodes.Cube006_Material043_0.geometry} material={materials['Material.043']} />
              </group>
              <group name="Cube007" position={[-213.02, 35.33, 296.06]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[-193.85, -54.12, -9.32]}>
                <mesh name="Cube007_Material037_0" geometry={nodes.Cube007_Material037_0.geometry} material={materials['Material.037']} />
              </group>
              <group name="Cube008" position={[-80.2, 31.65, 453.15]} rotation={[-Math.PI / 2, 0, 1.25]} scale={[49.07, 108.78, 5.65]}>
                <mesh name="Cube008_Material036_0" geometry={nodes.Cube008_Material036_0.geometry} material={materials['Material.039']} />
              </group>
              <group name="Cube009" position={[-80.2, 31.65, 163.79]} rotation={[-Math.PI / 2, 0, 1.86]} scale={[49.07, 108.78, 5.65]}>
                <mesh name="Cube009_Material039_0" geometry={nodes.Cube009_Material039_0.geometry} material={materials['Material.039']} />
              </group>
              <group name="Cube010" position={[-181.15, 31.64, 295.8]} rotation={[-Math.PI / 2, 0, 3.14]} scale={[43.41, 96.24, 5]}>
                <mesh name="Cube010_Material006_0" geometry={nodes.Cube010_Material006_0.geometry} material={materials['Material.006']} />
              </group>
              <group name="Cube011" position={[-85.94, 199.7, -353.72]} rotation={[-Math.PI / 2, 0, 0]} scale={[173.49, 89.97, 157.35]}>
                <mesh name="Cube011_Material010_0" geometry={nodes.Cube011_Material010_0.geometry} material={materials['Material.074']} />
              </group>
              <group name="Cube012" position={[-85.94, 199.7, -353.72]} rotation={[-Math.PI / 2, 0, 0]} scale={[173.49, 89.97, 157.35]}>
                <mesh name="Cube012_Material011_0" geometry={nodes.Cube012_Material011_0.geometry} material={materials['Material.074']} />
              </group>
              <group name="Cube013" position={[82.77, 33.23, -353.61]} rotation={[Math.PI / 2, 0.24, -Math.PI]} scale={[-5.99, -88.36, -12.14]}>
                <mesh name="Cube013_Material015_0" geometry={nodes.Cube013_Material015_0.geometry} material={materials['Material.074']} />
              </group>
              <group name="Cube014" position={[-253.45, 33.23, -353.61]} rotation={[Math.PI / 2, -0.14, Math.PI]} scale={[-5.98, -88.36, -12.15]}>
                <mesh name="Cube014_Material014_0" geometry={nodes.Cube014_Material014_0.geometry} material={materials['Material.074']} />
              </group>
              <group name="Cube015" position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]}>
                <mesh name="Cube015_Material016_0" geometry={nodes.Cube015_Material016_0.geometry} material={materials['Material.074_1']} />
              </group>
              <group name="Cube016" position={[79.29, 177.86, -355.56]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[50.67, 50.67, 10]}>
                <mesh name="Cube016_Material017_0" geometry={nodes.Cube016_Material017_0.geometry} material={materials['Material.017']} />
              </group>
              <group name="Cube017" position={[-251.38, 292.35, -334.9]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[50.67, 50.67, 10]}>
                <mesh name="Cube017_Material017_0" geometry={nodes.Cube017_Material017_0.geometry} material={materials['Material.017']} position={[0.09, 0.07, 0.02]} />
              </group>
              <group name="Cube018" position={[79.29, 288.43, -355.56]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[50.67, 50.67, 10]}>
                <mesh name="Cube018_Material017_0" geometry={nodes.Cube018_Material017_0.geometry} material={materials['Material.017']} />
              </group>
              <group name="Cube019" position={[-171.54, 344.36, -355.43]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[51.51, 51.51, 10.17]}>
                <mesh name="Cube019_Material017_0" geometry={nodes.Cube019_Material017_0.geometry} material={materials['Material.017']} />
              </group>
              <group name="Cube020" position={[-96.11, 78.83, -363.4]} rotation={[-Math.PI / 2, 0, 0]} scale={[160.68, 73.93, 34.31]}>
                <mesh name="Cube020_Material020_0" geometry={nodes.Cube020_Material020_0.geometry} material={materials['Material.074_2']} />
              </group>
              <group name="Cube021" position={[-108.06, 346.35, -354.98]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.19, 57.54, 10.79]}>
                <mesh name="Cube021_Material018_0" geometry={nodes.Cube021_Material018_0.geometry} material={materials['Material.074']} />
              </group>
              <group name="Cube022" position={[-44.55, 344.36, -355.43]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[51.51, 51.51, 10.17]}>
                <mesh name="Cube022_Material017_0" geometry={nodes.Cube022_Material017_0.geometry} material={materials['Material.017']} position={[0.42, 0.49, -14.75]} />
              </group>
              <group name="Cube023" position={[93.78, 228.59, -355.28]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-11.99, -59.26, -117.81]}>
                <mesh name="Cube023_Material021_0" geometry={nodes.Cube023_Material021_0.geometry} material={materials['Material.074']} />
              </group>
              <group name="Cube024" position={[-265.1, 291.7, -335.09]} rotation={[-Math.PI / 2, 0, 0]} scale={[6.38, 55.46, 55.46]}>
                <mesh name="Cube024_Material022_0" geometry={nodes.Cube024_Material022_0.geometry} material={materials['Material.074']} />
              </group>
              <group name="Cube025" position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]}>
                <mesh name="Cube025_Material023_0" geometry={nodes.Cube025_Material023_0.geometry} material={materials['Material.023']} />
              </group>
              <group name="Cube026" position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]}>
                <mesh name="Cube026_Material024_0" geometry={nodes.Cube026_Material024_0.geometry} material={materials['Material.024']} />
              </group>
              <group name="Cube027" position={[-96.41, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]}>
                <mesh name="Cube027_Material008_0" geometry={nodes.Cube027_Material008_0.geometry} material={materials['Material.074_6']} />
              </group>
              <group name="Cube028" position={[-95.71, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube028_Material026_0" geometry={nodes.Cube028_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube029" position={[-96.39, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]}>
                <mesh name="Cube029_Material025_0" geometry={nodes.Cube029_Material025_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube030" position={[-97, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube030_Material026_0" geometry={nodes.Cube030_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube031" position={[-103.69, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]}>
                <mesh name="Cube031_Material008_0" geometry={nodes.Cube031_Material008_0.geometry} material={materials['Material.074_6']} />
              </group>
              <group name="Cube032" position={[-102.99, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube032_Material026_0" geometry={nodes.Cube032_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube033" position={[-103.67, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]}>
                <mesh name="Cube033_Material025_0" geometry={nodes.Cube033_Material025_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube034" position={[-104.28, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube034_Material026_0" geometry={nodes.Cube034_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube035" position={[-110.55, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]}>
                <mesh name="Cube035_Material008_0" geometry={nodes.Cube035_Material008_0.geometry} material={materials['Material.074_6']} />
              </group>
              <group name="Cube036" position={[-109.85, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube036_Material026_0" geometry={nodes.Cube036_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube037" position={[-110.53, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]}>
                <mesh name="Cube037_Material025_0" geometry={nodes.Cube037_Material025_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube038" position={[-111.14, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube038_Material026_0" geometry={nodes.Cube038_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube039" position={[-117.5, 270.96, -430.93]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.51, -10.92, -44.29]}>
                <mesh name="Cube039_Material008_0" geometry={nodes.Cube039_Material008_0.geometry} material={materials['Material.074_6']} />
              </group>
              <group name="Cube040" position={[-116.81, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube040_Material026_0" geometry={nodes.Cube040_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube041" position={[-117.48, 270.96, -432.41]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.25, -9.34, -46.66]}>
                <mesh name="Cube041_Material025_0" geometry={nodes.Cube041_Material025_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube042" position={[-118.09, 270.96, -451.7]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1.05, -9.73, -44.41]}>
                <mesh name="Cube042_Material026_0" geometry={nodes.Cube042_Material026_0.geometry} material={materials['Material.074_7']} />
              </group>
              <group name="Cube043" position={[-219.49, 85.34, -71.15]} rotation={[-Math.PI / 2, 0, 0]} scale={[49.18, 29.28, 59.66]}>
                <mesh name="Cube043_Material012_0" geometry={nodes.Cube043_Material012_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube044" position={[-219.49, 85.34, 671.43]} rotation={[-Math.PI / 2, 0, 0]} scale={[49.18, 29.28, 59.66]}>
                <mesh name="Cube044_Material012_0" geometry={nodes.Cube044_Material012_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube045" position={[-212.14, 79.4, -298.23]} rotation={[-Math.PI / 2, 0, 0]} scale={[35.48, 5.17, 20.57]}>
                <mesh name="Cube045_Material027_0" geometry={nodes.Cube045_Material027_0.geometry} material={materials['Material.074_8']} />
              </group>
              <group name="Cube046" position={[-188.16, 268.52, -368.19]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.28, 42.45, 42.45]} />
              <group name="Cube047" position={[-134.66, 268.52, -368.19]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.28, 42.45, 42.45]} />
              <group name="Cube048" position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]}>
                <mesh name="Cube048_Material035_0" geometry={nodes.Cube048_Material035_0.geometry} material={materials['Material.074_15']} />
              </group>
              <group name="Cube049" position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]}>
                <mesh name="Cube049_Material040_0" geometry={nodes.Cube049_Material040_0.geometry} material={materials['Material.074_16']} />
              </group>
              <group name="Cube050" position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]}>
                <mesh name="Cube050_Material038_0" geometry={nodes.Cube050_Material038_0.geometry} material={materials['Material.074_16']} />
              </group>
              <group name="Cube051" position={[-161.35, 268.24, -368.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[17.44, 39.41, 40.07]}>
                <mesh name="Cube051_Material042_0" geometry={nodes.Cube051_Material042_0.geometry} material={materials['Material.042']} />
              </group>
              <group name="Cube052" position={[83.51, 83.28, -355.6]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.75, 46.28, 28.87]}>
                <mesh name="Cube052_Material047_0" geometry={nodes.Cube052_Material047_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube053" position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]}>
                <mesh name="Cube053_Material048_0" geometry={nodes.Cube053_Material048_0.geometry} material={materials['Material.048']} />
              </group>
              <group name="Cube054" position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]}>
                <mesh name="Cube054_Material049_0" geometry={nodes.Cube054_Material049_0.geometry} material={materials['Material.049']} />
              </group>
              <group name="Cube055" position={[-122.29, 185.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.16, 54.53, 13.17]}>
                <mesh name="Cube055_Material054_0" geometry={nodes.Cube055_Material054_0.geometry} material={materials['Material.054']} />
              </group>
              <group name="Cube056" position={[-127.22, 200.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.06, 52.44, 12.67]}>
                <mesh name="Cube056_Material061_0" geometry={nodes.Cube056_Material061_0.geometry} material={materials['Material.061']} />
              </group>
              <group name="Cube057" position={[-127.22, 200.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.06, 52.44, 12.67]}>
                <mesh name="Cube057_Material059_0" geometry={nodes.Cube057_Material059_0.geometry} material={materials['Material.074_22']} />
              </group>
              <group name="Cube058" position={[-122.59, 213.71, -370.43]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.26, 54.5, 0.81]}>
                <mesh name="Cube058_Material063_0" geometry={nodes.Cube058_Material063_0.geometry} material={materials['Material.074_23']} />
              </group>
              <group name="Cube059" position={[-127.22, 200.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[128.06, 52.44, 12.67]}>
                <mesh name="Cube059_Material058_0" geometry={nodes.Cube059_Material058_0.geometry} material={materials['Material.058']} />
              </group>
              <group name="Cube060" position={[-123.74, 264.28, -316.8]} scale={[133.26, 53.22, 0.82]}>
                <mesh name="Cube060_Material062_0" geometry={nodes.Cube060_Material062_0.geometry} material={materials['Material.062']} />
              </group>
              <group name="Cube061" position={[-122.29, 185.08, -370.56]} rotation={[-Math.PI / 2, 0, 0]} scale={[133.16, 54.53, 13.17]}>
                <mesh name="Cube061_Material064_0" geometry={nodes.Cube061_Material064_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube062" position={[-165.45, 224.12, -440.84]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-89.37, -0.7, -106.43]}>
                <mesh name="Cube062_Material065_0" geometry={nodes.Cube062_Material065_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube063" position={[111.41, 32.5, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube063_Material074_0" geometry={nodes.Cube063_Material074_0.geometry} material={materials['Material.074_25']} />
              </group>
              <group name="Cube064" position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube064_Material074_0" geometry={nodes.Cube064_Material074_0.geometry} material={materials['Material.074_25']} />
              </group>
              <group name="Cube065" position={[111.41, 32.5, -27.41]} rotation={[-Math.PI / 2, 0.01, Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube065_Material074_0" geometry={nodes.Cube065_Material074_0.geometry} material={materials['Material.074_25']} />
              </group>
              <group name="Cube066" position={[111.46, 32.29, -27.29]} rotation={[-Math.PI / 2, 0.01, Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube066_Material076_0" geometry={nodes.Cube066_Material076_0.geometry} material={materials['Material.076']} />
              </group>
              <group name="Cube067" position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube067_Material075_0" geometry={nodes.Cube067_Material075_0.geometry} material={materials['Material.075']} />
              </group>
              <group name="Cube068" position={[129.12, 44.5, -27.61]} rotation={[-Math.PI / 2, 0.28, 0]} scale={[5.96, 5.96, 2.08]}>
                <mesh name="Cube068_Material092_0" geometry={nodes.Cube068_Material092_0.geometry} material={materials['Material.092']} />
              </group>
              <group name="Cube069" position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -44.82, -22.9]}>
                <mesh name="Cube069_Material093_0" geometry={nodes.Cube069_Material093_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube070" position={[-266.85, 260.34, -432.75]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.67, 2.32, 5.24]}>
                <mesh name="Cube070_Material100_0" geometry={nodes.Cube070_Material100_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube071" position={[-266.85, 260.34, -426.84]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.67, 2.32, 5.24]}>
                <mesh name="Cube071_Material101_0" geometry={nodes.Cube071_Material101_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube072" position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube072_Material078_0" geometry={nodes.Cube072_Material078_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube073" position={[111.41, 32.45, -27.41]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube073_Material079_0" geometry={nodes.Cube073_Material079_0.geometry} material={materials['Material.074_6']} />
              </group>
              <group name="Cube074" position={[-92.94, 206.72, -314.86]} rotation={[-Math.PI / 2, 0, 0]} scale={[5.64, 5.4, 4.23]}>
                <mesh name="Cube074_Material084_0" geometry={nodes.Cube074_Material084_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube075" position={[-258.01, 195.51, -371.51]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.16, 52.44, 17.74]}>
                <mesh name="Cube075_Material086_0" geometry={nodes.Cube075_Material086_0.geometry} material={materials['Material.074_26']} />
              </group>
              <group name="Cube076" position={[65.93, 34.46, -27.35]} rotation={[-Math.PI / 2, 0.23, -Math.PI]} scale={[-42.89, -42.89, -22.9]}>
                <mesh name="Cube076_Material080_0" geometry={nodes.Cube076_Material080_0.geometry} material={materials['Material.074_25']} />
              </group>
              <group name="Cube077" position={[-81.68, 266.51, -437.41]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.85, 4.87, 17.38]}>
                <mesh name="Cube077_Material083_0" geometry={nodes.Cube077_Material083_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube078" position={[70.35, 334.37, -437.41]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.85, 4.87, 12.05]}>
                <mesh name="Cube078_Material083_0" geometry={nodes.Cube078_Material083_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube079" position={[-269.84, 182.61, -338.41]} rotation={[-Math.PI / 2, 0, 0]} scale={[16.04, 9.16, 4.33]}>
                <mesh name="Cube079_Material089_0" geometry={nodes.Cube079_Material089_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube080" position={[-158.49, 199.97, 375.16]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[16.04, 9.16, 4.33]}>
                <mesh name="Cube080_Material089_0" geometry={nodes.Cube080_Material089_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube081" position={[93.22, 47.66, -27.75]} rotation={[-1.54, -0.23, 0]} scale={[2.62, 1.33, 2.24]}>
                <mesh name="Cube081_Material090_0" geometry={nodes.Cube081_Material090_0.geometry} material={materials['Material.090']} />
              </group>
              <group name="Cube082" position={[-266.85, 274.04, -426.64]} rotation={[-Math.PI / 2, 0, 0]} scale={[7.67, 2.32, 5.24]}>
                <mesh name="Cube082_Material101_0" geometry={nodes.Cube082_Material101_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube088" position={[98.96, 38.35, -8.16]} rotation={[-Math.PI / 2, -0.13, 0]} scale={[5.45, 4.95, 1.91]}>
                <mesh name="Cube088_Material098_0" geometry={nodes.Cube088_Material098_0.geometry} material={materials['Material.098']} />
              </group>
              <group name="Cylinder" position={[74.21, 51.22, -262.89]} scale={[6.08, 6.27, 2.28]}>
                <mesh name="Cylinder_Material009_0" geometry={nodes.Cylinder_Material009_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cylinder001" position={[-169.23, 114.41, -71.64]} rotation={[-1.57, 1.55, 0]} scale={[19.4, 19.4, 2.51]}>
                <mesh name="Cylinder001_Material028_0" geometry={nodes.Cylinder001_Material028_0.geometry} material={materials['Material.074_11']} />
              </group>
              <group name="Cylinder002" position={[-166.37, 70.65, -71.64]} rotation={[-1.57, 1.54, 0]} scale={[10.3, 10.3, 1.33]}>
                <mesh name="Cylinder002_Material029_0" geometry={nodes.Cylinder002_Material029_0.geometry} material={materials['Material.074_11']} />
              </group>
              <group name="Cylinder003" position={[-169.23, 114.41, 670.94]} rotation={[-1.57, 1.55, 0]} scale={[19.4, 19.4, 2.51]}>
                <mesh name="Cylinder003_Material031_0" geometry={nodes.Cylinder003_Material031_0.geometry} material={materials['Material.074_11']} />
              </group>
              <group name="Cylinder004" position={[-166.37, 70.65, 670.94]} rotation={[-1.57, 1.54, 0]} scale={[10.3, 10.3, 1.33]}>
                <mesh name="Cylinder004_Material030_0" geometry={nodes.Cylinder004_Material030_0.geometry} material={materials['Material.074_11']} />
              </group>
              <group name="Cylinder005" position={[-161.14, 268.66, -369.02]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[32.71, 32.71, 34.21]} />
              <group name="Cylinder006" position={[-209.45, 184.62, -370.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.35, 38.22, 10.57]}>
                <mesh name="Cylinder006_Material050_0" geometry={nodes.Cylinder006_Material050_0.geometry} material={materials['Material.074_19']} />
              </group>
              <group name="Cylinder007" position={[-124.44, 184.62, -370.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.35, 38.22, 10.57]}>
                <mesh name="Cylinder007_Material051_0" geometry={nodes.Cylinder007_Material051_0.geometry} material={materials['Material.074_20']} />
              </group>
              <group name="Cylinder008" position={[-37.78, 184.62, -370.1]} rotation={[-Math.PI / 2, 0, 0]} scale={[36.35, 38.22, 10.57]}>
                <mesh name="Cylinder008_Material052_0" geometry={nodes.Cylinder008_Material052_0.geometry} material={materials['Material.074_19']} />
              </group>
              <group name="Cylinder009" position={[77.22, 34.52, -28.48]} scale={[11.57, 11.57, 2.5]}>
                <mesh name="Cylinder009_Material081_0" geometry={nodes.Cylinder009_Material081_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cylinder010" position={[77.22, 34.52, -27.86]} scale={[11.89, 11.89, 0.39]}>
                <mesh name="Cylinder010_Material077_0" geometry={nodes.Cylinder010_Material077_0.geometry} material={materials['Material.077']} />
              </group>
              <group name="Cylinder011" position={[-173.93, 242.5, -421.74]} rotation={[0.47, 0, Math.PI]} scale={[2.05, 2.05, 16.97]}>
                <mesh name="Cylinder011_Material045_0" geometry={nodes.Cylinder011_Material045_0.geometry} material={materials['Material.045']} />
              </group>
              <group name="Cylinder012" position={[77.22, 34.52, -28.71]} scale={[10.44, 10.44, 2.87]}>
                <mesh name="Cylinder012_Material082_0" geometry={nodes.Cylinder012_Material082_0.geometry} material={materials['Material.082']} />
              </group>
              <group name="Cylinder013" position={[83.03, 308.23, -282.19]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[9.86, 9.86, 4.88]}>
                <mesh name="PowerUp" onClick={handleClick} geometry={nodes.PowerUp.geometry} material={materials.PowerUp} />
              </group>
              <group name="Cylinder014" position={[84.52, 280.42, -282.19]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[6.54, 6.54, 3.24]}>
                <mesh name="Cylinder014_Material095_0" geometry={nodes.Cylinder014_Material095_0.geometry} material={materials['Material.088']} />
              </group>
              <group name="Cylinder015" position={[84.52, 254.31, -282.19]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[6.67, 6.67, 3.3]}>
                <mesh name="Cylinder015_Material096_0" geometry={nodes.Cylinder015_Material096_0.geometry} material={materials['Material.088']} />
              </group>
              <group name="Cylinder016" position={[-263.63, 248.74, -421.76]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[3.07, 3.07, 5.45]}>
                <mesh name="Cylinder016_Material102_0" geometry={nodes.Cylinder016_Material102_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="gallerymodel" position={[-142.04, 164.81, 596.08]} rotation={[0.44, -1.28, 0.44]} scale={80.69}>
                <mesh name="gallerymodel_gallerymodel_0" geometry={nodes.gallerymodel_gallerymodel_0.geometry} material={materials['Material.074_28']} />
              </group>
              <group name="geforcertx" position={[-229.27, 204.83, -315.96]} scale={[10.38, 10.38, 10.91]}>
                <mesh name="geforcertx_Material056_0" geometry={nodes.geforcertx_Material056_0.geometry} material={materials['Material.019']} />
              </group>
              <group name="gigabyte-logo" position={[-161.54, 449.45, 82.08]} rotation={[1.57, -1.5, 1.57]} scale={23.69}>
                <mesh name="gigabyte-logo_gigabyte-logo_0" geometry={nodes['gigabyte-logo_gigabyte-logo_0'].geometry} material={materials['Material.074_31']} />
              </group>
              <group name="gigabyte-logo001" position={[-122.06, 122.82, 301.6]} rotation={[-Math.PI / 2, 1.5, Math.PI / 2]} scale={17.84}>
                <mesh name="gigabyte-logo001_gigabyte-logo_0" geometry={nodes['gigabyte-logo001_gigabyte-logo_0'].geometry} material={materials['Material.074_31']} />
              </group>
              <group name="IOSHIELD" position={[-259.69, 284.8, -422.49]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[26.48, 30.86, 31.83]}>
                <mesh name="IOSHIELD_IOSHIELD_0" geometry={nodes.IOSHIELD_IOSHIELD_0.geometry} material={materials['Material.074_3']} />
              </group>
              <group name="maxresdefault_(1)" position={[87.71, 83.62, -355.31]} rotation={[0, 1.57, 0]} scale={39.41}>
                <mesh name="maxresdefault_(1)_maxresdefault_(1)_0" geometry={nodes['maxresdefault_(1)_maxresdefault_(1)_0'].geometry} material={materials['Material.074_10']} />
              </group>
              <group name="metal-mesh-500x500" position={[-42.31, 356.98, -354.16]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[100, 133.7, 100]}>
                <mesh name="metal-mesh-500x500_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
              </group>
              <group name="metal-mesh-500x500001" position={[-174.21, 356.98, -354.16]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[100, 133.7, 100]}>
                <mesh name="metal-mesh-500x500001_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500001_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
              </group>
              <group name="metal-mesh-500x500002" position={[-270.9, 291.51, -335.33]} rotation={[0, -Math.PI / 2, 0]} scale={[79.56, 106.37, 79.56]}>
                <mesh name="metal-mesh-500x500002_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500002_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} position={[0, -1.05, 0]} />
              </group>
              <group name="metal-mesh-500x500003" position={[-257.98, 182.04, -359.05]} rotation={[0, -Math.PI / 2, 0]} scale={[109.08, 106.37, 79.56]}>
                <mesh name="metal-mesh-500x500003_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500003_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
              </group>
              <group name="metal-mesh-500x500004" position={[-257.98, 220.72, -359.05]} rotation={[0, -Math.PI / 2, 0]} scale={[109.08, 106.37, 79.56]}>
                <mesh name="metal-mesh-500x500004_metal-mesh-500x500_0" geometry={nodes['metal-mesh-500x500004_metal-mesh-500x500_0'].geometry} material={materials['Material.074_5']} />
              </group>
              <group name="MOBOAORUSORANGETRANS" position={[-235.59, 287.75, -423.92]} rotation={[0, 0, 0.65]} scale={6.34}>
                <mesh name="MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0" geometry={nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0.geometry} material={materials['Material.074_4']} />
              </group>
              <group name="MY_SCREEN" position={[-136.18, 300.13, 300.41]} rotation={[-Math.PI / 2, 1.5, Math.PI / 2]} scale={[331.62, 348.07, 331.62]} />
              <group name="NVIDIA_LOGO" position={[0.59, 70.43, -289.07]} scale={45.19}>
                <mesh name="NVIDIA_LOGO_NVIDIA_LOGO_0" geometry={nodes.NVIDIA_LOGO_NVIDIA_LOGO_0.geometry} material={materials['Material.074_12']} />
              </group>
              <group name="Object_10" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_10_Tastatur_Unterseite_0" geometry={nodes.Object_10_Tastatur_Unterseite_0.geometry} material={materials.Tastatur_Unterseite} />
              </group>
              <group name="Object_101" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_101_Material067_0" geometry={nodes.Object_101_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_103" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_103_Material070_0" geometry={nodes.Object_103_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_105" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_105_Tasten_2_0" geometry={nodes.Object_105_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_107" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_107_Material070_0" geometry={nodes.Object_107_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_109" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_109_Material069_0" geometry={nodes.Object_109_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_111" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_111_Material067_0" geometry={nodes.Object_111_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_113" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_113_Material068_0" geometry={nodes.Object_113_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_115" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_115_Material057_0" geometry={nodes.Object_115_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_117" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_117_Material068_0" geometry={nodes.Object_117_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_119" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_119_Material057_0" geometry={nodes.Object_119_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_12" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_12_Tastatur_Unterseite_0" geometry={nodes.Object_12_Tastatur_Unterseite_0.geometry} material={materials.Tastatur_Unterseite} />
              </group>
              <group name="Object_121" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_121_Material066_0" geometry={nodes.Object_121_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_123" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_123_Material057_0" geometry={nodes.Object_123_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_125" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_125_Material066_0" geometry={nodes.Object_125_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_127" position={[147.71, 32.6, 400.77]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[154.13, 91.41, 91.41]}>
                <mesh name="Object_127_Material057_0" geometry={nodes.Object_127_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_129" position={[147.71, 32.6, 385.79]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_129_Material066_0" geometry={nodes.Object_129_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_131" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_131_Material060_0" geometry={nodes.Object_131_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_133" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_133_Material060_0" geometry={nodes.Object_133_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_135" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_135_Material060_0" geometry={nodes.Object_135_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_137" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_137_Material005_0" geometry={nodes.Object_137_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_139" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_139_Material005_0" geometry={nodes.Object_139_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_14" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_14_Material004_0" geometry={nodes.Object_14_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_141" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_141_Material069_0" geometry={nodes.Object_141_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_143" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_143_Material068_0" geometry={nodes.Object_143_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_145" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_145_Material066_0" geometry={nodes.Object_145_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_147" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_147_Material066_0" geometry={nodes.Object_147_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_149" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_149_Material005_0" geometry={nodes.Object_149_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_151" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_151_Material068_0" geometry={nodes.Object_151_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_153" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_153_Material066_0" geometry={nodes.Object_153_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_155" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_155_Material068_0" geometry={nodes.Object_155_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_157" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_157_Material066_0" geometry={nodes.Object_157_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_159" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_159_Material066_0" geometry={nodes.Object_159_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_16" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_16_Material004_0" geometry={nodes.Object_16_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_161" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_161_Material066_0" geometry={nodes.Object_161_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_163" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_163_Material066_0" geometry={nodes.Object_163_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_165" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_165_Material066_0" geometry={nodes.Object_165_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_167" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_167_Material060_0" geometry={nodes.Object_167_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_169" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_169_Material060_0" geometry={nodes.Object_169_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_171" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_171_Material005_0" geometry={nodes.Object_171_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_173" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_173_Material057_0" geometry={nodes.Object_173_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_175" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_175_Material069_0" geometry={nodes.Object_175_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_177" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_177_Material068_0" geometry={nodes.Object_177_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_179" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_179_Material060_0" geometry={nodes.Object_179_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_18" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_18_Material004_0" geometry={nodes.Object_18_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_181" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_181_Material057_0" geometry={nodes.Object_181_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_183" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_183_Material070_0" geometry={nodes.Object_183_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_185" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_185_Material057_0" geometry={nodes.Object_185_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_187" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_187_Material057_0" geometry={nodes.Object_187_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_189" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_189_Material069_0" geometry={nodes.Object_189_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_191" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_191_Material057_0" geometry={nodes.Object_191_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_193" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_193_Material057_0" geometry={nodes.Object_193_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_195" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_195_Material057_0" geometry={nodes.Object_195_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_197" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_197_Material057_0" geometry={nodes.Object_197_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_199" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_199_Material057_0" geometry={nodes.Object_199_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_20" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_20_Material004_0" geometry={nodes.Object_20_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_201" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_201_Material057_0" geometry={nodes.Object_201_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_203" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_203_Material060_0" geometry={nodes.Object_203_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_205" position={[147.71, 32.58, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_205_Material066_0" geometry={nodes.Object_205_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_207" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_207_Material057_0" geometry={nodes.Object_207_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_209" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_209_Material070_0" geometry={nodes.Object_209_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_211" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_211_Material067_0" geometry={nodes.Object_211_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_213" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_213_Tasten_2_0" geometry={nodes.Object_213_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_215" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_215_Material057_0" geometry={nodes.Object_215_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_217" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_217_Material060_0" geometry={nodes.Object_217_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_219" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_219_Material060_0" geometry={nodes.Object_219_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_22" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_22_Material004_0" geometry={nodes.Object_22_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_221" position={[147.71, 32.6, 400.77]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[154.13, 91.41, 91.41]}>
                <mesh name="Object_221_Material057_0" geometry={nodes.Object_221_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_223" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_223_Material005_0" geometry={nodes.Object_223_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_225" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_225_Material005_0" geometry={nodes.Object_225_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_227" position={[147.71, 32.43, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_227_Material069_0" geometry={nodes.Object_227_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_229" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_229_Material057_0" geometry={nodes.Object_229_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_231" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_231_Material068_0" geometry={nodes.Object_231_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_233" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_233_Material057_0" geometry={nodes.Object_233_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_235" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_235_Material057_0" geometry={nodes.Object_235_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_237" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_237_Material066_0" geometry={nodes.Object_237_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_239" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_239_Material066_0" geometry={nodes.Object_239_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_24" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_24_Tastatur_Seite_0" geometry={nodes.Object_24_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
              </group>
              <group name="Object_241" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_241_Material070_0" geometry={nodes.Object_241_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_243" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_243_Material066_0" geometry={nodes.Object_243_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_245" position={[147.71, 32.6, 289.94]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[142.89, 91.41, 91.41]}>
                <mesh name="Object_245_Material070_0" geometry={nodes.Object_245_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_247" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_247_Material066_0" geometry={nodes.Object_247_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_249" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_249_Material060_0" geometry={nodes.Object_249_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_251" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_251_Material070_0" geometry={nodes.Object_251_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_253" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_253_Material057_0" geometry={nodes.Object_253_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_255" position={[129.14, 32.6, 395.13]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[79.31, 91.41, 91.41]}>
                <mesh name="Object_255_Material057_0" geometry={nodes.Object_255_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_257" position={[129.14, 32.6, 395.13]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[79.31, 91.41, 91.41]}>
                <mesh name="Object_257_Material057_0" geometry={nodes.Object_257_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_259" position={[147.71, 32.6, 385.75]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_259_Material060_0" geometry={nodes.Object_259_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_26" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_26_Material004_0" geometry={nodes.Object_26_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_261" position={[147.71, 32.6, 385.72]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_261_Material060_0" geometry={nodes.Object_261_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_263" position={[147.71, 32.6, 385.53]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_263_Material060_0" geometry={nodes.Object_263_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_265" position={[125.99, 34.79, 402.73]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_265_Material060_0" geometry={nodes.Object_265_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_267" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_267_Tasten_2_0" geometry={nodes.Object_267_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_269" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_269_Material070_0" geometry={nodes.Object_269_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_271" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_271_Material070_0" geometry={nodes.Object_271_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_273" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_273_Material067_0" geometry={nodes.Object_273_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_275" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_275_Material005_0" geometry={nodes.Object_275_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_277" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_277_Tasten_2_0" geometry={nodes.Object_277_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_279" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_279_Tasten_2_0" geometry={nodes.Object_279_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_28" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_28_Material004_0" geometry={nodes.Object_28_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_281" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_281_Material069_0" geometry={nodes.Object_281_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_283" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_283_Material068_0" geometry={nodes.Object_283_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_285" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_285_Material068_0" geometry={nodes.Object_285_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_287" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_287_Tasten_2_0" geometry={nodes.Object_287_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_289" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_289_Material068_0" geometry={nodes.Object_289_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_291" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_291_Material066_0" geometry={nodes.Object_291_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_293" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_293_Material066_0" geometry={nodes.Object_293_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_295" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_295_Tasten_2_0" geometry={nodes.Object_295_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_297" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_297_Material067_0" geometry={nodes.Object_297_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_299" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_299_Material066_0" geometry={nodes.Object_299_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_30" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_30_Material007_0" geometry={nodes.Object_30_Material007_0.geometry} material={materials['Material.007']} />
              </group>
              <group name="Object_301" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_301_Material060_0" geometry={nodes.Object_301_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_303" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_303_Tasten_2_0" geometry={nodes.Object_303_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_305" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_305_Material060_0" geometry={nodes.Object_305_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_307" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_307_Tasten_2_0" geometry={nodes.Object_307_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_309" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_309_Material057_0" geometry={nodes.Object_309_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_311" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_311_Tasten_2_0" geometry={nodes.Object_311_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_313" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_313_Tasten_2_0" geometry={nodes.Object_313_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_315" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_315_Material005_0" geometry={nodes.Object_315_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_317" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_317_Tasten_2_0" geometry={nodes.Object_317_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_319" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_319_Tasten_2_0" geometry={nodes.Object_319_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_32" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_32_Material004_0" geometry={nodes.Object_32_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_321" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_321_Material068_0" geometry={nodes.Object_321_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_323" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_323_Material057_0" geometry={nodes.Object_323_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_325" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_325_Material066_0" geometry={nodes.Object_325_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_327" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_327_Material057_0" geometry={nodes.Object_327_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_329" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_329_Material066_0" geometry={nodes.Object_329_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_331" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_331_Material060_0" geometry={nodes.Object_331_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_333" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_333_Material060_0" geometry={nodes.Object_333_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_335" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_335_Material005_0" geometry={nodes.Object_335_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_337" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_337_Material068_0" geometry={nodes.Object_337_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_339" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_339_Material066_0" geometry={nodes.Object_339_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_34" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_34_Material004_0" geometry={nodes.Object_34_Material004_0.geometry} material={materials['Material.004']} />
              </group>
              <group name="Object_341" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_341_Material068_0" geometry={nodes.Object_341_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_343" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_343_Material066_0" geometry={nodes.Object_343_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_345" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_345_Material066_0" geometry={nodes.Object_345_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_347" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_347_Material066_0" geometry={nodes.Object_347_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_349" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_349_Material066_0" geometry={nodes.Object_349_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_351" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_351_Material060_0" geometry={nodes.Object_351_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_353" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_353_Material060_0" geometry={nodes.Object_353_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_355" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_355_Material057_0" geometry={nodes.Object_355_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_357" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_357_Material069_0" geometry={nodes.Object_357_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_359" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_359_Material066_0" geometry={nodes.Object_359_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_36" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_36_Tastatur_Seite_0" geometry={nodes.Object_36_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
              </group>
              <group name="Object_361" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_361_Material057_0" geometry={nodes.Object_361_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_363" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_363_Material057_0" geometry={nodes.Object_363_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_365" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_365_Material057_0" geometry={nodes.Object_365_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_367" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_367_Material069_0" geometry={nodes.Object_367_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_369" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_369_Material060_0" geometry={nodes.Object_369_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_371" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_371_Material070_0" geometry={nodes.Object_371_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_373" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_373_Material070_0" geometry={nodes.Object_373_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_375" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_375_Material067_0" geometry={nodes.Object_375_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_377" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_377_Tasten_2_0" geometry={nodes.Object_377_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_379" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_379_Material066_0" geometry={nodes.Object_379_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_38" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_38_Tastatur_Seite_0" geometry={nodes.Object_38_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
              </group>
              <group name="Object_381" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_381_Material005_0" geometry={nodes.Object_381_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_383" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_383_Material005_0" geometry={nodes.Object_383_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_385" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_385_Material069_0" geometry={nodes.Object_385_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_387" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_387_Material005_0" geometry={nodes.Object_387_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_389" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_389_Material068_0" geometry={nodes.Object_389_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_391" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_391_Material057_0" geometry={nodes.Object_391_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_393" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_393_Material068_0" geometry={nodes.Object_393_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_395" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_395_Material057_0" geometry={nodes.Object_395_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_397" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_397_Material066_0" geometry={nodes.Object_397_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_399" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_399_Material066_0" geometry={nodes.Object_399_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_40" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_40_Tastatur_Seite_0" geometry={nodes.Object_40_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
              </group>
              <group name="Object_401" position={[147.71, 32.6, 289.94]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[142.89, 91.41, 91.41]}>
                <mesh name="Object_401_Material070_0" geometry={nodes.Object_401_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_403" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_403_Material066_0" geometry={nodes.Object_403_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_405" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_405_Material060_0" geometry={nodes.Object_405_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_407" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_407_Material070_0" geometry={nodes.Object_407_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_409" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_409_Material067_0" geometry={nodes.Object_409_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_411" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_411_Tasten_2_0" geometry={nodes.Object_411_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_413" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_413_Material066_0" geometry={nodes.Object_413_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_415" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_415_Material057_0" geometry={nodes.Object_415_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_418" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_418_Tasten_0" geometry={nodes.Object_418_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_42" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_42_Tastatur_Seite_0" geometry={nodes.Object_42_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
              </group>
              <group name="Object_420" position={[164.92, 31.11, 386.96]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[67.57, 91.41, 91.41]}>
                <mesh name="Object_420_Tasten_0" geometry={nodes.Object_420_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_422" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_422_Tasten_0" geometry={nodes.Object_422_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_424" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_424_Tasten_0" geometry={nodes.Object_424_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_426" position={[130.24, 34.61, 390.58]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[72.77, 91.41, 91.41]}>
                <mesh name="Object_426_Tasten_0" geometry={nodes.Object_426_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_428" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_428_Tasten_0" geometry={nodes.Object_428_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_430" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_430_Tasten_0" geometry={nodes.Object_430_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_432" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_432_Tasten_0" geometry={nodes.Object_432_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_434" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_434_Tasten_0" geometry={nodes.Object_434_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_436" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_436_Tasten_0" geometry={nodes.Object_436_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_438" position={[147.71, 34.61, 402.93]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_438_Tasten_0" geometry={nodes.Object_438_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_44" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_44_Tastatur_Seite_0" geometry={nodes.Object_44_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
              </group>
              <group name="Object_440" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_440_Tasten_0" geometry={nodes.Object_440_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_442" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_442_Tasten_0" geometry={nodes.Object_442_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_444" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_444_Tasten_0" geometry={nodes.Object_444_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_446" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_446_Tasten_0" geometry={nodes.Object_446_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_448" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_448_Tasten_0" geometry={nodes.Object_448_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_450" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_450_Tasten_0" geometry={nodes.Object_450_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_452" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_452_Tasten_0" geometry={nodes.Object_452_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_454" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_454_Tasten_0" geometry={nodes.Object_454_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_456" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_456_Tasten_0" geometry={nodes.Object_456_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_458" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_458_Tasten_0" geometry={nodes.Object_458_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_460" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_460_Tasten_0" geometry={nodes.Object_460_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_462" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_462_Tasten_0" geometry={nodes.Object_462_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_464" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_464_Tasten_0" geometry={nodes.Object_464_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_466" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_466_Tasten_0" geometry={nodes.Object_466_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_468" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_468_Tasten_0" geometry={nodes.Object_468_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_47" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_47_Material005_0" geometry={nodes.Object_47_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_470" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_470_Tasten_0" geometry={nodes.Object_470_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_472" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_472_Tasten_0" geometry={nodes.Object_472_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_474" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_474_Tasten_0" geometry={nodes.Object_474_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_476" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_476_Tasten_0" geometry={nodes.Object_476_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_478" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_478_Tasten_0" geometry={nodes.Object_478_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_480" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_480_Tasten_0" geometry={nodes.Object_480_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_482" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_482_Tasten_0" geometry={nodes.Object_482_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_484" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_484_Tasten_0" geometry={nodes.Object_484_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_486" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_486_Tasten_0" geometry={nodes.Object_486_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_488" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_488_Tasten_0" geometry={nodes.Object_488_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_49" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_49_Tasten_2_0" geometry={nodes.Object_49_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_490" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_490_Tasten_0" geometry={nodes.Object_490_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_492" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_492_Tasten_0" geometry={nodes.Object_492_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_494" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_494_Tasten_0" geometry={nodes.Object_494_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_496" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_496_Tasten_0" geometry={nodes.Object_496_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_498" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_498_Tasten_0" geometry={nodes.Object_498_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_500" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_500_Tasten_0" geometry={nodes.Object_500_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_502" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_502_Tasten_0" geometry={nodes.Object_502_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_504" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_504_Tasten_0" geometry={nodes.Object_504_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_506" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_506_Tasten_0" geometry={nodes.Object_506_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_508" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_508_Tasten_0" geometry={nodes.Object_508_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_51" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_51_Tasten_2_0" geometry={nodes.Object_51_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_510" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_510_Tasten_0" geometry={nodes.Object_510_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_512" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_512_Tasten_0" geometry={nodes.Object_512_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_514" position={[147.71, 34.61, 385.86]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_514_Tasten_0" geometry={nodes.Object_514_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_516" position={[147.71, 34.61, 385.86]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_516_Tasten_0" geometry={nodes.Object_516_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_518" position={[147.71, 34.61, 385.86]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_518_Tasten_0" geometry={nodes.Object_518_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_520" position={[147.71, 34.61, 385.86]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_520_Tasten_0" geometry={nodes.Object_520_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_522" position={[147.71, 34.61, 385.86]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_522_Tasten_0" geometry={nodes.Object_522_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_524" position={[147.71, 34.61, 385.86]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_524_Tasten_0" geometry={nodes.Object_524_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_526" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_526_Tasten_0" geometry={nodes.Object_526_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_528" position={[147.71, 34.61, 385.86]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_528_Tasten_0" geometry={nodes.Object_528_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_53" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_53_Tasten_2_0" geometry={nodes.Object_53_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_530" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_530_Tasten_0" geometry={nodes.Object_530_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_532" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_532_Tasten_0" geometry={nodes.Object_532_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_534" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_534_Tasten_0" geometry={nodes.Object_534_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_536" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_536_Tasten_0" geometry={nodes.Object_536_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_538" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_538_Tasten_0" geometry={nodes.Object_538_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_540" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_540_Tasten_0" geometry={nodes.Object_540_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_542" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_542_Tasten_0" geometry={nodes.Object_542_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_544" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_544_Tasten_0" geometry={nodes.Object_544_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_546" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_546_Tasten_0" geometry={nodes.Object_546_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_548" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_548_Tasten_0" geometry={nodes.Object_548_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_55" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_55_Material057_0" geometry={nodes.Object_55_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_550" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_550_Tasten_0" geometry={nodes.Object_550_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_552" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_552_Tasten_0" geometry={nodes.Object_552_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_554" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_554_Tasten_0" geometry={nodes.Object_554_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_556" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_556_Tasten_0" geometry={nodes.Object_556_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_558" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_558_Tasten_0" geometry={nodes.Object_558_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_560" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_560_Tasten_0" geometry={nodes.Object_560_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_562" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_562_Tasten_0" geometry={nodes.Object_562_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_564" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_564_Tasten_0" geometry={nodes.Object_564_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_566" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_566_Tasten_0" geometry={nodes.Object_566_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_568" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_568_Tasten_0" geometry={nodes.Object_568_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_57" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_57_Tasten_2_0" geometry={nodes.Object_57_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_570" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_570_Tasten_0" geometry={nodes.Object_570_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_572" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_572_Tasten_0" geometry={nodes.Object_572_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_574" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_574_Tasten_0" geometry={nodes.Object_574_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_576" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_576_Tasten_0" geometry={nodes.Object_576_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_578" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_578_Tasten_0" geometry={nodes.Object_578_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_580" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_580_Tasten_0" geometry={nodes.Object_580_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_582" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_582_Tasten_0" geometry={nodes.Object_582_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_584" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_584_Tasten_0" geometry={nodes.Object_584_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_586" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_586_Tasten_0" geometry={nodes.Object_586_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_588" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_588_Tasten_0" geometry={nodes.Object_588_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_59" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_59_Material060_0" geometry={nodes.Object_59_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_590" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_590_Tasten_0" geometry={nodes.Object_590_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_592" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_592_Tasten_0" geometry={nodes.Object_592_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_594" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_594_Tasten_0" geometry={nodes.Object_594_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_596" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_596_Tasten_0" geometry={nodes.Object_596_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_598" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_598_Tasten_0" geometry={nodes.Object_598_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_600" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_600_Tasten_0" geometry={nodes.Object_600_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_602" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_602_Tasten_0" geometry={nodes.Object_602_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_604" position={[147.71, 34.58, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_604_Material071_0" geometry={nodes.Object_604_Material071_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_606" position={[147.71, 34.3, 259.27]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={[157.9, 91.41, 91.41]}>
                <mesh name="Object_606_Tasten_0" geometry={nodes.Object_606_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_608" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_608_Tasten_0" geometry={nodes.Object_608_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_61" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_61_Tasten_2_0" geometry={nodes.Object_61_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_610" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_610_Tasten_0" geometry={nodes.Object_610_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_612" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_612_Tasten_0" geometry={nodes.Object_612_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_614" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_614_Tasten_0" geometry={nodes.Object_614_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_616" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_616_Tasten_0" geometry={nodes.Object_616_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_618" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_618_Tasten_0" geometry={nodes.Object_618_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_620" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_620_Tasten_0" geometry={nodes.Object_620_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_622" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_622_Tasten_0" geometry={nodes.Object_622_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_624" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_624_Tasten_0" geometry={nodes.Object_624_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_626" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_626_Tasten_0" geometry={nodes.Object_626_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_628" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_628_Tasten_0" geometry={nodes.Object_628_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_63" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_63_Material060_0" geometry={nodes.Object_63_Material060_0.geometry} material={materials['Material.074_34']} />
              </group>
              <group name="Object_630" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_630_Tasten_0" geometry={nodes.Object_630_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_632" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_632_Tasten_0" geometry={nodes.Object_632_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_634" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_634_Tasten_0" geometry={nodes.Object_634_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_636" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_636_Tasten_0" geometry={nodes.Object_636_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_638" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_638_Tasten_0" geometry={nodes.Object_638_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_640" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_640_Tasten_0" geometry={nodes.Object_640_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_642" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_642_Tasten_0" geometry={nodes.Object_642_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_644" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_644_Tasten_0" geometry={nodes.Object_644_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_646" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_646_Tasten_0" geometry={nodes.Object_646_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_648" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_648_Tasten_0" geometry={nodes.Object_648_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_65" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_65_Material066_0" geometry={nodes.Object_65_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_650" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_650_Tasten_0" geometry={nodes.Object_650_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_652" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_652_Tasten_0" geometry={nodes.Object_652_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_654" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_654_Tasten_0" geometry={nodes.Object_654_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_656" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_656_Tasten_0" geometry={nodes.Object_656_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_658" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_658_Tasten_0" geometry={nodes.Object_658_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_660" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_660_Tasten_0" geometry={nodes.Object_660_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_662" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_662_Tasten_0" geometry={nodes.Object_662_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_664" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_664_Tasten_0" geometry={nodes.Object_664_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_666" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_666_Tasten_0" geometry={nodes.Object_666_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_668" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_668_Tasten_0" geometry={nodes.Object_668_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_67" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_67_Material067_0" geometry={nodes.Object_67_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_670" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_670_Tasten_0" geometry={nodes.Object_670_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_672" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_672_Tasten_0" geometry={nodes.Object_672_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_674" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_674_Tasten_0" geometry={nodes.Object_674_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_676" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_676_Tasten_0" geometry={nodes.Object_676_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_678" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_678_Tasten_0" geometry={nodes.Object_678_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_680" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_680_Tasten_0" geometry={nodes.Object_680_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_682" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_682_Tasten_0" geometry={nodes.Object_682_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_684" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_684_Tasten_0" geometry={nodes.Object_684_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_686" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_686_Tasten_0" geometry={nodes.Object_686_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_688" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_688_Tasten_0" geometry={nodes.Object_688_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_69" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_69_Material066_0" geometry={nodes.Object_69_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_690" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_690_Tasten_0" geometry={nodes.Object_690_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_692" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_692_Tasten_0" geometry={nodes.Object_692_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_694" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_694_Tasten_0" geometry={nodes.Object_694_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_696" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_696_Tasten_0" geometry={nodes.Object_696_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_698" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_698_Tasten_0" geometry={nodes.Object_698_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_700" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_700_Tasten_0" geometry={nodes.Object_700_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_702" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_702_Tasten_0" geometry={nodes.Object_702_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_704" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_704_Tasten_0" geometry={nodes.Object_704_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_706" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_706_Tasten_0" geometry={nodes.Object_706_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_708" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_708_Tasten_0" geometry={nodes.Object_708_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_71" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_71_Tasten_2_0" geometry={nodes.Object_71_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_710" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_710_Tasten_0" geometry={nodes.Object_710_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_712" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_712_Tasten_0" geometry={nodes.Object_712_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_714" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_714_Tasten_0" geometry={nodes.Object_714_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_716" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_716_Tasten_0" geometry={nodes.Object_716_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_718" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_718_Tasten_0" geometry={nodes.Object_718_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_720" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_720_Tasten_0" geometry={nodes.Object_720_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_722" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_722_Tasten_0" geometry={nodes.Object_722_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_724" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_724_Tasten_0" geometry={nodes.Object_724_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_726" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_726_Tasten_0" geometry={nodes.Object_726_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_728" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_728_Tasten_0" geometry={nodes.Object_728_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_73" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_73_Material057_0" geometry={nodes.Object_73_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_730" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_730_Tasten_0" geometry={nodes.Object_730_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_732" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_732_Tasten_0" geometry={nodes.Object_732_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_734" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_734_Tasten_0" geometry={nodes.Object_734_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_736" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_736_Tasten_0" geometry={nodes.Object_736_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_738" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_738_Tasten_0" geometry={nodes.Object_738_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_740" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_740_Tasten_0" geometry={nodes.Object_740_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_742" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_742_Tasten_0" geometry={nodes.Object_742_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_744" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_744_Tasten_0" geometry={nodes.Object_744_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_746" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_746_Tasten_0" geometry={nodes.Object_746_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_748" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_748_Tasten_0" geometry={nodes.Object_748_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_75" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_75_Material066_0" geometry={nodes.Object_75_Material066_0.geometry} material={materials['Material.074_35']} />
              </group>
              <group name="Object_750" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_750_Tasten_0" geometry={nodes.Object_750_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_752" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_752_Tasten_0" geometry={nodes.Object_752_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_754" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_754_Tasten_0" geometry={nodes.Object_754_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_756" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_756_Tasten_0" geometry={nodes.Object_756_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_758" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_758_Tasten_0" geometry={nodes.Object_758_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_760" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_760_Tasten_0" geometry={nodes.Object_760_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_762" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_762_Tasten_0" geometry={nodes.Object_762_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_764" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_764_Tasten_0" geometry={nodes.Object_764_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_766" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_766_Tasten_0" geometry={nodes.Object_766_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_768" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_768_Tasten_0" geometry={nodes.Object_768_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_77" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_77_Material057_0" geometry={nodes.Object_77_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_770" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_770_Tasten_0" geometry={nodes.Object_770_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_772" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_772_Tasten_0" geometry={nodes.Object_772_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_774" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_774_Tasten_0" geometry={nodes.Object_774_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_776" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_776_Tasten_0" geometry={nodes.Object_776_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_778" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_778_Tasten_0" geometry={nodes.Object_778_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_780" position={[147.71, 34.61, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_780_Tasten_0" geometry={nodes.Object_780_Tasten_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Object_784" position={[174.16, 46.92, 307.71]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={49.82}>
                <mesh name="Object_784_Material057_0" geometry={nodes.Object_784_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_786" position={[191.38, 45.23, 324.98]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={49.82}>
                <mesh name="Object_786_Material057_0" geometry={nodes.Object_786_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_79" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_79_Material057_0" geometry={nodes.Object_79_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_790" position={[191.38, 45.23, 290.1]} rotation={[-Math.PI / 2, 0, 0]} scale={49.82}>
                <mesh name="Object_790_Material057_0" geometry={nodes.Object_790_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_792" position={[190.94, 45.23, 307.68]} rotation={[-Math.PI / 2, 0, -1.54]} scale={52.61}>
                <mesh name="Object_792_Material057_0" geometry={nodes.Object_792_Material057_0.geometry} material={materials['Material.074_33']} />
              </group>
              <group name="Object_794" position={[139.38, 50.46, 591.26]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={29.27}>
                <mesh name="Object_794_Material070_0" geometry={nodes.Object_794_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_796" position={[141.11, 50.46, 586.29]} rotation={[-Math.PI / 2, 0, 0]} scale={29.27}>
                <mesh name="Object_796_Material070_0" geometry={nodes.Object_796_Material070_0.geometry} material={materials['Material.074_39']} />
              </group>
              <group name="Object_8" position={[147.71, 33.24, 403.09]} rotation={[-Math.PI, -Math.PI / 2, 0]} scale={91.41}>
                <mesh name="Object_8_Tastatur_Seite_0" geometry={nodes.Object_8_Tastatur_Seite_0.geometry} material={materials.Tastatur_Seite} />
              </group>
              <group name="Object_81" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_81_Material068_0" geometry={nodes.Object_81_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_83" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_83_Tasten_2_0" geometry={nodes.Object_83_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_85" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_85_Material068_0" geometry={nodes.Object_85_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_87" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_87_Tasten_2_0" geometry={nodes.Object_87_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_89" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_89_Material068_0" geometry={nodes.Object_89_Material068_0.geometry} material={materials['Material.074_37']} />
              </group>
              <group name="Object_91" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_91_Material067_0" geometry={nodes.Object_91_Material067_0.geometry} material={materials['Material.074_36']} />
              </group>
              <group name="Object_93" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_93_Material069_0" geometry={nodes.Object_93_Material069_0.geometry} material={materials['Material.074_38']} />
              </group>
              <group name="Object_95" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_95_Tasten_2_0" geometry={nodes.Object_95_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="Object_97" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_97_Material005_0" geometry={nodes.Object_97_Material005_0.geometry} material={materials['Material.074_32']} />
              </group>
              <group name="Object_99" position={[147.71, 32.6, 403.09]} rotation={[-Math.PI / 2, -1.48, Math.PI / 2]} scale={91.41}>
                <mesh name="Object_99_Tasten_2_0" geometry={nodes.Object_99_Tasten_2_0.geometry} material={materials.Tasten_2} />
              </group>
              <group name="OnTheFly-bg_422" position={[101.6, 40.62, 244.01]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={21.89}>
                <group name="Object_782">
                  <mesh name="Object_782_OnTheFly-bg_0" geometry={nodes['Object_782_OnTheFly-bg_0'].geometry} material={materials['Material.074_40']} />
                </group>
              </group>
              <group name="Plane" position={[117.18, 25.6, -29.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[124.43, 154.11, 119.91]}>
                <mesh name="Plane_Material053_0" geometry={nodes.Plane_Material053_0.geometry} material={materials['Material.074_21']} />
              </group>
              <group name="Plane003_425" position={[159.02, 47.32, 359.94]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={19.61}>
                <group name="Object_788">
                  <mesh name="Object_788_Material057_0" geometry={nodes.Object_788_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Plane008_430" position={[122.7, 53.53, 358.46]} rotation={[-Math.PI / 2, 0.16, -Math.PI]} scale={19.61}>
                <group name="Object_798">
                  <mesh name="Object_798_Material057_0" geometry={nodes.Object_798_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Plane087_431" position={[190.99, 44.58, 567.48]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87}>
                <group name="Object_800">
                  <mesh name="Object_800_Material005_0" geometry={nodes.Object_800_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Plane088_432" position={[190.87, 44.63, 565.25]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87}>
                <group name="Object_802">
                  <mesh name="Object_802_Material005_0" geometry={nodes.Object_802_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Plane089_433" position={[192.49, 44.42, 565.41]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87}>
                <group name="Object_804">
                  <mesh name="Object_804_Material005_0" geometry={nodes.Object_804_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Plane090_434" position={[192.4, 44.4, 567.47]} rotation={[-Math.PI / 2, -0.09, -Math.PI]} scale={8.87}>
                <group name="Object_806">
                  <mesh name="Object_806_Material005_0" geometry={nodes.Object_806_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="psuback" position={[-260.27, 77.97, -352.75]} rotation={[0, Math.PI / 2, 0]} scale={59.49}>
                <mesh name="psuback_psuback_0" geometry={nodes.psuback_psuback_0.geometry} material={materials['Material.074_13']} />
              </group>
              <group name="rgb-hdd-cover-aorus-v1" position={[-93.48, 83.17, -288.8]} scale={36.94}>
                <mesh name="rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0" geometry={nodes['rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0'].geometry} material={materials['Material.074_9']} />
              </group>
              <group name="test-aorus-m2-souris-aorus-rgb2" position={[-115.85, 150.75, -435.22]} scale={35.19}>
                <mesh name="test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2" geometry={nodes['test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2'].geometry} material={materials['Material.074_18']} />
              </group>
              <group name="Text_1" position={[-143.8, 250.19, -325.72]} rotation={[0, 0, Math.PI / 2]} scale={2.44}>
                <mesh name="Text_Material046_0" geometry={nodes.Text_Material046_0.geometry} material={materials['Material.046']} />
              </group>
              <group name="Text001_1" position={[87.59, 202.48, -275.49]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[10.33, 8.38, 9.72]}>
                <mesh name="Text001_Material097_0" geometry={nodes.Text001_Material097_0.geometry} material={materials['Material.025']} />
              </group>
              <group name="Text001_436" position={[141.04, 50.58, 552.01]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71}>
                <group name="Object_810">
                  <mesh name="Object_810_Material005_0" geometry={nodes.Object_810_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Text002_437" position={[141.04, 50.58, 532.03]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71}>
                <group name="Object_812">
                  <mesh name="Object_812_Material068_0" geometry={nodes.Object_812_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text003_438" position={[141.04, 50.58, 514.78]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71}>
                <group name="Object_814">
                  <mesh name="Object_814_Material068_0" geometry={nodes.Object_814_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text004_439" position={[141.04, 50.58, 498.14]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71}>
                <group name="Object_816">
                  <mesh name="Object_816_Material068_0" geometry={nodes.Object_816_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text005_440" position={[141.04, 50.58, 480.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71}>
                <group name="Object_818">
                  <mesh name="Object_818_Material066_0" geometry={nodes.Object_818_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text006_441" position={[141.04, 50.58, 463.62]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71}>
                <group name="Object_820">
                  <mesh name="Object_820_Material066_0" geometry={nodes.Object_820_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text007_442" position={[141.04, 50.58, 443.75]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.71}>
                <group name="Object_822">
                  <mesh name="Object_822_Material066_0" geometry={nodes.Object_822_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text008_443" position={[141.65, 50.88, 427.98]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.16}>
                <group name="Object_824">
                  <mesh name="Object_824_Material066_0" geometry={nodes.Object_824_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text009_444" position={[142.09, 50.96, 409.22]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.16}>
                <group name="Object_826">
                  <mesh name="Object_826_Material060_0" geometry={nodes.Object_826_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text010_445" position={[158.03, 48.55, 561.97]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_828">
                  <mesh name="Object_828_Material005_0" geometry={nodes.Object_828_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Text011_446" position={[158.03, 48.44, 543.88]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_830">
                  <mesh name="Object_830_Material069_0" geometry={nodes.Object_830_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
              </group>
              <group name="Text012_447" position={[158.03, 48.44, 528.23]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_832">
                  <mesh name="Object_832_Material068_0" geometry={nodes.Object_832_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text013_448" position={[158.03, 48.44, 509.56]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_834">
                  <mesh name="Object_834_Material068_0" geometry={nodes.Object_834_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text014_449" position={[158.03, 48.35, 494.31]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_836">
                  <mesh name="Object_836_Material068_0" geometry={nodes.Object_836_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text015_450" position={[156.66, 48.64, 594]} rotation={[-1.59, 0, Math.PI / 2]} scale={2.69}>
                <group name="Object_838">
                  <mesh name="Object_838_Material070_0" geometry={nodes.Object_838_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text017_452" position={[192.64, 45.65, 594.8]} rotation={[-Math.PI / 2, -0.12, Math.PI / 2]} scale={3.12}>
                <group name="Object_840">
                  <mesh name="Object_840_Material070_0" geometry={nodes.Object_840_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text020_455" position={[158.03, 48.44, 475.98]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_842">
                  <mesh name="Object_842_Material066_0" geometry={nodes.Object_842_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text021_456" position={[157.21, 48.44, 455.63]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[6.41, 5.27, 6.41]}>
                <group name="Object_844">
                  <mesh name="Object_844_Material066_0" geometry={nodes.Object_844_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text022_457" position={[158.03, 48.44, 441.26]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_846">
                  <mesh name="Object_846_Material066_0" geometry={nodes.Object_846_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text023_458" position={[159.03, 48.64, 422.07]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.91}>
                <group name="Object_848">
                  <mesh name="Object_848_Material060_0" geometry={nodes.Object_848_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text025_460" position={[122.03, 53.89, 594.92]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.98}>
                <group name="Object_850">
                  <mesh name="Object_850_Material070_0" geometry={nodes.Object_850_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text026_461" position={[175.49, 47.27, 483.91]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41}>
                <group name="Object_852">
                  <mesh name="Object_852_Material066_0" geometry={nodes.Object_852_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text027_462" position={[175.49, 47.27, 501.89]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41}>
                <group name="Object_854">
                  <mesh name="Object_854_Material068_0" geometry={nodes.Object_854_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text028_463" position={[175.49, 47.27, 519.09]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41}>
                <group name="Object_856">
                  <mesh name="Object_856_Material068_0" geometry={nodes.Object_856_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text029_464" position={[175.49, 47.27, 537.01]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41}>
                <group name="Object_858">
                  <mesh name="Object_858_Material069_0" geometry={nodes.Object_858_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
              </group>
              <group name="Text030_465" position={[175.49, 47.17, 554.66]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41}>
                <group name="Object_860">
                  <mesh name="Object_860_Material005_0" geometry={nodes.Object_860_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Text031_466" position={[175.49, 47.27, 467.98]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41}>
                <group name="Object_862">
                  <mesh name="Object_862_Material066_0" geometry={nodes.Object_862_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text032_467" position={[175.49, 47.27, 450.28]} rotation={[-Math.PI / 2, -0.1, Math.PI / 2]} scale={6.41}>
                <group name="Object_864">
                  <mesh name="Object_864_Material066_0" geometry={nodes.Object_864_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text038_473" position={[122.44, 53.93, 578.06]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_866">
                  <mesh name="Object_866_Material070_0" geometry={nodes.Object_866_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text039_474" position={[122.06, 53.85, 561.23]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.17}>
                <group name="Object_868">
                  <mesh name="Object_868_Material005_0" geometry={nodes.Object_868_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Text040_475" position={[127.01, 53.03, 560.64]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_870">
                  <mesh name="Object_870_Material005_0" geometry={nodes.Object_870_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Text053_488" position={[192.64, 45.65, 359.95]} rotation={[-Math.PI / 2, -0.12, Math.PI / 2]} scale={3.12}>
                <group name="Object_872">
                  <mesh name="Object_872_Material057_0" geometry={nodes.Object_872_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text055_490" position={[156.29, 46.94, 363.38]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.01}>
                <group name="Object_874">
                  <mesh name="Object_874_Material057_0" geometry={nodes.Object_874_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text057_492" position={[122.48, 53.9, 543.37]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82}>
                <group name="Object_876">
                  <mesh name="Object_876_Material069_0" geometry={nodes.Object_876_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
              </group>
              <group name="Text058_493" position={[127.43, 53.08, 543.26]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_878">
                  <mesh name="Object_878_Material069_0" geometry={nodes.Object_878_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
              </group>
              <group name="Text059_494" position={[122.48, 53.74, 525.77]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82}>
                <group name="Object_880">
                  <mesh name="Object_880_Material068_0" geometry={nodes.Object_880_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text060_495" position={[127.43, 52.92, 525.65]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_882">
                  <mesh name="Object_882_Material068_0" geometry={nodes.Object_882_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text061_496" position={[101.74, 56.42, 595.27]} rotation={[-Math.PI / 2, 0.14, Math.PI / 2]} scale={4.18}>
                <group name="Object_884">
                  <mesh name="Object_884_Material070_0" geometry={nodes.Object_884_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text062_497" position={[122.48, 53.85, 509.28]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82}>
                <group name="Object_886">
                  <mesh name="Object_886_Material068_0" geometry={nodes.Object_886_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text063_498" position={[127.43, 53.03, 508.77]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_888">
                  <mesh name="Object_888_Material068_0" geometry={nodes.Object_888_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text070_505" position={[101.37, 56.13, 484.34]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53}>
                <group name="Object_890">
                  <mesh name="Object_890_Material066_0" geometry={nodes.Object_890_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text071_506" position={[101.21, 56.94, 513.09]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45}>
                <group name="Object_892">
                  <mesh name="Object_892_Material068_0" geometry={nodes.Object_892_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text072_507" position={[101.21, 56.94, 530.46]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45}>
                <group name="Object_894">
                  <mesh name="Object_894_Material069_0" geometry={nodes.Object_894_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
              </group>
              <group name="Text073_508" position={[101.21, 56.94, 548.2]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45}>
                <group name="Object_896">
                  <mesh name="Object_896_Material005_0" geometry={nodes.Object_896_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Text074_509" position={[101.21, 56.94, 565.18]} rotation={[-Math.PI / 2, 0.11, Math.PI / 2]} scale={4.45}>
                <group name="Object_898">
                  <mesh name="Object_898_Material005_0" geometry={nodes.Object_898_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Text079_514" position={[101.37, 56.15, 466.89]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53}>
                <group name="Object_900">
                  <mesh name="Object_900_Material066_0" geometry={nodes.Object_900_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text080_515" position={[101.37, 56.15, 449.37]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53}>
                <group name="Object_902">
                  <mesh name="Object_902_Material066_0" geometry={nodes.Object_902_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text081_516" position={[101.37, 56.15, 431.95]} rotation={[-Math.PI / 2, 0.15, Math.PI / 2]} scale={4.53}>
                <group name="Object_904">
                  <mesh name="Object_904_Material066_0" geometry={nodes.Object_904_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text082_517" position={[101.47, 56.12, 402.97]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.5}>
                <group name="Object_906">
                  <mesh name="Object_906_Material060_0" geometry={nodes.Object_906_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text083_518" position={[101.35, 56.18, 386.48]} rotation={[-Math.PI / 2, 0.2, Math.PI / 2]} scale={4.19}>
                <group name="Object_908">
                  <mesh name="Object_908_Material057_0" geometry={nodes.Object_908_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text084_519" position={[101.35, 56.18, 368.47]} rotation={[-Math.PI / 2, 0.2, Math.PI / 2]} scale={4.19}>
                <group name="Object_910">
                  <mesh name="Object_910_Material057_0" geometry={nodes.Object_910_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text085_520" position={[101.35, 56.18, 351.35]} rotation={[-Math.PI / 2, 0.2, Math.PI / 2]} scale={4.19}>
                <group name="Object_912">
                  <mesh name="Object_912_Material057_0" geometry={nodes.Object_912_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text086_521" position={[122.48, 53.85, 491.65]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82}>
                <group name="Object_914">
                  <mesh name="Object_914_Material068_0" geometry={nodes.Object_914_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text087_522" position={[127.43, 53.03, 491.82]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_916">
                  <mesh name="Object_916_Material068_0" geometry={nodes.Object_916_Material068_0.geometry} material={materials['Material.074_37']} />
                </group>
              </group>
              <group name="Text088_523" position={[122.48, 53.82, 473.66]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82}>
                <group name="Object_918">
                  <mesh name="Object_918_Material066_0" geometry={nodes.Object_918_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text089_524" position={[127.43, 53, 473.4]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_920">
                  <mesh name="Object_920_Material066_0" geometry={nodes.Object_920_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text090_525" position={[122.48, 53.85, 456.47]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={3.82}>
                <group name="Object_922">
                  <mesh name="Object_922_Material066_0" geometry={nodes.Object_922_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text091_526" position={[127.43, 53.03, 456.75]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_924">
                  <mesh name="Object_924_Material066_0" geometry={nodes.Object_924_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text092_527" position={[121.67, 54.1, 439.12]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={[3.82, 3.14, 3.82]}>
                <group name="Object_926">
                  <mesh name="Object_926_Material066_0" geometry={nodes.Object_926_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text093_528" position={[120.31, 54.21, 419.69]} rotation={[-Math.PI / 2, 0.16, -Math.PI / 2]} scale={[3.82, 3.14, 3.82]}>
                <group name="Object_928">
                  <mesh name="Object_928_Material060_0" geometry={nodes.Object_928_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text094_529" position={[127.43, 53.03, 439.36]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_930">
                  <mesh name="Object_930_Material066_0" geometry={nodes.Object_930_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text095_530" position={[127.43, 53.03, 421.59]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.33}>
                <group name="Object_932">
                  <mesh name="Object_932_Material060_0" geometry={nodes.Object_932_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text099_534" position={[186.13, 46.57, 219.4]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={4.01}>
                <group name="Object_934">
                  <mesh name="Object_934_Tasten_2_0" geometry={nodes.Object_934_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text135_570" position={[173.52, 47, 585.52]} rotation={[-1.64, 0, 0]} scale={[6.2, 8.42, 6.21]}>
                <group name="Object_936">
                  <mesh name="Object_936_Material070_0" geometry={nodes.Object_936_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text136_571" position={[175.03, 47.04, 400.01]} rotation={[-1.57, -0.08, 1.57]} scale={[6.67, 4.93, 2.74]}>
                <group name="Object_938">
                  <mesh name="Object_938_Material060_0" geometry={nodes.Object_938_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text137_572" position={[175.03, 47.04, 434.85]} rotation={[-1.57, -0.08, 1.57]} scale={[4.24, 4.93, 2.74]}>
                <group name="Object_940">
                  <mesh name="Object_940_Material060_0" geometry={nodes.Object_940_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text138_573" position={[176.05, 46.79, 584.43]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[1.86, 6.97, 6.97]}>
                <group name="Object_942">
                  <mesh name="Object_942_Material070_0" geometry={nodes.Object_942_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text139_574" position={[175.03, 47.04, 417.32]} rotation={[-1.57, -0.08, 1.57]} scale={[4.24, 4.93, 2.74]}>
                <group name="Object_944">
                  <mesh name="Object_944_Material060_0" geometry={nodes.Object_944_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text140_575" position={[126.21, 53.67, 253.13]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45}>
                <group name="Object_946">
                  <mesh name="Object_946_Tasten_2_0" geometry={nodes.Object_946_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text141_576" position={[122.22, 53.89, 271.17]} rotation={[-Math.PI / 2, 0.21, Math.PI / 2]} scale={2.7}>
                <group name="Object_948">
                  <mesh name="Object_948_Material067_0" geometry={nodes.Object_948_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text142_577" position={[192.32, 45.45, 259.97]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={4.42}>
                <group name="Object_950">
                  <mesh name="Object_950_Material067_0" geometry={nodes.Object_950_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text143_578" position={[197.02, 45.61, 260.99]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={3.79}>
                <group name="Object_952">
                  <mesh name="Object_952_Material067_0" geometry={nodes.Object_952_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text144_579" position={[184.78, 33.32, 601.23]} rotation={[-Math.PI / 2, 0.09, -Math.PI]} scale={[5.01, 3.88, 5.01]}>
                <group name="Object_954">
                  <mesh name="Object_954_Material072_0" geometry={nodes.Object_954_Material072_0.geometry} material={materials['Material.025']} />
                </group>
              </group>
              <group name="Text145_580" position={[164.62, 35.13, 204.97]} rotation={[-Math.PI / 2, 0.09, 0]} scale={3.13}>
                <group name="Object_956">
                  <mesh name="Object_956_Material072_0" geometry={nodes.Object_956_Material072_0.geometry} material={materials['Material.025']} />
                </group>
              </group>
              <group name="Text146_581" position={[189.42, 46.76, 488.89]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[4.95, 15.57, 11.59]}>
                <group name="Object_958">
                  <mesh name="Object_958_Material066_0" geometry={nodes.Object_958_Material066_0.geometry} material={materials['Material.074_35']} />
                </group>
              </group>
              <group name="Text147_582" position={[140.39, 50.32, 267.75]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={4.08}>
                <group name="Object_960">
                  <mesh name="Object_960_Material067_0" geometry={nodes.Object_960_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text148_583" position={[145.19, 50.32, 270.03]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={2.49}>
                <group name="Object_962">
                  <mesh name="Object_962_Material067_0" geometry={nodes.Object_962_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text149_584" position={[145.19, 50.32, 234.87]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={2.49}>
                <group name="Object_964">
                  <mesh name="Object_964_Tasten_2_0" geometry={nodes.Object_964_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text150_585" position={[157.09, 48.55, 408.62]} rotation={[-1.57, -0.08, 1.57]} scale={[6.67, 4.93, 2.74]}>
                <group name="Object_966">
                  <mesh name="Object_966_Material060_0" geometry={nodes.Object_966_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text151_586" position={[158.95, 48.55, 391.27]} rotation={[-1.57, -0.04, 1.57]} scale={[6.67, 4.93, 2.74]}>
                <group name="Object_968">
                  <mesh name="Object_968_Material060_0" geometry={nodes.Object_968_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text152_587" position={[140.39, 50.37, 250.49]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={4.08}>
                <group name="Object_970">
                  <mesh name="Object_970_Tasten_2_0" geometry={nodes.Object_970_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text153_588" position={[158.81, 47.35, 358.08]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[3.75, 1.66, 5.45]}>
                <group name="Object_972">
                  <mesh name="Object_972_Material057_0" geometry={nodes.Object_972_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text154_589" position={[158.53, 47.35, 360.21]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45}>
                <group name="Object_974">
                  <mesh name="Object_974_Material057_0" geometry={nodes.Object_974_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text155_590" position={[138.81, 50.51, 591.9]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.57}>
                <group name="Object_976">
                  <mesh name="Object_976_Material070_0" geometry={nodes.Object_976_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text156_591" position={[140.39, 50.37, 233.01]} rotation={[-Math.PI / 2, 0.08, Math.PI / 2]} scale={4.08}>
                <group name="Object_978">
                  <mesh name="Object_978_Tasten_2_0" geometry={nodes.Object_978_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text157_592" position={[143.95, 50.12, 251.22]} rotation={[-1.49, 0, 0]} scale={[2.49, 4.58, 2.51]}>
                <group name="Object_980">
                  <mesh name="Object_980_Tasten_2_0" geometry={nodes.Object_980_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text158_593" position={[100.21, 56.33, 328.51]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_982">
                  <mesh name="Object_982_Material057_0" geometry={nodes.Object_982_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text159_594" position={[100.21, 56.33, 310.76]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_984">
                  <mesh name="Object_984_Material057_0" geometry={nodes.Object_984_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text160_595" position={[100.21, 56.33, 293.44]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_986">
                  <mesh name="Object_986_Material057_0" geometry={nodes.Object_986_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text161_596" position={[158.2, 48.55, 268.32]} rotation={[-1.57, -0.04, 1.57]} scale={[5.12, 4.44, 2.47]}>
                <group name="Object_988">
                  <mesh name="Object_988_Material067_0"  geometry={nodes.Object_988_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text162_597" position={[162.31, 48.55, 268.01]} rotation={[-1.57, -0.04, 1.57]} scale={[3.21, 4.44, 2.47]}>
                <group name="Object_990">
                  <mesh name="Object_990_Material067_0" geometry={nodes.Object_990_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text163_598" position={[158.2, 48.55, 250.9]} rotation={[-1.57, -0.04, 1.57]} scale={[5.12, 4.44, 2.47]}>
                <group name="Object_992">
                  <mesh name="Object_992_Tasten_2_0" geometry={nodes.Object_992_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text164_599" position={[158.2, 48.55, 233.22]} rotation={[-1.57, -0.04, 1.57]} scale={[5.12, 4.44, 2.47]}>
                <group name="Object_994">
                  <mesh name="Object_994_Tasten_2_0" geometry={nodes.Object_994_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text165_600" position={[162.31, 48.55, 232.69]} rotation={[-1.57, -0.04, 1.57]} scale={[3.21, 4.44, 2.47]}>
                <group name="Object_996">
                  <mesh name="Object_996_Tasten_2_0" geometry={nodes.Object_996_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text166_601" position={[191.77, 45.45, 235.88]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={3.25}>
                <group name="Object_998">
                  <mesh name="Object_998_Tasten_2_0" geometry={nodes.Object_998_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text167_602" position={[139.97, 50.54, 592.71]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.46}>
                <group name="Object_1000">
                  <mesh name="Object_1000_Material070_0" geometry={nodes.Object_1000_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text168_603" position={[141.68, 50.51, 585.65]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={5.57}>
                <group name="Object_1002">
                  <mesh name="Object_1002_Material070_0" geometry={nodes.Object_1002_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text169_604" position={[140.52, 50.54, 584.84]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={2.46}>
                <group name="Object_1004">
                  <mesh name="Object_1004_Material070_0" geometry={nodes.Object_1004_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text170_605" position={[192.32, 45.45, 402.26]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7}>
                <group name="Object_1006">
                  <mesh name="Object_1006_Material057_0" geometry={nodes.Object_1006_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text171_606" position={[192.32, 45.45, 377.97]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7}>
                <group name="Object_1008">
                  <mesh name="Object_1008_Material057_0" geometry={nodes.Object_1008_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text172_607" position={[192.11, 45.45, 422.37]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7}>
                <group name="Object_1010">
                  <mesh name="Object_1010_Material060_0" geometry={nodes.Object_1010_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text173_608" position={[176.05, 46.79, 581.64]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[1.86, 6.97, 6.97]}>
                <group name="Object_1012">
                  <mesh name="Object_1012_Material070_0" geometry={nodes.Object_1012_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text174_609" position={[178.06, 46.79, 584.43]} rotation={[-1.5, 0, -Math.PI]} scale={[2.69, 9.47, 6.98]}>
                <group name="Object_1014">
                  <mesh name="Object_1014_Material070_0" geometry={nodes.Object_1014_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text175_610" position={[178.06, 46.79, 582.63]} rotation={[-1.5, 0, -Math.PI]} scale={[2.69, 9.47, 6.98]}>
                <group name="Object_1016">
                  <mesh name="Object_1016_Material070_0" geometry={nodes.Object_1016_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text176_611" position={[177.22, 46.79, 583.34]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[3.57, 6.97, 6.97]}>
                <group name="Object_1018">
                  <mesh name="Object_1018_Material070_0" geometry={nodes.Object_1018_Material070_0.geometry} material={materials['Material.074_39']} />
                </group>
              </group>
              <group name="Text177_612" position={[173.52, 47.04, 367.42]} rotation={[-1.56, 0, 0]} scale={[6.2, 11.14, 6.2]}>
                <group name="Object_1020">
                  <mesh name="Object_1020_Material057_0" geometry={nodes.Object_1020_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text178_613" position={[176.26, 47.09, 365.53]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[2.19, 6.2, 6.2]}>
                <group name="Object_1022">
                  <mesh name="Object_1022_Material057_0" geometry={nodes.Object_1022_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text179_614" position={[176.26, 47.09, 362.25]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[2.19, 6.2, 6.2]}>
                <group name="Object_1024">
                  <mesh name="Object_1024_Material057_0" geometry={nodes.Object_1024_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text180_615" position={[178.04, 47.09, 365.53]} rotation={[-1.5, 0, -Math.PI]} scale={[2.39, 11.12, 6.23]}>
                <group name="Object_1026">
                  <mesh name="Object_1026_Material057_0" geometry={nodes.Object_1026_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text181_616" position={[178.04, 47.09, 363.41]} rotation={[-1.5, 0, -Math.PI]} scale={[2.39, 11.12, 6.23]}>
                <group name="Object_1028">
                  <mesh name="Object_1028_Material057_0" geometry={nodes.Object_1028_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text182_617" position={[177.3, 47.09, 364.24]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={[4.2, 6.2, 6.2]}>
                <group name="Object_1030">
                  <mesh name="Object_1030_Material057_0" geometry={nodes.Object_1030_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text183_618" position={[122.22, 53.65, 358.73]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={5.45}>
                <group name="Object_1032">
                  <mesh name="Object_1032_Material057_0" geometry={nodes.Object_1032_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text184_619" position={[122.22, 53.78, 328.51]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_1034">
                  <mesh name="Object_1034_Material057_0" geometry={nodes.Object_1034_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text185_620" position={[122.22, 53.78, 311.13]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_1036">
                  <mesh name="Object_1036_Material057_0" geometry={nodes.Object_1036_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text186_621" position={[122.22, 53.78, 292.77]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_1038">
                  <mesh name="Object_1038_Material057_0" geometry={nodes.Object_1038_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text187_622" position={[152.11, 49.61, 217.78]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45}>
                <group name="Object_1040">
                  <mesh name="Object_1040_Tasten_2_0" geometry={nodes.Object_1040_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text188_623" position={[123.41, 53.51, 217.78]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45}>
                <group name="Object_1042">
                  <mesh name="Object_1042_Tasten_2_0" geometry={nodes.Object_1042_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text189_624" position={[140.39, 50.56, 328.6]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_1044">
                  <mesh name="Object_1044_Material057_0" geometry={nodes.Object_1044_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text190_625" position={[140.39, 50.56, 310.09]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_1046">
                  <mesh name="Object_1046_Material057_0" geometry={nodes.Object_1046_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text191_626" position={[140.39, 50.56, 293.03]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.52}>
                <group name="Object_1048">
                  <mesh name="Object_1048_Material057_0" geometry={nodes.Object_1048_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text192_627" position={[126.59, 53.67, 235.64]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={5.45}>
                <group name="Object_1050">
                  <mesh name="Object_1050_Tasten_2_0" geometry={nodes.Object_1050_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text193_628" position={[138.83, 50.66, 360.84]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={2.99}>
                <group name="Object_1052">
                  <mesh name="Object_1052_Material057_0" geometry={nodes.Object_1052_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text194_629" position={[138.83, 50.52, 377.71]} rotation={[-Math.PI / 2, 0.04, Math.PI / 2]} scale={2.99}>
                <group name="Object_1054">
                  <mesh name="Object_1054_Material057_0" geometry={nodes.Object_1054_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text195_630" position={[138.83, 50.63, 395.77]} rotation={[-Math.PI / 2, 0.04, Math.PI / 2]} scale={2.99}>
                <group name="Object_1056">
                  <mesh name="Object_1056_Material073_0" geometry={nodes.Object_1056_Material073_0.geometry} material={materials['Material.073']} />
                </group>
              </group>
              <group name="Text196_631" position={[122.22, 53.9, 387.25]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.68}>
                <group name="Object_1058">
                  <mesh name="Object_1058_Material057_0" geometry={nodes.Object_1058_Material057_0.geometry} material={materials['Material.074_33']} />
                </group>
              </group>
              <group name="Text197_632" position={[118.88, 54.41, 404.73]} rotation={[-Math.PI / 2, 0.16, Math.PI / 2]} scale={4.68}>
                <group name="Object_1060">
                  <mesh name="Object_1060_Material060_0" geometry={nodes.Object_1060_Material060_0.geometry} material={materials['Material.074_34']} />
                </group>
              </group>
              <group name="Text198_633" position={[178.59, 47.22, 251.22]} rotation={[-1.49, -0.04, 0]} scale={[2.49, 4.58, 2.51]}>
                <group name="Object_1062">
                  <mesh name="Object_1062_Tasten_2_0" geometry={nodes.Object_1062_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text199_634" position={[175.03, 47.04, 250.75]} rotation={[-1.57, -0.08, 1.57]} scale={[4.72, 4.04, 2.74]}>
                <group name="Object_1064">
                  <mesh name="Object_1064_Tasten_2_0" geometry={nodes.Object_1064_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text200_635" position={[175.03, 47.04, 267.9]} rotation={[-1.57, -0.08, 1.57]} scale={[4.72, 4.04, 2.74]}>
                <group name="Object_1066">
                  <mesh name="Object_1066_Material067_0" geometry={nodes.Object_1066_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text201_636" position={[180.15, 47.44, 269.12]} rotation={[-1.57, -0.08, 1.57]} scale={[3.03, 2.59, 1.76]}>
                <group name="Object_1068">
                  <mesh name="Object_1068_Material067_0" geometry={nodes.Object_1068_Material067_0.geometry} material={materials['Material.074_36']} />
                </group>
              </group>
              <group name="Text202_637" position={[175.03, 47.04, 233.45]} rotation={[-1.57, -0.08, 1.57]} scale={[4.72, 4.04, 2.74]}>
                <group name="Object_1070">
                  <mesh name="Object_1070_Tasten_2_0" geometry={nodes.Object_1070_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text203_638" position={[180.15, 47.58, 235.55]} rotation={[-1.57, -0.08, 1.57]} scale={[3.03, 2.59, 1.76]}>
                <group name="Object_1072">
                  <mesh name="Object_1072_Tasten_2_0" geometry={nodes.Object_1072_Tasten_2_0.geometry} material={materials.Tasten_2} />
                </group>
              </group>
              <group name="Text204_639" position={[192.11, 45.45, 545.46]} rotation={[-Math.PI / 2, -0.07, Math.PI / 2]} scale={2.7}>
                <group name="Object_1074">
                  <mesh name="Object_1074_Material069_0" geometry={nodes.Object_1074_Material069_0.geometry} material={materials['Material.074_38']} />
                </group>
              </group>
              <group name="Text_435" position={[140.84, 50.58, 568.87]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={6.41}>
                <group name="Object_808">
                  <mesh name="Object_808_Material005_0" geometry={nodes.Object_808_Material005_0.geometry} material={materials['Material.074_32']} />
                </group>
              </group>
              <group name="Torus" position={[69.93, 356.74, -407.01]} rotation={[-Math.PI / 2, 0, 0]} scale={3.3}>
                <mesh name="Torus_Material013_0" geometry={nodes.Torus_Material013_0.geometry} material={materials['Material.013']} />
              </group>
              <group name="Torus001" position={[69.93, 356.74, -423.73]} rotation={[-Math.PI / 2, 0, 0]} scale={3.3}>
                <mesh name="Torus001_Material032_0" geometry={nodes.Torus001_Material032_0.geometry} material={materials['Material.032']} />
              </group>
              <group name="usb" position={[70.47, 357.15, -289.69]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34}>
                <mesh name="usb_usb_0" geometry={nodes.usb_usb_0.geometry} material={materials['Material.074_14']} />
              </group>
              <group name="usb001" position={[70.47, 357.15, -321]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34}>
                <mesh name="usb001_usb_0" geometry={nodes.usb001_usb_0.geometry} material={materials['Material.074_14']} />
              </group>
              <group name="usb002" position={[70.47, 357.15, -352.59]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34}>
                <mesh name="usb002_usb_0" geometry={nodes.usb002_usb_0.geometry} material={materials['Material.074_14']} />
              </group>
              <group name="usb003" position={[70.47, 357.15, -384.89]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={7.34}>
                <mesh name="usb003_usb_0" geometry={nodes.usb003_usb_0.geometry} material={materials['Material.074_14']} />
              </group>
            </group>
          </group>
          <group name="BackFaOut" position={[-2.48, 3.36, 2.93]} rotation={[0, 0, 1.56]} scale={0.09}>
            <mesh name="Cylinder028" geometry={nodes.Cylinder028.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder028_1" geometry={nodes.Cylinder028_1.geometry} material={materials['Material.021']} />
          </group>
          <group name="insideFan" position={[-2.42, 3.38, 2.88]} rotation={[0, 0, -1.58]} scale={0.09}>
            <mesh name="Cylinder026" geometry={nodes.Cylinder026.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder026_1" geometry={nodes.Cylinder026_1.geometry} material={materials['Material.021']} />
          </group>
          <group name="InsideFanBottom" position={[0.72, 3.51, 1.79]} rotation={[Math.PI, 0, 1.58]} scale={0.09}>
            <mesh name="Cylinder030" geometry={nodes.Cylinder030.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder030_1" geometry={nodes.Cylinder030_1.geometry} material={materials['Material.021']} />
          </group>
          <group name="InsideFanleft" position={[-1.62, 3.48, 3.49]} rotation={[1.57, 1.56, -3.14]} scale={0.09}>
            <mesh name="Cylinder022" geometry={nodes.Cylinder022.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder022_1" geometry={nodes.Cylinder022_1.geometry} material={materials['Material.021']} />
          </group>
          <group name="InsideFanRight" position={[-0.37, 3.53, 3.49]} rotation={[1.57, 1.56, -3.14]} scale={0.09}>
            <mesh name="Cylinder017" geometry={nodes.Cylinder017.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder017_1" geometry={nodes.Cylinder017_1.geometry} material={materials['Material.021']} />
            <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.021']} position={[0, 3.08, 0]} rotation={[0, 0, 3.14]} />
            <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials['Material.020']} />
          </group>
          <group name="InsideFanTop" position={[0.72, 3.51, 2.9]} rotation={[Math.PI, 0, 1.58]} scale={0.09}>
            <mesh name="Cylinder029" geometry={nodes.Cylinder029.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder029_1" geometry={nodes.Cylinder029_1.geometry} material={materials['Material.021']} />
          </group>
          <group name="InsideFanTop001" position={[-1.75, 3.69, 2.66]} rotation={[Math.PI, 0, 1.58]} scale={0.07}>
            <mesh name="Cylinder001_1" geometry={nodes.Cylinder001_1.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder001_2" geometry={nodes.Cylinder001_2.geometry} material={materials['Material.021']} />
          </group>
          <group name="OutsideFanBot" position={[0.83, 3.56, 1.84]} rotation={[0, 0, -1.58]} scale={0.09}>
            <mesh name="Cylinder023" geometry={nodes.Cylinder023.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder023_1" geometry={nodes.Cylinder023_1.geometry} material={materials['Material.021']} />
            <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.021']} position={[0.6, -1.41, 12]} rotation={[0, 0.3, 3.14]} scale={[1, 1, 0.97]} />
            <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials['Material.021']} position={[0, 3.08, -0.35]} rotation={[0, 0.3, 3.14]} scale={[0.96, 1, 0.98]} />
            <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials['Material.021']} position={[0, 3.08, 11.79]} rotation={[0, 0.3, 3.14]} scale={[1, 1, 0.97]} />
            <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials['Material.021']} position={[2.1, -33.63, 11.79]} rotation={[0, 0.3, 3.14]} scale={[1, 1, 0.97]} />
            <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={materials['Material.021']} position={[2.57, -37.16, 12.31]} rotation={[0, 0.3, 3.14]} scale={[1, 1, 0.97]} />
            <mesh name="Plane008" geometry={nodes.Plane008.geometry} material={materials['Material.021']} position={[0.6, -1.41, -0.5]} rotation={[0, 0.3, 3.14]} scale={[1, 1, 0.97]} />
            <mesh name="Plane009" geometry={nodes.Plane009.geometry} material={materials['Material.021']} position={[-0.92, -23.02, 9.57]} rotation={[0, 0.3, 3.14]} scale={[0.77, 0.77, 0.74]} />
            <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={materials['Material.021']} position={[-1.79, -29.59, 9.34]} rotation={[0, 0.3, 3.14]} scale={[0.77, 0.77, 0.74]} />
            <mesh name="Cube003_1" geometry={nodes.Cube003_1.geometry} material={materials['Material.020']} position={[0, 0, -0.35]} scale={[1, 1, 0.95]} />
            <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials['Material.020']} position={[0, 0, 11.79]} scale={[1, 1, 0.96]} />
            <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials['Material.020']} position={[0, 0, 11.79]} scale={[1, 1, 0.96]} />
            <mesh name="Cube006_1" geometry={nodes.Cube006_1.geometry} material={materials['Material.020']} position={[2.19, -36.71, 11.62]} scale={[1, 1, 0.96]} />
            <mesh name="Cube007_1" geometry={nodes.Cube007_1.geometry} material={materials['Material.020']} position={[0, 0, 11.79]} scale={[1, 1, 0.96]} />
            <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials['Material.020']} position={[0, 0, 11.79]} scale={[1, 1, 0.96]} />
            <mesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials['Material.020']} position={[2.57, -37.4, 12.31]} rotation={[0, 0, Math.PI]} scale={[1, 1, 0.96]} />
            <mesh name="Cube010_1" geometry={nodes.Cube010_1.geometry} material={materials['Material.020']} position={[2.57, -37.4, 12.31]} rotation={[0, 0, Math.PI]} scale={[1, 1, 0.96]} />
            <mesh name="Cube011_1" geometry={nodes.Cube011_1.geometry} material={materials['Material.020']} position={[0.6, -1.31, 12]} rotation={[Math.PI, 0, 0]} scale={[1, 1, 0.96]} />
            <mesh name="Cube012_1" geometry={nodes.Cube012_1.geometry} material={materials['Material.020']} position={[0.6, -1.31, -0.5]} rotation={[Math.PI, 0, 0]} scale={[1, 1, 0.96]} />
            <mesh name="Cube014_1" geometry={nodes.Cube014_1.geometry} material={materials['Material.020']} position={[-1.32, -25.4, 9.57]} scale={[0.77, 0.77, 0.74]} />
            <mesh name="Cube015_1" geometry={nodes.Cube015_1.geometry} material={materials['Material.020']} position={[-1.79, -29.51, 9.34]} rotation={[Math.PI, 0, 0]} scale={[0.77, 0.77, 0.74]} />
          </group>
          <group name="OutsideFantop" position={[0.83, 3.56, 2.88]} rotation={[0, 0, -1.58]} scale={0.09}>
            <mesh name="Cylinder027" geometry={nodes.Cylinder027.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder027_1" geometry={nodes.Cylinder027_1.geometry} material={materials['Material.021']} />
          </group>
          <group name="TopFanLeft" position={[-1.62, 3.48, 3.49]} rotation={[1.57, 1.56, -3.14]} scale={0.09}>
            <mesh name="Cylinder009_1" geometry={nodes.Cylinder009_1.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder009_2" geometry={nodes.Cylinder009_2.geometry} material={materials['Material.021']} />
            <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials['Material.021']} position={[0, 3.08, 0]} rotation={[0, 0.22, 3.14]} />
            <mesh name="Cube013_1" geometry={nodes.Cube013_1.geometry} material={materials['Material.020']} />
          </group>
          <group name="TopFanRight003" position={[0.83, 3.56, 2.88]} rotation={[0, 0, -1.58]} scale={0.09}>
            <mesh name="Cylinder025" geometry={nodes.Cylinder025.geometry} material={materials['Material.020']} />
            <mesh name="Cylinder025_1" geometry={nodes.Cylinder025_1.geometry} material={materials['Material.021']} />
          </group>
        </group>
        <group name="Sketchfab_model003" position={[0, 4.23, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="e4808e6426c64dc9b81fc8f5e02cda34fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode002">
              <group name="Table_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Table_Legs_Material001_0" geometry={nodes.Table_Legs_Material001_0.geometry} material={materials['Material.008']} scale={0.14} />
              </group>
              <group name="Table_Top" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh name="Table_Top_Material_0" geometry={nodes.Table_Top_Material_0.geometry} material={materials['Material.005']} scale={-0.13} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[-2.92, 4.16, 9]} rotation={[-Math.PI / 2, 0, -0.69]} scale={4.21}>
          <group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Armrest">
              <mesh name="defaultMaterial010" geometry={nodes.defaultMaterial010.geometry} material={materials['01___Default']} />
            </group>
            <group name="BackBolt">
              <mesh name="defaultMaterial004" geometry={nodes.defaultMaterial004.geometry} material={materials['01___Default']} />
            </group>
            <group name="Backrest">
              <mesh name="defaultMaterial005" geometry={nodes.defaultMaterial005.geometry} material={materials['01___Default']} />
            </group>
            <group name="Backrest001">
              <mesh name="defaultMaterial009" geometry={nodes.defaultMaterial009.geometry} material={materials['01___Default']} />
            </group>
            <group name="Backrest002">
              <mesh name="defaultMaterial016" geometry={nodes.defaultMaterial016.geometry} material={materials['01___Default']} />
            </group>
            <group name="Base">
              <mesh name="defaultMaterial013" geometry={nodes.defaultMaterial013.geometry} material={materials['01___Default']} />
            </group>
            <group name="bolts">
              <mesh name="defaultMaterial006" geometry={nodes.defaultMaterial006.geometry} material={materials['01___Default']} />
            </group>
            <group name="chair">
              <mesh name="defaultMaterial017" geometry={nodes.defaultMaterial017.geometry} material={materials['01___Default']} />
            </group>
            <group name="chairBase">
              <mesh name="defaultMaterial007" geometry={nodes.defaultMaterial007.geometry} material={materials['01___Default']} />
            </group>
            <group name="Cylinder001001">
              <mesh name="defaultMaterial001" geometry={nodes.defaultMaterial001.geometry} material={materials['01___Default']} />
            </group>
            <group name="Handle#1">
              <mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials['01___Default']} />
            </group>
            <group name="handle#2">
              <mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials['01___Default']} />
            </group>
            <group name="Handrest">
              <mesh name="defaultMaterial011" geometry={nodes.defaultMaterial011.geometry} material={materials['01___Default']} />
            </group>
            <group name="Holes">
              <mesh name="defaultMaterial015" geometry={nodes.defaultMaterial015.geometry} material={materials['01___Default']} />
            </group>
            <group name="Object002">
              <mesh name="defaultMaterial008" geometry={nodes.defaultMaterial008.geometry} material={materials['01___Default']} />
            </group>
            <group name="Seat">
              <mesh name="defaultMaterial012" geometry={nodes.defaultMaterial012.geometry} material={materials['01___Default']} />
            </group>
            <group name="seat">
              <mesh name="defaultMaterial014" geometry={nodes.defaultMaterial014.geometry} material={materials['01___Default']} />
            </group>
            <group name="Wheelbase">
              <mesh name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials['01___Default']} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model004" position={[9.44, 18.97, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder_1" position={[-1.94, -9.7, 0.3]} rotation={[0, 0, -Math.PI / 2]} scale={0.02}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material_0} />
              </group>
              <group name="Plane002_3" position={[-1.96, -12.02, 0.02]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={1.09} />
            </group>
          </group>
        </group>
        <group name="pCube887" position={[-0.23, -20.89, 3.14]} rotation={[0, 0, Math.PI / 2]} scale={0.78} />
        <group name="pCube978" position={[-0.23, -20.89, -1.89]} rotation={[0, 0, Math.PI / 2]} scale={0.78} />
        <group name="AudioPort1" position={[12.66, -0.57, -8.84]} rotation={[0, 0, Math.PI / 2]} scale={[0.07, 0.21, 0.07]} />
        <group name="AudioPort2" position={[12.66, -0.95, -8.84]} rotation={[0, 0, Math.PI / 2]} scale={[0.07, 0.21, 0.07]} />
        <group name="pCube1200" position={[9.24, 8.82, -10.38]} rotation={[-Math.PI / 2, 0, Math.PI]} />
        <group name="pCube1201" position={[9.24, 8.38, -10.38]} rotation={[-Math.PI / 2, 0, Math.PI]} />
        <group name="pCube1202" position={[9.24, 7.98, -10.38]} rotation={[-Math.PI / 2, 0, Math.PI]} />
        <group name="pCube1203" position={[9.24, 7.56, -10.38]} rotation={[-Math.PI / 2, 0, Math.PI]} />
        <group name="pCylinder97" position={[12.92, -0.07, -7.42]} scale={[1.25, 1.25, 0.15]} />
        <group name="pCylinder98" position={[12.92, 3.26, -7.42]} scale={[1.25, 1.25, 0.15]} />
        <group name="ResetButton" position={[12.83, -1.55, -8.84]} rotation={[0, 0, Math.PI / 2]} scale={[0.27, 0.06, 0.27]} />
        <group name="pCylinder104_1" position={[12.87, 4.93, -7.76]} rotation={[0, 0, -Math.PI / 2]} scale={[0.07, 0.27, 0.07]} />
        <group name="pCylinder155" position={[12.87, -11.39, -7.76]} rotation={[0, 0, -Math.PI / 2]} scale={[0.07, 0.27, 0.07]} />
        <group name="pCylinder104" position={[12.46, 5.27, -7.76]} scale={[0.07, 0.27, 0.07]} />
        <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials['Material.016']} position={[3.59, 6.74, 1.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.58, 1.12, 0.9]} />
        <mesh name="Object_128001" geometry={nodes.Object_128001.geometry} material={materials['Material.016']} position={[2.63, 6.45, -1.01]} rotation={[Math.PI / 2, 0, -1.57]} scale={[1.9, 1.12, 1.46]} />
        <mesh name="Cube053_Material048_0001" geometry={nodes.Cube053_Material048_0001.geometry} material={materials['Material.059']} />
        <mesh name="MY_SCREEN_MY_SCREEN_0" ref={meshRef}   onClick={zoomIn} geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry} material={material}  position={[-3.05, 7.2, -1.25]} rotation={[Math.PI /-33.8, 0, 0]} scale={3.27} />
        <Center position={[0,11,1]}>
        <Text3D  curveSegments={12}        
          letterSpacing={-0.01}
          size={0.5}
          font="/Inter_Bold.json">       
        {textContent}
      </Text3D>
      </Center>
        <mesh name="TwistedTorus" geometry={nodes.TwistedTorus.geometry} material={materials['Material.001']} position={[2.83, 7.31, 0.836]} rotation={[Math.PI / 2, 0, 0]} scale={0.06} />
        <mesh name="Text001" geometry={nodes.Text001.geometry} material={materials['Material.009']} position={[2.71, 7.47, 0.88]} rotation={[Math.PI / 2, 0, 0]} scale={0.08} />
      </group>
    </group>
  )
}

useGLTF.preload('/veryNewSetup1234.glb')
