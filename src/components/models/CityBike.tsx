import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { useEffect } from 'react';

interface CityBikeProps {
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function CityBike({ color, ...props }: CityBikeProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials } = useGLTF('/bikes/city_bicycle.glb') as any;

  useEffect(() => {
    if (materials.BlackSmooth) {
      const mat = materials.BlackSmooth as MeshStandardMaterial;
      mat.color.set(color);
    }
  }, [color, materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments geometry={nodes.Object_2.geometry} material={materials.BlackSmooth} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.BlackRough} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.BlackSmooth} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.BlackSmooth} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.BlackSmooth} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.GreyPlastic} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.MetalWhite} />
      </group>
    </group>
  );
}

useGLTF.preload('/bikes/city_bicycle.glb');
