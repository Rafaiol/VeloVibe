import { useRef, useState, Suspense, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF } from '@react-three/drei';
import { MathUtils, Group, Mesh, MeshStandardMaterial, PCFShadowMap } from 'three';

interface BikeModelProps {
  rotation: number;
  color: string;
}

function BikeModel({ rotation, color }: BikeModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF('/bikes/mountain_bike.glb') as unknown as { scene: Group };
  
  // Deep clone scene and materials to avoid shared state across multiple viewers
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((obj) => {
      const mesh = obj as Mesh;
      if (mesh.isMesh && mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map(m => m.clone());
        } else {
          mesh.material = mesh.material.clone();
        }
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = MathUtils.lerp(
        groupRef.current.rotation.y,
        (rotation * Math.PI) / 180,
        0.1
      );
    }
  });

  // Apply the selected color
  useEffect(() => {
    clonedScene.traverse((obj) => {
      const mesh = obj as Mesh;
      if (mesh.isMesh && mesh.material) {
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach(mat => {
          if (['material', 'material_1', 'material_3', 'material_5', 'Orange'].includes(mat.name)) {
            const m = mat as MeshStandardMaterial;
            m.color.set(color);
            m.roughness = 0.3;
            m.metalness = 0.7;
            m.needsUpdate = true;
          }
        });
      }
    });
  }, [clonedScene, color]);

  return (
    <group ref={groupRef} dispose={null} position={[0, -0.8, 0]} scale={1.8}>
      <primitive object={clonedScene} />
    </group>
  );
}

interface Bike3DViewerProps {
  color: string;
}

export default function Bike3DViewer({ color }: Bike3DViewerProps) {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRotation(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] group/viewer">
      {/* 3D Canvas */}
      <Canvas
        shadows={{ type: PCFShadowMap }}
        camera={{ position: [0, 1.5, 4], fov: 40 }}
        className="bg-transparent"
        gl={{ 
          powerPreference: "high-performance",
          antialias: true,
          stencil: false,
          depth: true,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <pointLight position={[-10, 5, -10]} intensity={1} />
          
          <BikeModel rotation={rotation} color={color} />
          
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.6}
            scale={10}
            blur={2.5}
            far={1.5}
          />
          
          <Environment preset="studio" />
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            minDistance={3}
            maxDistance={6}
            autoRotate={!isDragging}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>

      {/* Rotation Slider */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-6 opacity-0 group-hover/viewer:opacity-100 transition-opacity duration-300">
        <div className="bg-charcoal/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10 shadow-2xl flex items-center gap-4">
          <button
            onClick={() => setRotation((prev) => prev - 45)}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-orange hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all"
          >
            ←
          </button>
          
          <div className="flex-1 relative" ref={sliderRef}>
            <input
              type="range"
              min="0"
              max="360"
              value={rotation}
              onChange={handleSliderChange}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-orange"
            />
          </div>
          
          <button
            onClick={() => setRotation((prev) => prev + 45)}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-orange hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all"
          >
            →
          </button>
        </div>
        
        <div className="text-center mt-3">
          <span className="text-white/30 text-[10px] tracking-widest uppercase font-medium">360° Rotational View</span>
        </div>
      </div>

      {/* Loading Indicator (simplified) */}
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-orange/20 border-t-orange rounded-full animate-spin" />
        </div>
      } />
    </div>
  );
}

useGLTF.preload('/bikes/mountain_bike.glb');
