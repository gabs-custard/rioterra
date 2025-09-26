import { Suspense, useEffect, useMemo, useRef, type MutableRefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';

interface ThreeSceneProps {
  /** When true, the particle flow becomes more energetic. */
  isInteractive: boolean;
  /** Callback invoked when the canvas registers a pointer enter event. */
  onPointerEngage?: () => void;
}

type InstancedParticle = {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  noiseOffset: number;
};

type TreeInstance = {
  position: THREE.Vector3;
  canopyHeight: number;
  trunkHeight: number;
  scale: number;
  swayOffset: number;
};

const PARTICLE_COUNT = 220;
const PARTICLE_START = new THREE.Vector3(0, 8, 0);
const TREE_COUNT = 72;

const Ground = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
    <planeGeometry args={[45, 45]} />
    <meshStandardMaterial color="#0F2A1C" roughness={0.95} metalness={0.05} />
  </mesh>
);

const TechHalo = ({ isInteractive }: { isInteractive: boolean }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;
    const targetScale = isInteractive ? 1.16 : 0.95;
    const rotationSpeed = isInteractive ? 0.9 : 0.35;

    ringRef.current.scale.setScalar(
      THREE.MathUtils.damp(ringRef.current.scale.x, targetScale, 2.2, delta)
    );
    ringRef.current.rotation.z += delta * rotationSpeed;
    const material = ringRef.current.material;
    if (!Array.isArray(material) && material instanceof THREE.MeshBasicMaterial) {
      material.opacity = THREE.MathUtils.damp(material.opacity, isInteractive ? 0.55 : 0.3, 1.6, delta);
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}
      renderOrder={1}
    >
      <ringGeometry args={[2.6, 3.05, 128]} />
      <meshBasicMaterial color="#00BFFF" transparent opacity={0.3} />
    </mesh>
  );
};

const AmbientMist = () => {
  const mistRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mistRef.current) return;
    const material = mistRef.current.material;
    if (!Array.isArray(material) && material instanceof THREE.MeshBasicMaterial) {
      material.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={mistRef} position={[0, 1.2, -2]} rotation={[-Math.PI / 2.4, 0, 0]}>
      <planeGeometry args={[18, 12, 1, 1]} />
      <meshBasicMaterial
        color="#1E5F3A"
        transparent
        opacity={0.28}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

const ForestCanopy = ({ glowRef }: { glowRef: MutableRefObject<number> }) => {
  const canopyRef = useRef<THREE.InstancedMesh>(null);
  const trunkRef = useRef<THREE.InstancedMesh>(null);
  const canopyMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const trunkMaterial = useRef<THREE.MeshStandardMaterial>(null);

  const trees = useMemo<TreeInstance[]>(() => {
    const placements: TreeInstance[] = [];
    for (let i = 0; i < TREE_COUNT; i += 1) {
      const radius = THREE.MathUtils.randFloat(2.5, 9.5);
      const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = THREE.MathUtils.randFloat(0.7, 1.45);
      const canopyHeight = THREE.MathUtils.randFloat(1.9, 2.8) * scale;
      const trunkHeight = canopyHeight * THREE.MathUtils.randFloat(0.35, 0.55);
      placements.push({
        position: new THREE.Vector3(x, 0, z),
        canopyHeight,
        trunkHeight,
        scale,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }
    return placements;
  }, []);

  const tempObject = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (!canopyRef.current || !trunkRef.current) return;

    trees.forEach((tree, index) => {
      tempObject.position.set(tree.position.x, tree.trunkHeight, tree.position.z);
      tempObject.rotation.set(-Math.PI / 2, 0, 0);
      tempObject.scale.setScalar(tree.scale);
      tempObject.updateMatrix();
      canopyRef.current?.setMatrixAt(index, tempObject.matrix);

      tempObject.position.set(tree.position.x, tree.trunkHeight / 2, tree.position.z);
      tempObject.rotation.set(0, 0, 0);
      tempObject.scale.setScalar(tree.scale);
      tempObject.updateMatrix();
      trunkRef.current?.setMatrixAt(index, tempObject.matrix);
    });

    canopyRef.current.instanceMatrix.needsUpdate = true;
    trunkRef.current.instanceMatrix.needsUpdate = true;
  }, [tempObject, trees]);

  useFrame((state, delta) => {
    if (!canopyRef.current || !trunkRef.current) return;

    trees.forEach((tree, index) => {
      const sway = Math.sin(state.clock.elapsedTime * 0.6 + tree.swayOffset) * 0.09;
      tempObject.position.set(tree.position.x, tree.trunkHeight, tree.position.z);
      tempObject.rotation.set(-Math.PI / 2 + sway * 0.3, sway * 0.5, 0);
      tempObject.scale.setScalar(tree.scale);
      tempObject.updateMatrix();
      canopyRef.current.setMatrixAt(index, tempObject.matrix);

      tempObject.position.set(tree.position.x, tree.trunkHeight / 2, tree.position.z);
      tempObject.rotation.set(sway * 0.06, sway * 0.12, sway * 0.04);
      tempObject.scale.setScalar(tree.scale);
      tempObject.updateMatrix();
      trunkRef.current.setMatrixAt(index, tempObject.matrix);
    });

    canopyRef.current.instanceMatrix.needsUpdate = true;
    trunkRef.current.instanceMatrix.needsUpdate = true;

    if (canopyMaterial.current) {
      const target = THREE.MathUtils.lerp(0.24, 1.45, THREE.MathUtils.clamp(glowRef.current, 0, 1));
      canopyMaterial.current.emissiveIntensity = THREE.MathUtils.damp(
        canopyMaterial.current.emissiveIntensity,
        target,
        2.6,
        delta
      );
    }
    if (trunkMaterial.current) {
      trunkMaterial.current.emissiveIntensity = THREE.MathUtils.damp(
        trunkMaterial.current.emissiveIntensity,
        0.2 + glowRef.current * 0.35,
        2.4,
        delta
      );
    }

    glowRef.current = Math.max(0, glowRef.current - delta * 0.35);
  });

  return (
    <group>
      <instancedMesh ref={canopyRef} args={[undefined, undefined, TREE_COUNT]} castShadow receiveShadow>
        <coneGeometry args={[1.2, 2.4, 6]} />
        <meshStandardMaterial
          ref={canopyMaterial}
          color="#1A4D2E"
          emissive="#00BFFF"
          emissiveIntensity={0.24}
          roughness={0.65}
          metalness={0.1}
        />
      </instancedMesh>
      <instancedMesh ref={trunkRef} args={[undefined, undefined, TREE_COUNT]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.22, 1.6, 6]} />
        <meshStandardMaterial
          ref={trunkMaterial}
          color="#4F3422"
          emissive="#2F1607"
          emissiveIntensity={0.18}
          roughness={0.9}
          metalness={0.05}
        />
      </instancedMesh>
    </group>
  );
};

