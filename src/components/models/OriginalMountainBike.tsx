import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { useEffect, useMemo } from 'react';

interface OriginalMountainBikeProps {
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function OriginalMountainBike({ color, ...props }: OriginalMountainBikeProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scene, materials } = useGLTF('/bikes/mountain_bike.glb') as any;
  
  // Clone the scene to avoid mutating the cached original
  const clone = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    // Apply color to the cloned material or the shared material if appropriate
    // Since materials are usually shared, we find the one used in the clone
    if (materials.Orange) {
      (materials.Orange as MeshStandardMaterial).color.set(color);
    }
  }, [color, materials]);

  return (
    <group {...props}>
      <primitive object={clone} />
    </group>
  );
}

useGLTF.preload('/bikes/mountain_bike.glb');
