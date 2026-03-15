import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { useEffect } from 'react';

interface MountainBikeProps {
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function MountainBike({ color, ...props }: MountainBikeProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials } = useGLTF('/bikes/generic_mountain_bike.glb') as any;

  useEffect(() => {
    if (materials.Carro_Pintura) {
      (materials.Carro_Pintura as MeshStandardMaterial).color.set(color);
    }
  }, [color, materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Carro_Carbon} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Carro_Cromado} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Carro_Cromado} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Carro_Cromado} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Carro_Cromado} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Carro_Cromado} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Carro_Metal_Preto} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Carro_Metal_Vermelho_1} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Carro_Metal_Vermelho_2} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Carro_Pintura} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Carro_Plastico} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_51.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_55.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_57.geometry} material={materials.Carro_Pneu} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.Carro_Pneu_1} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_61.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_63.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_66.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.Carro_Roda} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_75.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_78.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_79.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_81.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_82.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_83.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_84.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_85.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_86.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_87.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_88.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_89.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_91.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_92.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_93.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_94.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_95.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_96.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_97.geometry} material={materials.Carro_Roda_1} />
        <mesh geometry={nodes.Object_98.geometry} material={materials.Carro_Vidro_preto} />
        <mesh geometry={nodes.Object_99.geometry} material={materials.FrontColor} />
      </group>
    </group>
  );
}

useGLTF.preload('/bikes/generic_mountain_bike.glb');
