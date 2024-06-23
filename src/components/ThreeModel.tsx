'use client';
//@ts-ignore
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

function Model() {
  const { scene } = useGLTF('/wetware/scene.gltf');
  const outerRef = useRef([]);
  const innerRef = useRef([]);

  scene.traverse((child) => {
    //@ts-ignore
    if (child.isMesh) {
      if (child.name === 'Object_4' || child.name === 'Object_5') {
        //@ts-ignore

        child.material = new MeshStandardMaterial({
          color: child.name === 'Object_4' ? '#e93087 ' : '#bfafb2',
          transparent: true,
          emissive: child.name === 'Object_4' ? '#f87E9e' : '#da614e',
          opacity: 0.4,
          metalness: child.name === 'Object_4' ? 0.55 : 0.55,
          roughness: child.name === 'Object_4' ? 0.95 : 0.95,
          depthWrite: true,
          emissiveIntensity: 0.1,
        });
        child.renderOrder = 1;
        //@ts-ignore

        outerRef.current.push(child);
      } else if (child.name === 'Object_2' || child.name === 'Object_7') {
        //@ts-ignore
        child.material = new MeshStandardMaterial({
          color: child.name === 'Object_2' ? '#e93087' : '#f55771',
          transparent: true,
          opacity: 0.1,
          metalness: child.name === 'Object_2' ? 1 : 0.95,
          roughness: child.name === 'Object_2' ? 0.95 : 1,
          emissive: child.name === 'Object_2' ? '#da614e' : '#e93087',
          emissiveIntensity: 1,
          depthWrite: false,
        });
        child.renderOrder = 2;

        //@ts-ignore
        innerRef.current.push(child);
      }
    }
  });

  scene.scale.set(2, 2, 2);

  useFrame(() => {


    outerRef.current.forEach((outer) => {
      //@ts-ignore

      outer.rotation.x += 0.001;
      //@ts-ignore

      outer.rotation.y += 0.001;
    });
    innerRef.current.forEach((inner) => {
      //@ts-ignore

      inner.rotation.x -= 0.002;
      //@ts-ignore

      inner.rotation.y -= 0.002;
    });
  });

  return <primitive object={scene} />;
}

export default function ThreeModel() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* Add pink lighting */}
        <ambientLight intensity={5} />
        <pointLight position={[20, 20, 20]} color="white" intensity={50} />{' '}
        {/* Increase point light intensity */}
        <pointLight
          position={[-20, -20, -20]}
          color="white"
          intensity={90}
        />{' '}
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Suspense>
    </Canvas>
  );
}
