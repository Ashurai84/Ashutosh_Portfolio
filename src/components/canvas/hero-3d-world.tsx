import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Sphere, MeshDistortMaterial, Ring, Cylinder, Preload } from "@react-three/drei";
import * as THREE from "three";
import { ExternalLink, Code2, Brain, Rocket, BookOpen, Sparkles } from "lucide-react";

// Laser Connection Cables with smooth curved arc and soft glow
const LaserCable = ({
  start,
  end,
  color,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}) => {
  const points = useMemo(() => {
    const p1 = new THREE.Vector3(...start);
    const p2 = new THREE.Vector3(...end);
    const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
    mid.y += 0.2; // Elegant upward arc
    const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
    return curve.getPoints(24);
  }, [start, end]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  const lineObject = useMemo(() => {
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.45, linewidth: 1.5 });
    return new THREE.Line(lineGeometry, mat);
  }, [lineGeometry, color]);

  return <primitive object={lineObject} />;
};

// Pedestal & 3D Node Component with generous orbit radius to avoid collisions
const CyberPedestalNode = ({
  title,
  subtitle,
  icon,
  accent,
  position,
  nodeType,
  index,
}: {
  title: string;
  subtitle: string;
  icon: string;
  accent: string;
  position: [number, number, number];
  nodeType: "code" | "ai" | "product" | "learning";
  index: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.3 + index * 0.8) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Laser Connection to Central Hub [0, 0, 0] */}
      <LaserCable start={[0, 0, 0]} end={[-position[0], -position[1] + 0.05, -position[2]]} color={accent} />

      {/* Glowing Cyber Base Pedestal */}
      <mesh position={[0, -0.14, 0]}>
        <cylinderGeometry args={[0.24, 0.3, 0.07, 24]} />
        <meshStandardMaterial color="#060919" roughness={0.3} metalness={0.8} />
      </mesh>

      <mesh position={[0, -0.09, 0]}>
        <cylinderGeometry args={[0.2, 0.24, 0.02, 24]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.6} />
      </mesh>

      {/* Floating 3D Geometric Object */}
      <group
        position={[0, 0.1, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.18 : 1}
      >
        {nodeType === "code" && (
          <mesh rotation={[0.2, 0.3, 0]}>
            <boxGeometry args={[0.26, 0.18, 0.05]} />
            <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.6} roughness={0.2} />
          </mesh>
        )}

        {nodeType === "ai" && (
          <mesh>
            <icosahedronGeometry args={[0.16, 1]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.85} wireframe />
          </mesh>
        )}

        {nodeType === "product" && (
          <mesh rotation={[0.1, -0.3, 0]}>
            <boxGeometry args={[0.25, 0.16, 0.05]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.6} roughness={0.1} />
          </mesh>
        )}

        {nodeType === "learning" && (
          <mesh rotation={[0.4, 0.2, 0]}>
            <boxGeometry args={[0.18, 0.22, 0.05]} />
            <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={0.6} />
          </mesh>
        )}
      </group>

      {/* HTML Overlay Label - Generous spacing, zero text collision */}
      <Html distanceFactor={6.8} position={[0, -0.32, 0]} center zIndexRange={[1, 10]}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`pointer-events-auto transition-all duration-300 transform ${
            hovered ? "scale-105" : "scale-95"
          } px-3 py-1.5 rounded-xl backdrop-blur-xl bg-[#060919]/95 border shadow-lg flex flex-col items-center whitespace-nowrap text-center select-none cursor-pointer`}
          style={{ borderColor: `${accent}70`, boxShadow: `0 0 12px ${accent}30` }}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-[11px]">{icon}</span>
            <span className="text-[10px] font-black tracking-wider" style={{ color: accent }}>
              {title}
            </span>
          </div>
          <span className="text-[8px] text-slate-300 font-medium">
            {subtitle}
          </span>
        </div>
      </Html>
    </group>
  );
};

// Central 3D Platform with Clean Holographic Core and Zero-Mesh-Clipping Badge
const CentralAvatarPlatform = () => {
  const centralGroup = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (centralGroup.current) {
      centralGroup.current.position.y = -0.05 + Math.sin(state.clock.elapsedTime * 1.2) * 0.035;
    }
    if (ring1.current) {
      ring1.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
    if (ring2.current) {
      ring2.current.rotation.z = -state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <group ref={centralGroup} position={[0, -0.05, 0]}>
      {/* Lower Platform Base - Dropped lower so it never clips through text */}
      <mesh position={[0, -0.58, 0]}>
        <cylinderGeometry args={[0.7, 0.8, 0.1, 36]} />
        <meshStandardMaterial color="#050814" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Glowing Cyan Edge Rim */}
      <mesh position={[0, -0.52, 0]}>
        <cylinderGeometry args={[0.64, 0.68, 0.02, 36]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.8} />
      </mesh>

      {/* Outer Rotating Cyber Rings */}
      <mesh ref={ring1} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -0.02, 0]}>
        <torusGeometry args={[0.56, 0.015, 16, 48]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.65} />
      </mesh>

      <mesh ref={ring2} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, 0.02, 0]}>
        <torusGeometry args={[0.45, 0.011, 16, 48]} />
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.75} />
      </mesh>

      {/* Holographic Developer Avatar Core Sphere */}
      <Sphere args={[0.28, 32, 32]} position={[0, 0.12, 0]}>
        <MeshDistortMaterial
          color="#060919"
          emissive="#38bdf8"
          emissiveIntensity={0.65}
          roughness={0.1}
          metalness={0.9}
          distort={0.18}
          speed={2}
        />
      </Sphere>

      {/* Neon ASHUTOSH Badge - Positioned clearly in front with zero 3D collision */}
      <Html distanceFactor={6.8} position={[0, -0.42, 0.45]} center zIndexRange={[80, 100]}>
        <div className="px-4 py-2 rounded-2xl bg-[#060919]/98 border border-cyan-400 shadow-[0_0_24px_rgba(0,240,255,0.7)] text-center select-none whitespace-nowrap backdrop-blur-md">
          <p className="text-[13px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-400 leading-tight">
            ASHUTOSH
          </p>
          <p className="text-[8px] font-mono font-bold uppercase tracking-wider text-cyan-300 mt-0.5">
            FOUNDER • AI • ENGINEER
          </p>
        </div>
      </Html>
    </group>
  );
};

