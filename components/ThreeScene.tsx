// components/ThreeScene.tsx
"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function Burst() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate 40 pillars in a perfect spherical burst pattern
  const pillars = useMemo(() => {
    const temp = [];
    const count = 40;
    const radius = 3.5;

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere algorithm for perfect distribution
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const theta = Math.acos(2 * (i / count) - 1);
      const phi = (2 * Math.PI * i) / goldenRatio;

      // Position on sphere surface
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      // Direction vector (normalized position)
      const direction = new THREE.Vector3(x, y, z).normalize();

      // Place pillar at distance from center, pointing outward
      const distance = 1.8;
      const position = direction.multiplyScalar(distance);

      // Rotation so the pillar points outward from center
      const quaternion = new THREE.Quaternion();
      quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
      const euler = new THREE.Euler().setFromQuaternion(quaternion);

      temp.push({
        position: [position.x, position.y, position.z],
        rotation: [euler.x, euler.y, euler.z],
        hue: (i / count) * 0.3, // Purple to pink hues
      });
    }
    return temp;
  }, []);

  // Smooth rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.z += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* CENTER GLOSSY SPHERE */}
      <mesh>
        <sphereGeometry args={[0.85, 128, 128]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={1}
          roughness={0.15}
          emissive="#3d0066"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* BURST PILLARS - Clean rectangular blocks pointing outward */}
      {pillars.map((pillar, i) => (
        <mesh
          key={i}
          position={pillar.position as [number, number, number]}
          rotation={pillar.rotation as [number, number, number]}
          scale={[0.6, 0.6, 2.2]}
        >
          {/* Clean rectangular pillar geometry */}
          <boxGeometry args={[0.35, 0.35, 2]} />

          {/* Purple gradient material with glow */}
          <meshStandardMaterial
            color={new THREE.Color().setHSL(
              0.75 + pillar.hue * 0.15,
              0.95,
              0.55,
            )}
            emissive={new THREE.Color().setHSL(
              0.75 + pillar.hue * 0.15,
              0.95,
              0.45,
            )}
            emissiveIntensity={0.9}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.5], fov: 50 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* PROFESSIONAL LIGHTING SETUP */}
        <ambientLight intensity={0.8} />

        {/* Key light - Cyan */}
        <directionalLight
          position={[8, 6, 4]}
          intensity={2.5}
          color="#00c2ff"
        />

        {/* Fill light - Purple */}
        <directionalLight
          position={[-8, -4, -6]}
          intensity={2}
          color="#a652ff"
        />

        {/* Core point light */}
        <pointLight position={[0, 0, 0]} intensity={1.2} color="#6b0099" />

        {/* SMOOTH FLOATING & ROTATION */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
          <Burst />
        </Float>

        {/* CAMERA CONTROLS - Auto rotating, user can drag */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
        />
      </Suspense>
    </Canvas>
  );
}
