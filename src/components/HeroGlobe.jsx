import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls, Stars } from '@react-three/drei';

const RotatingGlobe = () => {
  const globeRef = useRef();

  useFrame((_, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.2}>
      <mesh ref={globeRef} scale={2.2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#1B4D3E"
          roughness={0.35}
          metalness={0.15}
          flatShading
        />
      </mesh>
      <mesh scale={[2.4, 2.4, 2.4]}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#2CB47F"
          roughness={0.8}
          metalness={0.1}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
};

const HeroGlobe = () => (
  <div className="absolute inset-0">
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={[0, 0, 0]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[2, 3, 4]} intensity={1} />
      <directionalLight position={[-3, -2, -1]} intensity={0.35} />
      <Suspense
        fallback={(
          <Html center>
            <div className="text-white text-sm tracking-[0.2em] uppercase opacity-60">
              Carregando experiência 3D...
            </div>
          </Html>
        )}
      >
        <RotatingGlobe />
        <Stars
          radius={80}
          depth={40}
          count={2500}
          factor={4}
          saturation={0}
          fade
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
    <div className="absolute inset-0 bg-gradient-to-r from-green-primary/80 via-emerald-900/40 to-transparent mix-blend-screen" />
  </div>
);

export default HeroGlobe;
