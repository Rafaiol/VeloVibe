import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface BikeModelProps {
  rotation: number;
  color: string;
}

function BikeModel({ rotation, color }: BikeModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (rotation * Math.PI) / 180,
        0.1
      );
    }
  });

  // Create a stylized bike representation using basic geometries
  const frameColor = color === '#1A1A1A' ? '#2a2a2a' : color === '#F97316' ? '#f97316' : '#c0c0c0';
  
  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Main Frame - Diamond shape */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.4]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Top Tube */}
      <mesh position={[0.3, 1.3, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.035, 0.035, 1]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Down Tube */}
      <mesh position={[0.2, 0.6, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.04, 0.04, 1.1]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Seat Tube */}
      <mesh position={[-0.2, 0.9, 0]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.035, 0.035, 1]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Chain Stays */}
      <mesh position={[-0.4, 0.3, 0.08]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.025, 0.025, 0.6]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.4, 0.3, -0.08]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.025, 0.025, 0.6]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Seat Stays */}
      <mesh position={[-0.45, 0.7, 0.06]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.7]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.45, 0.7, -0.06]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.02, 0.02, 0.7]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Front Fork */}
      <mesh position={[0.65, 0.6, 0]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.03, 0.025, 1]} />
        <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Handlebars */}
      <mesh position={[0.7, 1.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Seat */}
      <mesh position={[-0.25, 1.45, 0]}>
        <boxGeometry args={[0.25, 0.08, 0.15]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Seat Post */}
      <mesh position={[-0.25, 1.35, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2]} />
        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Front Wheel */}
      <group position={[0.85, 0.35, 0]}>
        {/* Rim */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.32, 0.015, 8, 32]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Tire */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.33, 0.025, 8, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
        {/* Spokes */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
            <cylinderGeometry args={[0.002, 0.002, 0.6]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} />
          </mesh>
        ))}
        {/* Hub */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.08]} />
          <meshStandardMaterial color="#555" metalness={0.9} />
        </mesh>
      </group>
      
      {/* Rear Wheel */}
      <group position={[-0.65, 0.35, 0]}>
        {/* Rim */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.32, 0.015, 8, 32]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Tire */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.33, 0.025, 8, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
        {/* Spokes */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
            <cylinderGeometry args={[0.002, 0.002, 0.6]} />
            <meshStandardMaterial color="#c0c0c0" metalness={0.9} />
          </mesh>
        ))}
        {/* Hub */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.08]} />
          <meshStandardMaterial color="#555" metalness={0.9} />
        </mesh>
        {/* Cassette */}
        <mesh position={[0.02, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.04]} />
          <meshStandardMaterial color="#888" metalness={0.9} />
        </mesh>
      </group>
      
      {/* Crankset */}
      <group position={[0.05, 0.35, 0.06]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02]} />
          <meshStandardMaterial color="#888" metalness={0.9} />
        </mesh>
        <mesh position={[0, -0.08, 0.04]}>
          <cylinderGeometry args={[0.015, 0.015, 0.16]} />
          <meshStandardMaterial color="#888" metalness={0.9} />
        </mesh>
        <mesh position={[0, -0.16, 0.08]}>
          <boxGeometry args={[0.08, 0.03, 0.03]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
      </group>
      
      {/* Chain */}
      <mesh position={[-0.3, 0.32, 0.06]}>
        <boxGeometry args={[0.7, 0.01, 0.005]} />
        <meshStandardMaterial color="#555" metalness={0.8} />
      </mesh>
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
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 1, 3.5], fov: 45 }}
        className="bg-transparent"
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[5, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        
        <BikeModel rotation={rotation} color={color} />
        
        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.4}
          scale={3}
          blur={2}
          far={1}
        />
        
        <Environment preset="studio" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate={!isDragging}
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Rotation Slider */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-6">
        <div className="bg-dark-gray/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4">
          <button
            onClick={() => setRotation((prev) => prev - 45)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange transition-colors"
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
              className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 text-xs">
              ↕
            </div>
          </div>
          
          <button
            onClick={() => setRotation((prev) => prev + 45)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange transition-colors"
          >
            →
          </button>
        </div>
        
        <div className="text-center mt-2">
          <span className="text-white/40 text-xs">{rotation.toFixed(1)}°</span>
        </div>
      </div>
    </div>
  );
}