const DataParticles = ({ glowRef, isInteractive }: { glowRef: MutableRefObject<number>; isInteractive: boolean }) => {
  const instancedRef = useRef<THREE.InstancedMesh>(null);
  const particles = useMemo(() => {
    const dummy: InstancedParticle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const position = PARTICLE_START.clone().add(
        new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(4),
          THREE.MathUtils.randFloatSpread(1.5),
          THREE.MathUtils.randFloatSpread(4)
        )
      );
      const velocity = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(0.15),
        -THREE.MathUtils.randFloat(0.6, 1.1),
        THREE.MathUtils.randFloatSpread(0.15)
      );
      dummy.push({ position, velocity, noiseOffset: Math.random() * Math.PI * 2 });
    }
    return dummy;
  }, []);

  const tempObject = useMemo(() => new THREE.Object3D(), []);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state, delta) => {
    if (!instancedRef.current) return;

    const influence = isInteractive ? 1.8 : 1;

    particles.forEach((particle, index) => {
      const wind = Math.sin(state.clock.elapsedTime * 0.6 + particle.noiseOffset) * 0.08;
      particle.position.x += (particle.velocity.x + wind * influence) * delta * 30;
      particle.position.y += particle.velocity.y * delta * 30 * influence;
      particle.position.z += (particle.velocity.z + wind * 0.4) * delta * 30;

      if (particle.position.y <= 0.5) {
        glowRef.current = 1;
        particle.position.copy(PARTICLE_START);
        particle.position.x += THREE.MathUtils.randFloatSpread(4);
        particle.position.z += THREE.MathUtils.randFloatSpread(4);
      }

      tempObject.position.copy(particle.position);
      const pulsate = 0.6 + Math.sin(state.clock.elapsedTime * 4 + particle.noiseOffset) * 0.25;
      tempObject.scale.setScalar(0.1 * pulsate);
      tempObject.updateMatrix();
      instancedRef.current.setMatrixAt(index, tempObject.matrix);
    });

    instancedRef.current.instanceMatrix.needsUpdate = true;

    if (materialRef.current) {
      const target = isInteractive ? 1.9 : 1.2;
      materialRef.current.emissiveIntensity = THREE.MathUtils.damp(
        materialRef.current.emissiveIntensity,
        target,
        3,
        delta
      );
      materialRef.current.opacity = THREE.MathUtils.damp(
        materialRef.current.opacity,
        isInteractive ? 0.95 : 0.7,
        2.8,
        delta
      );
    }
  });

  return (
    <instancedMesh ref={instancedRef} args={[undefined, undefined, PARTICLE_COUNT]}
      renderOrder={2}
    >
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        ref={materialRef}
        emissive="#00BFFF"
        emissiveIntensity={1.2}
        color="#8DDCFF"
        toneMapped={false}
        transparent
        opacity={0.75}
      />
    </instancedMesh>
  );
};

const SignalBeacons = () => {
  const beaconRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!beaconRef.current) return;
    beaconRef.current.rotation.y += delta * 0.6;
    const material = beaconRef.current.material;
    if (!Array.isArray(material) && material instanceof THREE.MeshStandardMaterial) {
      material.emissiveIntensity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={beaconRef} position={[0, 3.2, 0]}>
      <octahedronGeometry args={[0.45, 1]} />
      <meshStandardMaterial color="#00BFFF" emissive="#00BFFF" emissiveIntensity={0.8} toneMapped={false} />
    </mesh>
  );
};

const ThreeScene = ({ isInteractive, onPointerEngage }: ThreeSceneProps) => {
  const glowRef = useRef(0);

  useEffect(() => {
    if (isInteractive) {
      glowRef.current = 1;
    }
  }, [isInteractive]);

  return (
    <Canvas
      shadows
      className="h-full w-full"
      gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
      onPointerEnter={onPointerEngage}
    >
      <color attach="background" args={["#04110B"]} />
      <Suspense
        fallback={
          <Html center>
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80">
              Carregando floresta…
            </div>
          </Html>
        }
      >
        <PerspectiveCamera makeDefault position={[9, 6, 10]} fov={40} />
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[8, 12, 6]}
          intensity={1.6}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <Environment preset="forest" background={false} />
        <group position={[0, 0, 0]}>
          <Ground />
          <AmbientMist />
          <ForestCanopy glowRef={glowRef} />
          <TechHalo isInteractive={isInteractive} />
          <SignalBeacons />
          <DataParticles glowRef={glowRef} isInteractive={isInteractive} />
        </group>
        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={8}
          maxDistance={16}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(Math.PI / 2) * 0.95}
          target={[0, 1, 0]}
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
