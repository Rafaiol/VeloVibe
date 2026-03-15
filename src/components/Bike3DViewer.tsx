import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { MathUtils, Group } from 'three';
import OriginalMountainBike from './models/OriginalMountainBike';
import RoadBike from './models/RoadBike';
import MountainBike from './models/MountainBike';
import CarbonBike from './models/CarbonBike';

function FloatingBike({ category, color, isPreview }: { category: string; color: string; isPreview?: boolean }) {
  const bikeRef = useRef<Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (bikeRef.current) {
      bikeRef.current.rotation.z = MathUtils.lerp(bikeRef.current.rotation.z, Math.sin(t / 4) / 20, 0.1);
      bikeRef.current.rotation.x = MathUtils.lerp(bikeRef.current.rotation.x, Math.cos(t / 4) / 20, 0.1);
      bikeRef.current.position.y = MathUtils.lerp(bikeRef.current.position.y, Math.sin(t / 2) / 10, 0.1);
    }
  });

  const Model = useMemo(() => {
    switch (category) {
      case 'city': return OriginalMountainBike;
      case 'road': return RoadBike;
      case 'mountain': return MountainBike;
      case 'carbon': return CarbonBike;
      case 'e-bike': return MountainBike;
      default: return MountainBike;
    }
  }, [category]);

  const modelProps = useMemo(() => {
    // Drop down both models:
    // Preview: -0.8 -> -1.2
    // Standard: -1.2 -> -2.0
    const yOffset = isPreview ? -2.2 : -3.0;
    const scaleMultiplier = isPreview ? 1.0 : 1.5;

    switch (category) {
      case 'road': return {
        scale: 1.8 * scaleMultiplier * (isPreview ? 0.8 : 1.0),
        position: [0, yOffset, 0]
      };
      case 'city': return {
        scale: 2.2 * scaleMultiplier,
        position: [0, isPreview ? -1.0 : yOffset + 0.4, 0] // Dropped preview city bike too
      };
      case 'carbon': return {
        scale: 1.5 * scaleMultiplier,
        position: [0, yOffset, 0]
      };
      default: return {
        scale: 2.2 * scaleMultiplier,
        position: [0, yOffset, 0]
      };
    }
  }, [category, isPreview]);

  return (
    <group ref={bikeRef}>
      <Model color={color} {...modelProps} />
    </group>
  );
}

interface Bike3DViewerProps {
  color: string;
  category: string;
  isPreview?: boolean;
}

export default function Bike3DViewer({ color, category, isPreview = false }: Bike3DViewerProps) {
  // Zoom out both cameras:
  // Preview: 6.5 -> 6.0
  // Standard: 5.0 -> 6.0
  const cameraZ = isPreview ? 6.0 : 8.0;

  return (
    <div
      className="w-full relative z-10"
      style={{
        height: isPreview ? '500px' : '600px',
        minHeight: isPreview ? '400px' : '600px'
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, cameraZ], fov: 45 }}
        style={{ height: '100%', width: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          <FloatingBike category={category} color={color} isPreview={isPreview} />
          <Environment preset="city" />
          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.4}
            scale={15}
            blur={2}
            far={4.5}
          />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-xs text-white/50 uppercase tracking-widest font-medium mt-40">
            {isPreview ? 'Drag to rotate • Scroll to zoom' : 'Interactive 3D View'}
          </p>
        </div>
      </div>
    </div>
  );
}
