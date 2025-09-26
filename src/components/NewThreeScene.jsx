import React, { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { BufferGeometry, Material, Mesh } from 'three';

// This component loads and displays the 3D model.
// It uses useGLTF for efficient loading and is wrapped in Suspense.
const Model = ({ glowIntensity }) => {
  // useGLTF loads the model. The path is relative to the public directory.
  const { scene } = useGLTF('/model.glb');
  const modelRef = useRef();

  // This effect will run when the glowIntensity changes.
  // It traverses the model and updates the emissive properties of its materials.
  useEffect(() => {
    if (!modelRef.current) return;

    modelRef.current.traverse((child) => {
      if (child.isMesh && child.material) {
        // We clone the material to avoid altering the original cache
        child.material = child.material.clone();
        child.material.emissiveIntensity = glowIntensity;
        child.material.emissive.setHex(0x00BFFF); // Set emissive color to cyan
      }
    });
  }, [glowIntensity]);

  // The primitive object is a flexible way to render complex scenes from useGLTF.
  // castShadow and receiveShadow are enabled for all meshes in the model.
  return <primitive object={scene} ref={modelRef} scale={1.5} castShadow receiveShadow />;
};

// This component creates the particle stream effect.
const Particles = ({ count = 200, onParticleHit }) => {
  const meshRef = useRef(null);

  const initialPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = Math.random() * 10;      // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    return positions;
  }, [count]);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] -= 1.5 * delta; // Increased speed
        // When a particle hits the "ground" (y=0), trigger the callback.
        if (positions[i * 3 + 1] < 0) {
          onParticleHit();
          positions[i * 3 + 1] = 10; // Reset to the top
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

  // This function is called by the Particles component.
  // It sets the glow intensity, which then fades out.
  const handleParticleHit = () => {
    setGlowIntensity(1.5); // Set to a high intensity
  };

  // useFrame is used here to fade the glow effect over time.
  useFrame((_state, delta) => {
    if (glowIntensity > 0) {
      setGlowIntensity(prev => Math.max(0, prev - delta * 1.5)); // Fade out
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
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Environment preset="sunset" />

        {/* Pass the glow intensity to the Model */}
        <Model glowIntensity={glowIntensity} />

        {/* Pass the callback to the Particles */}
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

// Preload the model for a smoother loading experience
useGLTF.preload('/model.glb');

export default NewThreeScene;