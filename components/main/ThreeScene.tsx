// components/main/ThreeScene.tsx
"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function Burst() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  // Generate pillars using Fibonacci Sphere Distribution (OPTIMIZED)
  const pillars = useMemo(() => {
    const temp = [];
    const count = 35; // Reduced from 40 for better performance on mobile
    const sphereRadius = 1.0;
    const gap = 0.35;

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);

      const direction = new THREE.Vector3(x, y, z).normalize();
      const length = 1.6 + Math.random() * 2.0;

      const position = direction
        .clone()
        .multiplyScalar(sphereRadius + gap + length * 0.5);

      dummy.position.copy(position);
      dummy.lookAt(dummy.position.clone().add(direction));
      dummy.rotateX(Math.PI / 2);

      temp.push({
        position: [dummy.position.x, dummy.position.y, dummy.position.z] as [
          number,
          number,
          number,
        ],
        rotation: [dummy.rotation.x, dummy.rotation.y, dummy.rotation.z] as [
          number,
          number,
          number,
        ],
        length,
      });
    }

    return temp;
  }, []);

  // Smooth rotation animation (OPTIMIZED)
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001; // Slightly slower for smoothness
      groupRef.current.rotation.z += 0.0003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* CENTER GLOSSY SPHERE - OPTIMIZED GEOMETRY */}
      <mesh>
        <sphereGeometry args={[1.0, 128, 128]} />{" "}
        {/* Reduced from 256 for performance */}
        <meshStandardMaterial
          color={new THREE.Color("#a77cff")}
          emissive={new THREE.Color("#6a2fb3")}
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          // @ts-ignore
          clearcoat={1}
          clearcoatRoughness={0.08}
          toneMapped={true}
        />
      </mesh>

      {/* BURST PILLARS - OPTIMIZED */}
      {pillars.map((pillar, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (meshRefs.current) meshRefs.current[i] = el;
          }}
          position={pillar.position}
          rotation={pillar.rotation}
        >
          <boxGeometry args={[0.6, pillar.length, 0.2]} />

          <meshStandardMaterial
            color={new THREE.Color("#9854ff")}
            emissive={new THREE.Color("#5a1f99")}
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.25}
            // @ts-ignore
            clearcoat={1}
            clearcoatRoughness={0.1}
            toneMapped={true}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12.5], fov: 45 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        precision: "highp",
        stencil: false,
        depth: true,
      }}
      dpr={
        typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1
      } // Limit DPR to 2 for mobile
    >
      <Suspense fallback={null}>
        {/* PREMIUM VIBRANT NEON LIGHTING SETUP - OPTIMIZED */}

        {/* Moderate ambient light */}
        <ambientLight intensity={0.7} color="#ffffff" />

        {/* CYAN LIGHT: Hitting from the top-left */}
        <directionalLight position={[-8, 6, 8]} intensity={6} color="#00d9ff" />

        {/* PURPLE LIGHT: Hitting from the bottom-right */}
        <directionalLight position={[8, -6, 8]} intensity={6} color="#9d4edd" />

        {/* FRONT FILL: Purple point light for center sphere */}
        <pointLight position={[0, 0, 6]} intensity={2.5} color="#b77dff" />

        {/* CRISP RIM LIGHT: White edge definition */}
        <directionalLight position={[0, 8, -8]} intensity={2} color="#ffffff" />

        <Float speed={1} rotationIntensity={0.15} floatIntensity={0.6}>
          <Burst />
        </Float>

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