// Floating PostAura Glass Card
const FloatingPostAuraGlassWindow = () => {
  const [hovered, setHovered] = useState(false);
  const panelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (panelRef.current) {
      panelRef.current.position.y = 0.85 + Math.sin(state.clock.elapsedTime * 1.5 + 1) * 0.04;
    }
  });

  return (
    <group ref={panelRef} position={[1.3, 0.85, 0.1]}>
      {/* Laser connection back to center */}
      <LaserCable start={[0, 0, 0]} end={[-1.3, -0.85, -0.1]} color="#ec4899" />

      <Html distanceFactor={6.8} center zIndexRange={[20, 30]}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`pointer-events-auto transition-all duration-300 transform ${
            hovered ? "scale-105" : "scale-100"
          } w-[140px] p-2.5 rounded-2xl bg-gradient-to-br from-[#1c0c2a]/95 via-[#0b1120]/90 to-[#120724]/95 border border-pink-500/60 shadow-[0_0_18px_rgba(236,72,153,0.3)] backdrop-blur-2xl text-left select-none`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-1 border-b border-pink-500/30">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
              <span className="text-[10px] font-black text-white tracking-wide">PostAura</span>
            </div>
            <span className="text-[7.5px] px-1.5 py-0.2 rounded-full bg-pink-500/20 text-pink-300 font-mono">Live</span>
          </div>

          <p className="text-[8.5px] text-pink-300 font-medium mt-1 leading-tight">
            AI LinkedIn Workspace
          </p>

          {/* Action Button */}
          <div className="mt-2 pt-1 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-[7.5px] text-slate-400">postaura.dev</span>
            <a
              href="https://postaura.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-[8px] font-bold text-black bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-300 hover:to-rose-300 px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm transition"
            >
              <span>Visit</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </Html>
    </group>
  );
};

// Atmospheric subtle particle field
const AtmosphericDepthParticles = () => {
  const count = 55;
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#ec4899"),
      new THREE.Color("#f97316"),
      new THREE.Color("#eab308"),
      new THREE.Color("#10b981"),
      new THREE.Color("#00f0ff"),
      new THREE.Color("#a855f7"),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const c = palette[i % palette.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.55} sizeAttenuation />
    </points>
  );
};

// Main 3D Orbit Constellation Scene
const CyberLabScene = () => {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[8, 8, 8]} intensity={1.3} />
      <pointLight position={[-8, -8, -8]} intensity={0.6} color="#ec4899" />
      <pointLight position={[0, 5, 4]} intensity={1.2} color="#00f0ff" />

      {/* Atmospheric Particles */}
      <AtmosphericDepthParticles />

      {/* Central Hub with ASHUTOSH Badge */}
      <CentralAvatarPlatform />

      {/* Floating 3D PostAura Glass Window */}
      <FloatingPostAuraGlassWindow />

      {/* 1. AI (Top Center) - Spaced well above core */}
      <CyberPedestalNode
        title="AI SYSTEMS"
        subtitle="Agentic workflows & LLMs"
        icon="🧠"
        accent="#a855f7"
        position={[0, 1.35, -0.15]}
        nodeType="ai"
        index={0}
      />

      {/* 2. CODE (Far Left) - Generous 50px+ visual gap from central badge */}
      <CyberPedestalNode
        title="CODE"
        subtitle="Clean architecture"
        icon="</>"
        accent="#f97316"
        position={[-1.5, 0.15, -0.1]}
        nodeType="code"
        index={1}
      />

      {/* 3. PRODUCT (Bottom Left) - Far below central badge */}
      <CyberPedestalNode
        title="PRODUCT"
        subtitle="Products people love"
        icon="🚀"
        accent="#00f0ff"
        position={[-1.2, -1.1, 0.05]}
        nodeType="product"
        index={2}
      />

      {/* 4. LEARNING (Bottom Right) - Far below central badge */}
      <CyberPedestalNode
        title="LEARNING"
        subtitle="Continuous growth"
        icon="📖"
        accent="#eab308"
        position={[1.2, -1.1, 0.05]}
        nodeType="learning"
        index={3}
      />
    </>
  );
};

export const Hero3DWorld: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] relative overflow-hidden flex items-center justify-center pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0.05, 5.4], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <CyberLabScene />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Hero3DWorld;
