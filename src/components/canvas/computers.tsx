import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
};

// 3D Desktop Computer Model Component
const Computers = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Ambient & Cyber Lights */}
      <hemisphereLight intensity={0.4} groundColor="#060919" />
      <pointLight position={[0, 2.5, 0]} intensity={1.8} color="#00f0ff" />
      <pointLight position={[-3, -1, -2]} intensity={1.4} color="#ec4899" />
      <pointLight position={[3, 1, 2]} intensity={1.2} color="#f59e0b" />

      <spotLight
        position={[-15, 40, 15]}
        angle={0.2}
        penumbra={1}
        intensity={2.2}
        castShadow
        shadow-mapSize={1024}
        color="#ffffff"
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.58 : 0.68}
        position={isMobile ? [0, -2.5, -1.8] : [0, -2.7, -1.2]}
        rotation={[-0.01, -0.2, -0.08]}
      />
    </mesh>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

// Error fallback UI inside 3D Canvas
class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// Computer Canvas with Enhanced 3D Orbit Controls
export const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div className="w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] relative overflow-hidden flex items-center justify-center pointer-events-auto bg-transparent">
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: [20, 3, 5], fov: 24 }}
        gl={{ preserveDrawingBuffer: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ModelErrorBoundary>
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.8}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2.3}
            />
            <Computers isMobile={isMobile} />
          </ModelErrorBoundary>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
