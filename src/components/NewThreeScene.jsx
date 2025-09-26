import React, { Suspense, useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

// This component serves as a placeholder for a real 3D model.
// It displays a rotating green cube and implements the interactive glow effect.
const PlaceholderModel = ({ glowIntensity }) => {
  const meshRef = useRef(null);

  // Rotate the box on each frame for some subtle animation.
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;
    }
  });

  // The material's emissive color and intensity are updated based on the glowIntensity prop.
  // This creates the visual "glow" effect when particles hit the ground.
  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#1A4D2E"
        roughness={0.5}
        emissive="#00BFFF" // The color of the glow
        emissiveIntensity={glowIntensity} // The strength of the glow
      />
    </mesh>
  );
};

/*
  TO IMPLEMENT A REAL .GLB MODEL:
  1. Add the .glb file to the `public/` directory.
  2. Uncomment the `useGLTF` import from `@react-three/drei`.
  3. Replace the `PlaceholderModel` component with this `Model` component:

  import { useGLTF } from '@react-three/drei';

  const Model = ({ glowIntensity }) => {
    const { scene } = useGLTF('/your-model-name.glb');
    const modelRef = useRef();

    useEffect(() => {
      if (!modelRef.current) return;
      modelRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material = child.material.clone();
          child.material.emissiveIntensity = glowIntensity;
          child.material.emissive.setHex(0x00BFFF);
        }
      });
    }, [glowIntensity]);

    return <primitive object={scene} ref={modelRef} scale={1.5} castShadow receiveShadow />;
  };

  4. In the `NewThreeScene` component, replace `<PlaceholderModel ... />` with `<Model ... />`.
  5. Remember to preload your model with `useGLTF.preload('/your-model-name.glb');`
*/

// This component creates the particle stream effect.
const Particles = ({ count = 200, onParticleHit }) => {
  const meshRef = useRef(null);

  const initialPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] -= 1.5 * delta;
        if (positions[i * 3 + 1] < 0) {
          onParticleHit();
          positions[i * 3 + 1] = 10;
        }
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={initialPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#00BFFF" size={0.05} transparent opacity={0.8} />
    </points>
  );
};

// Main 3D scene component
const NewThreeScene = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);

  const handleParticleHit = () => {
    setGlowIntensity(1.5);
  };

  useFrame((_state, delta) => {
    if (glowIntensity > 0) {
      setGlowIntensity(prev => Math.max(0, prev - delta * 1.5));
    }
  });

  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 12], fov: 50 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 10, 7.5]}
          intensity={1.5}
          castShadow
        />
        <Environment preset="sunset" />

        <PlaceholderModel glowIntensity={glowIntensity} />
        <Particles onParticleHit={handleParticleHit} />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={6}
          maxDistance={20}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={Math.PI / 4}
        />
      </Suspense>
    </Canvas>
  );
};

export default NewThreeScene;