
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Fix: Declaring intrinsic elements as any to bypass missing JSX type definitions
const PointsTag = 'points' as any;
const BufferGeometryTag = 'bufferGeometry' as any;
const BufferAttributeTag = 'bufferAttribute' as any;
const PointsMaterialTag = 'pointsMaterial' as any;
const AmbientLightTag = 'ambientLight' as any;
const PointLightTag = 'pointLight' as any;

const AnimatedShape = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(time / 2);
      mesh.current.rotation.y = Math.cos(time / 2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* Fix: Applied ref directly to Sphere from drei to avoid using the 'mesh' intrinsic element */}
      <Sphere ref={mesh} args={[1, 100, 100]} scale={1.8}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.5}
        />
      </Sphere>
    </Float>
  );
};

const Particles = ({ count = 100 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  return (
    <PointsTag>
      <BufferGeometryTag>
        <BufferAttributeTag
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </BufferGeometryTag>
      <PointsMaterialTag size={0.03} color="#60a5fa" transparent opacity={0.6} />
    </PointsTag>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <AmbientLightTag intensity={0.5} />
        <PointLightTag position={[10, 10, 10]} intensity={1} />
        <PointLightTag position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
        <AnimatedShape />
        <Particles count={200} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
