import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { MeshStandardMaterial } from 'three'

interface CarbonBikeProps {
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function CarbonBike({ color, ...props }: CarbonBikeProps) {
  const group = React.useRef<Group>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scene, animations } = useGLTF('/bikes/carbon_frame_bike.glb') as any
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { nodes, materials } = useGraph(clone) as any
  useAnimations(animations, group)

  React.useEffect(() => {
    if (materials.Rahmen) {
      (materials.Rahmen as MeshStandardMaterial).color.set(color);
    }
  }, [color, materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="CarbonFrameBike_0">
                <group name="Bike_1" position={[-0.566, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Rahmen_2">
                    <group name="Rahmen_3" position={[0.521, 0, 0.747]}>
                      <group name="Federachse_4" position={[0.159, 0, -0.198]}>
                        <group name="RadHinten_5" position={[0.485, 0, -0.215]}>
                          <group name="ZB_HR_6">
                            <group name="Bremsscheibe_Hope_200mm_7" position={[0, -0.062, 0]} rotation={[Math.PI, 0.579, 0]}>
                              <group name="Bremsscheibe_Hope_200mm_113644_10">
                                <group name="Shape_6353_11">
                                  <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Bremskloetze} />
                                </group>
                              </group>
                              <group name="Bremsscheibe_Hope_200mm_133906_12">
                                <group name="Shape_6485_13">
                                  <mesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Bremsscheibe_Hope_200mm_139752_14">
                                <group name="Shape_6309_15">
                                  <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Bremsscheibe_Hope_200mm_139781_16">
                                <group name="Shape_6397_17">
                                  <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Bremsscheibe_Hope_200mm_139810_18">
                                <group name="Shape_6177_19">
                                  <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Bremsscheibe_Hope_200mm_139839_20">
                                <group name="Shape_6265_21">
                                  <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Bremsscheibe_Hope_200mm_139868_22">
                                <group name="Shape_6221_23">
                                  <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Bremsscheibe_Hope_200mm_4431_8">
                                <group name="Shape_6441_9">
                                  <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Bremsscheiben} />
                                </group>
                              </group>
                            </group>
                            <group name="Felge_507x46_32Loch_Kabra_24" rotation={[0, 0.098, 0]}>
                              <group name="Felge_507x46_32Loch_Kabra_23315_25">
                                <group name="Shape_10432_26">
                                  <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.FelgeInnen} />
                                </group>
                              </group>
                            </group>
                            <group name="HR_Nabe_Tune_Kong_MK_150mm_27">
                              <group name="HR_Nabe_Tune_Kong_MK_150mm_4921_28">
                                <group name="Shape_10317_29">
                                  <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Rahmen} />
                                </group>
                              </group>
                              <group name="HR_Nabe_Tune_Kong_MK_150mm_66801_30">
                                <group name="Shape_10361_31">
                                  <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Sattel} />
                                </group>
                              </group>
                            </group>
                            <group name="HR_Ritzelpaket_SRAM_X01_Eagle_32" position={[0, 0.007, 0]}>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_736_Ritzel_42Z_33">
                                <group name="Shape_10150_34">
                                  <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_1611_Ritzel_36Z_35">
                                <group name="Shape_9842_36">
                                  <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_2386_Ritzel_32Z_37">
                                <group name="Shape_9974_38">
                                  <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_3097_Ritzel_28Z_39">
                                <group name="Shape_9798_40">
                                  <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_3744_Ritzel_24Z_41">
                                <group name="Shape_9886_42">
                                  <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_4327_Ritzel_21Z_43">
                                <group name="Shape_10238_44">
                                  <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_4862_Ritzel_18Z_45">
                                <group name="Shape_10194_46">
                                  <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_5349_Ritzel_16Z_47">
                                <group name="Shape_10018_48">
                                  <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_5612_Ritzel_14Z_49">
                                <group name="Shape_9930_50">
                                  <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_5843_Ritzel_12Z_51">
                                <group name="Shape_10106_52">
                                  <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_6042_Ritzel_10Z_53">
                                <group name="Shape_10062_54">
                                  <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                              <group name="HR_Ritzelpaket_SRAM_X01_Eagle_17295_Ritzel_42Z_55">
                                <group name="Shape_9754_56">
                                  <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.Getriebe} />
                                </group>
                              </group>
                            </group>
                            <group name="Reifen_507x100_Vee-Tire_186">
                              <group name="Reifen_507x100_Vee-Tire_7571_187">
                                <group name="Shape_10504_188">
                                  <mesh name="Object_279" geometry={nodes.Object_279.geometry} material={materials.Reifen} />
                                  <mesh name="Object_280" geometry={nodes.Object_280.geometry} material={materials.Reifen_innen} />
                                </group>
                              </group>
                            </group>
                            <group name="HR_Speichen_57" rotation={[0, 0.196, 0]}>
                              <group name="HR_Speichen_5673_58">
                                <group name="Shape_13215_59">
                                  <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_6967_60">
                                <group name="Shape_12203_61">
                                  <mesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17348_62">
                                <group name="Shape_10839_63">
                                  <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17349_64">
                                <group name="Shape_12687_65">
                                  <mesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17422_66">
                                <group name="Shape_13083_67">
                                  <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17423_68">
                                <group name="Shape_12951_69">
                                  <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17496_70">
                                <group name="Shape_12335_71">
                                  <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17497_72">
                                <group name="Shape_11763_73">
                                  <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17570_74">
                                <group name="Shape_12291_75">
                                  <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17571_76">
                                <group name="Shape_12511_77">
                                  <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17644_78">
                                <group name="Shape_12643_79">
                                  <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17645_80">
                                <group name="Shape_10575_81">
                                  <mesh name="Object_119" geometry={nodes.Object_119.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17718_82">
                                <group name="Shape_12863_83">
                                  <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17719_84">
                                <group name="Shape_11807_85">
                                  <mesh name="Object_125" geometry={nodes.Object_125.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17792_86">
                                <group name="Shape_13039_87">
                                  <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_17793_88">
                                <group name="Shape_10927_89">
                                  <mesh name="Object_131" geometry={nodes.Object_131.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18216_90">
                                <group name="Shape_11147_91">
                                  <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18388_92">
                                <group name="Shape_12071_93">
                                  <mesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18713_94">
                                <group name="Shape_12775_95">
                                  <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18715_96">
                                <group name="Shape_12247_97">
                                  <mesh name="Object_143" geometry={nodes.Object_143.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18788_98">
                                <group name="Shape_12907_99">
                                  <mesh name="Object_146" geometry={nodes.Object_146.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18789_100">
                                <group name="Shape_11983_101">
                                  <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18862_102">
                                <group name="Shape_11543_103">
                                  <mesh name="Object_152" geometry={nodes.Object_152.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18863_104">
                                <group name="Shape_12819_105">
                                  <mesh name="Object_155" geometry={nodes.Object_155.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18936_106">
                                <group name="Shape_10883_107">
                                  <mesh name="Object_158" geometry={nodes.Object_158.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_18937_108">
                                <group name="Shape_12555_109">
                                  <mesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_19010_110">
                                <group name="Shape_13127_111">
                                  <mesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_19011_112">
                                <group name="Shape_10619_113">
                                  <mesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_19084_114">
                                <group name="Shape_11895_115">
                                  <mesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_19085_116">
                                <group name="Shape_12467_117">
                                  <mesh name="Object_173" geometry={nodes.Object_173.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_19158_118">
                                <group name="Shape_10971_119">
                                  <mesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_19159_120">
                                <group name="Shape_11675_121">
                                  <mesh name="Object_179" geometry={nodes.Object_179.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_25777_122">
                                <group name="Shape_11235_123">
                                  <mesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_25949_124">
                                <group name="Shape_12379_125">
                                  <mesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26274_126">
                                <group name="Shape_13347_127">
                                  <mesh name="Object_188" geometry={nodes.Object_188.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26276_128">
                                <group name="Shape_11455_129">
                                  <mesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26349_130">
                                <group name="Shape_11015_131">
                                  <mesh name="Object_194" geometry={nodes.Object_194.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26350_132">
                                <group name="Shape_13171_133">
                                  <mesh name="Object_197" geometry={nodes.Object_197.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26423_134">
                                <group name="Shape_10751_135">
                                  <mesh name="Object_200" geometry={nodes.Object_200.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26424_136">
                                <group name="Shape_11191_137">
                                  <mesh name="Object_203" geometry={nodes.Object_203.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26497_138">
                                <group name="Shape_11631_139">
                                  <mesh name="Object_206" geometry={nodes.Object_206.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26498_140">
                                <group name="Shape_13303_141">
                                  <mesh name="Object_209" geometry={nodes.Object_209.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26571_142">
                                <group name="Shape_10795_143">
                                  <mesh name="Object_212" geometry={nodes.Object_212.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26572_144">
                                <group name="Shape_11367_145">
                                  <mesh name="Object_215" geometry={nodes.Object_215.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26645_146">
                                <group name="Shape_11587_147">
                                  <mesh name="Object_218" geometry={nodes.Object_218.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26646_148">
                                <group name="Shape_12115_149">
                                  <mesh name="Object_221" geometry={nodes.Object_221.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26719_150">
                                <group name="Shape_11939_151">
                                  <mesh name="Object_224" geometry={nodes.Object_224.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_26720_152">
                                <group name="Shape_11323_153">
                                  <mesh name="Object_227" geometry={nodes.Object_227.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30193_154">
                                <group name="Shape_11851_155">
                                  <mesh name="Object_230" geometry={nodes.Object_230.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30366_156">
                                <group name="Shape_12159_157">
                                  <mesh name="Object_233" geometry={nodes.Object_233.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30692_158">
                                <group name="Shape_10707_159">
                                  <mesh name="Object_236" geometry={nodes.Object_236.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30694_160">
                                <group name="Shape_11059_161">
                                  <mesh name="Object_239" geometry={nodes.Object_239.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30767_162">
                                <group name="Shape_12423_163">
                                  <mesh name="Object_242" geometry={nodes.Object_242.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30768_164">
                                <group name="Shape_11499_165">
                                  <mesh name="Object_245" geometry={nodes.Object_245.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30841_166">
                                <group name="Shape_11719_167">
                                  <mesh name="Object_248" geometry={nodes.Object_248.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30842_168">
                                <group name="Shape_11279_169">
                                  <mesh name="Object_251" geometry={nodes.Object_251.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30915_170">
                                <group name="Shape_12995_171">
                                  <mesh name="Object_254" geometry={nodes.Object_254.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30916_172">
                                <group name="Shape_12731_173">
                                  <mesh name="Object_257" geometry={nodes.Object_257.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30989_174">
                                <group name="Shape_13259_175">
                                  <mesh name="Object_260" geometry={nodes.Object_260.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_30990_176">
                                <group name="Shape_10663_177">
                                  <mesh name="Object_263" geometry={nodes.Object_263.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_31063_178">
                                <group name="Shape_12027_179">
                                  <mesh name="Object_266" geometry={nodes.Object_266.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_31064_180">
                                <group name="Shape_11103_181">
                                  <mesh name="Object_269" geometry={nodes.Object_269.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                              <group name="HR_Speichen_31137_182">
                                <group name="Shape_11411_183">
                                  <mesh name="Object_272" geometry={nodes.Object_272.geometry} material={materials.FelgenBefestigung} />
                                </group>
                              </group>
                              <group name="HR_Speichen_31138_184">
                                <group name="Shape_12599_185">
                                  <mesh name="Object_275" geometry={nodes.Object_275.geometry} material={materials.FelgenStab} />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Hauptlager_Achse_189">
                          <group name="RobertS2016_Rahmen_Hauptlager_Achse_14517_193">
                            <group name="Shape_3562_194">
                              <mesh name="Object_288" geometry={nodes.Object_288.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Hauptlager_Achse_14704_195">
                            <group name="Shape_3606_196">
                              <mesh name="Object_291" geometry={nodes.Object_291.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                          <group name="ISO_10642_M8x20_Senkkopfschraube_190" position={[0, -0.046, 0]} rotation={[0, -0.579, -Math.PI / 2]}>
                            <group name="ISO_10642_M8x20_Senkkopfschraube_717_PartBody_191">
                              <group name="Shape_4266_192">
                                <mesh name="Object_285" geometry={nodes.Object_285.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Schwinge_links_197">
                          <group name="ISO_10642_M6x40_Senkkopfschraube_198" position={[0.124, -0.062, -0.101]} rotation={[-Math.PI, -0.304, Math.PI / 2]}>
                            <group name="ISO_10642_M6x40_Senkkopfschraube_717_PartBody_199">
                              <group name="Shape_2242_200">
                                <mesh name="Object_296" geometry={nodes.Object_296.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                          </group>
                          <group name="ISO_10642_M6x40_Senkkopfschraube_1_201" position={[0.139, -0.062, -0.063]} rotation={[0, 0, -Math.PI / 2]}>
                            <group name="ISO_10642_M6x40_Senkkopfschraube_717_PartBody_1_202">
                              <group name="Shape_2242_1_203">
                                <mesh name="Object_300" geometry={nodes.Object_300.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                          </group>
                          <group name="Magura_MT7_204" position={[0.373, -0.069, -0.212]} rotation={[0, 0.82, Math.PI]}>
                            <group name="Magura_MT7_90781_205">
                              <group name="Shape_4185_206">
                                <mesh name="Object_304" geometry={nodes.Object_304.geometry} material={materials.MetalMedGloss} />
                              </group>
                            </group>
                            <group name="Magura_MT7_90799_207">
                              <group name="Shape_4053_208">
                                <mesh name="Object_307" geometry={nodes.Object_307.geometry} material={materials.MetalMedGloss} />
                              </group>
                            </group>
                            <group name="Magura_MT7_97647_211">
                              <group name="Shape_4097_212">
                                <mesh name="Object_313" geometry={nodes.Object_313.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                            <group name="Magura_MT7_90817_209">
                              <group name="Shape_4141_210">
                                <mesh name="Object_310" geometry={nodes.Object_310.geometry} material={materials.Bremskloetze} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_HR-Aufnahme_li_au_213" position={[-0.68, 0, -0.19]}>
                            <group name="RobertS2016_Rahmen_HR-Aufnahme_li_au_880_214">
                              <group name="Shape_1765_215">
                                <mesh name="Object_317" geometry={nodes.Object_317.geometry} material={materials.Rahmen} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_HR-Aufnahme_li_in_216" position={[-0.68, 0, -0.19]}>
                            <group name="RobertS2016_Rahmen_HR-Aufnahme_li_in_880_217">
                              <group name="Shape_1695_218">
                                <mesh name="Object_321" geometry={nodes.Object_321.geometry} material={materials.Rahmen} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Schwinge_links_837_219" position={[-0.68, 0, -0.19]}>
                            <group name="Shape_3482_220">
                              <mesh name="Object_324" geometry={nodes.Object_324.geometry} material={materials.Carbon} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Schwinge_rechts_221">
                          <group name="ISO_10642_M6x40_Senkkopfschraube_2_222" position={[0.139, 0.062, -0.063]} rotation={[0, 0, Math.PI / 2]}>
                            <group name="ISO_10642_M6x40_Senkkopfschraube_717_PartBody_2_223">
                              <group name="Shape_2242_2_224">
                                <mesh name="Object_329" geometry={nodes.Object_329.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                          </group>
                          <group name="ISO_10642_M6x40_Senkkopfschraube_3_225" position={[0.124, 0.062, -0.101]} rotation={[0, -0.085, Math.PI / 2]}>
                            <group name="ISO_10642_M6x40_Senkkopfschraube_717_PartBody_3_226">
                              <group name="Shape_2242_3_227">
                                <mesh name="Object_333" geometry={nodes.Object_333.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Schaltwerkauge_231" position={[-0.1, 0, -0.19]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                            <group name="RobertS2016_Rahmen_Schaltwerkauge_1207_232">
                              <group name="Shape_3973_233">
                                <mesh name="Object_341" geometry={nodes.Object_341.geometry} material={materials.Rahmen} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Schwinge_Verbinder_Fraesteil_20160816_53685_251" position={[-0.366, 0, -0.593]}>
                            <group name="Daempfer_Cane-Creek_DB_200-57_252" position={[0.504, -0.007, 0.53]} rotation={[-Math.PI, -0.076, -Math.PI]}>
                              <group name="Daempfer_Cane-Creek_DB_200-57_142697_256" position={[0.463, 0.007, 0.566]}>
                                <group name="Shape_1085_257">
                                  <mesh name="Object_371" geometry={nodes.Object_371.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Daempfer_Cane-Creek_DB_200-57_144693_258" position={[0.463, 0.007, 0.566]}>
                                <group name="Shape_1129_259">
                                  <mesh name="Object_374" geometry={nodes.Object_374.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                              <group name="Daempfer_Cane-Creek_DB_200-57_149572_260" position={[0.463, 0.007, 0.566]}>
                                <group name="Shape_997_261">
                                  <mesh name="Object_377" geometry={nodes.Object_377.geometry} material={materials.Rahmen} />
                                </group>
                              </group>
                              <group name="Daempfer_Cane-Creek_DB_200-57_149573_262" position={[0.463, 0.007, 0.566]}>
                                <group name="Shape_909_263">
                                  <mesh name="Object_380" geometry={nodes.Object_380.geometry} material={materials.Rahmen} />
                                </group>
                              </group>
                              <group name="Daempfer_Cane-Creek_DB_200-57_83584_253" position={[0.463, 0.007, 0.566]}>
                                <group name="Shape_813_254">
                                  <mesh name="Object_366" geometry={nodes.Object_366.geometry} material={materials.MetalHighGloss} />
                                </group>
                                <group name="Shape_818_255">
                                  <mesh name="Object_368" geometry={nodes.Object_368.geometry} material={materials.Feder} />
                                </group>
                              </group>
                              <group name="Daempfer_Cane-Creek_DB_200-57_154654_264" position={[0.463, 0.007, 0.566]}>
                                <group name="Shape_861_265">
                                  <mesh name="Object_383" geometry={nodes.Object_383.geometry} material={materials.Reifen} />
                                </group>
                                <group name="Shape_866_266">
                                  <mesh name="Object_385" geometry={nodes.Object_385.geometry} material={materials.Feder} />
                                </group>
                              </group>
                            </group>
                            <group name="Shape_1202_267">
                              <mesh name="Object_387" geometry={nodes.Object_387.geometry} material={materials.MetalHighGloss} />
                            </group>
                          </group>
                          <group name="Schaltwerk_268" position={[0.475, 0.077, -0.25]} rotation={[0, Math.PI / 9, Math.PI]}>
                            <group name="SOLID_269">
                              <mesh name="Object_390" geometry={nodes.Object_390.geometry} material={materials.MetalMedGloss} />
                            </group>
                            <group name="SOLID001_270">
                              <mesh name="Object_392" geometry={nodes.Object_392.geometry} material={materials.Bremse} />
                            </group>
                            <group name="SOLID002_271">
                              <mesh name="Object_394" geometry={nodes.Object_394.geometry} material={materials.MetalMedGloss} />
                            </group>
                            <group name="SOLID003_272">
                              <mesh name="Object_396" geometry={nodes.Object_396.geometry} material={materials.MetalMedGloss} />
                            </group>
                            <group name="SOLID004_273">
                              <mesh name="Object_398" geometry={nodes.Object_398.geometry} material={materials.MetalMedGloss} />
                            </group>
                            <group name="SOLID005_274">
                              <mesh name="Object_400" geometry={nodes.Object_400.geometry} material={materials.Pedale} />
                            </group>
                            <group name="SOLID006_275">
                              <mesh name="Object_402" geometry={nodes.Object_402.geometry} material={materials.MetalHighGloss} />
                            </group>
                            <group name="SOLID007_276">
                              <mesh name="Object_404" geometry={nodes.Object_404.geometry} material={materials.Getriebe} />
                            </group>
                            <group name="SOLID008_277">
                              <mesh name="Object_406" geometry={nodes.Object_406.geometry} material={materials.Getriebe} />
                            </group>
                            <group name="SOLID009_278">
                              <mesh name="Object_408" geometry={nodes.Object_408.geometry} material={materials.MetalMedGloss} />
                            </group>
                            <group name="SOLID010_279">
                              <mesh name="Object_410" geometry={nodes.Object_410.geometry} material={materials.MetalMedGloss} />
                            </group>
                            <group name="SOLID011_280">
                              <mesh name="Object_412" geometry={nodes.Object_412.geometry} material={materials.MetalHighGloss} />
                            </group>
                            <group name="SOLID012_281">
                              <mesh name="Object_414" geometry={nodes.Object_414.geometry} material={materials.MetalHighGloss} />
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_HR-Aufnahme_re_au_228" position={[-0.68, 0, -0.19]}>
                            <group name="RobertS2016_Rahmen_HR-Aufnahme_re_au_1003_229">
                              <group name="Shape_1835_230">
                                <mesh name="Object_337" geometry={nodes.Object_337.geometry} material={materials.Rahmen} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Schwinge_rechts_51279_234" position={[-0.68, 0, -0.19]}>
                            <group name="Armature_S4_235" position={[0.833, -0.052, 0.116]} rotation={[0, -0.571, Math.PI]} scale={100}>
                              <group name="GLTF_created_3">
                                <primitive object={nodes.GLTF_created_3_rootJoint} />
                                <group name="Schlauch_04_749_correction" position={[0.01, -0.001, 0.001]} rotation={[0, -0.571, -Math.PI]} scale={0.01}>
                                  <group name="Schlauch_04_749" position={[0.235, -0.246, -0.1]} rotation={[-Math.PI / 2, 0.571, 0]} scale={100} />
                                </group>
                                <skinnedMesh name="Object_359" geometry={nodes.Object_359.geometry} material={materials.Schlauch} skeleton={nodes.Object_359.skeleton} />
                              </group>
                            </group>
                            <group name="Shape_3900_250">
                              <mesh name="Object_361" geometry={nodes.Object_361.geometry} material={materials.Carbon} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Umlenkrollenhalter_Leertrum_282" position={[-0.1, 0, -0.19]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                          <group name="RobertS2016_Rahmen_Umlenkrollenhalter_Leertrum_1880_283">
                            <group name="Shape_1359_284">
                              <mesh name="Object_418" geometry={nodes.Object_418.geometry} material={materials.RotesTeil} />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Lenker_285" position={[-0.175, 0, 0.234]} rotation={[0.001, 0.436, -2.44]}>
                        <group name="Federung_286" position={[0.01, 0, -0.368]} rotation={[0, -0.045, 0]}>
                          <group name="Federgabel_967_Body4_287" position={[0, 0, -0.005]}>
                            <group name="Magura_MT7_1_288" position={[0.026, 0.054, -0.229]} rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}>
                              <group name="Magura_MT7_90781_1_289">
                                <group name="Shape_4185_1_290">
                                  <mesh name="Object_425" geometry={nodes.Object_425.geometry} material={materials.MetalMedGloss} />
                                </group>
                              </group>
                              <group name="Magura_MT7_90799_1_291">
                                <group name="Shape_4053_1_292">
                                  <mesh name="Object_428" geometry={nodes.Object_428.geometry} material={materials.MetalMedGloss} />
                                </group>
                              </group>
                              <group name="Magura_MT7_90817_1_293">
                                <group name="Shape_4141_1_294">
                                  <mesh name="Object_431" geometry={nodes.Object_431.geometry} material={materials.Bremskloetze} />
                                </group>
                              </group>
                              <group name="Magura_MT7_97647_1_295">
                                <group name="Shape_4097_1_296">
                                  <mesh name="Object_434" geometry={nodes.Object_434.geometry} material={materials.Schrauben} />
                                </group>
                              </group>
                            </group>
                            <group name="Shape_13870_297" position={[0, 0, 0.233]}>
                              <mesh name="Object_436" geometry={nodes.Object_436.geometry} material={materials.MetalMedGloss} />
                            </group>
                          </group>
                          <group name="RadVorn_298" position={[0.025, 0, -0.344]} rotation={[0, 0.383, -Math.PI]}>
                            <group name="ZB_VR_299" rotation={[0, -0.098, 0]}>
                              <group name="Bremsscheibe_Hope_200mm_1_300" position={[0, -0.047, 0]} rotation={[Math.PI, 0.611, 0]}>
                                <group name="Bremsscheibe_Hope_200mm_113644_1_303">
                                  <group name="Shape_6353_1_304">
                                    <mesh name="Object_445" geometry={nodes.Object_445.geometry} material={materials.Bremskloetze} />
                                  </group>
                                </group>
                                <group name="Bremsscheibe_Hope_200mm_133906_1_305">
                                  <group name="Shape_6485_1_306">
                                    <mesh name="Object_448" geometry={nodes.Object_448.geometry} material={materials.Schrauben} />
                                  </group>
                                </group>
                                <group name="Bremsscheibe_Hope_200mm_139752_1_307">
                                  <group name="Shape_6309_1_308">
                                    <mesh name="Object_451" geometry={nodes.Object_451.geometry} material={materials.Schrauben} />
                                  </group>
                                </group>
                                <group name="Bremsscheibe_Hope_200mm_139781_1_309">
                                  <group name="Shape_6397_1_310">
                                    <mesh name="Object_454" geometry={nodes.Object_454.geometry} material={materials.Schrauben} />
                                  </group>
                                </group>
                                <group name="Bremsscheibe_Hope_200mm_139810_1_311">
                                  <group name="Shape_6177_1_312">
                                    <mesh name="Object_457" geometry={nodes.Object_457.geometry} material={materials.Schrauben} />
                                  </group>
                                </group>
                                <group name="Bremsscheibe_Hope_200mm_139839_1_313">
                                  <group name="Shape_6265_1_314">
                                    <mesh name="Object_460" geometry={nodes.Object_460.geometry} material={materials.Schrauben} />
                                  </group>
                                </group>
                                <group name="Bremsscheibe_Hope_200mm_139868_1_315">
                                  <group name="Shape_6221_1_316">
                                    <mesh name="Object_463" geometry={nodes.Object_463.geometry} material={materials.Schrauben} />
                                  </group>
                                </group>
                                <group name="Bremsscheibe_Hope_200mm_4431_1_301">
                                  <group name="Shape_6441_1_302">
                                    <mesh name="Object_442" geometry={nodes.Object_442.geometry} material={materials.Bremsscheiben} />
                                  </group>
                                </group>
                              </group>
                              <group name="Felge_584x24_32Loch_317" position={[-0.001, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
                                <group name="Felge_584x24_32Loch_23315_318">
                                  <group name="Shape_9656_319">
                                    <mesh name="Object_467" geometry={nodes.Object_467.geometry} material={materials.FelgeInnen} />
                                  </group>
                                </group>
                              </group>
                              <group name="Reifen_584x75_320">
                                <group name="Reifen_584x75_7571_321">
                                  <group name="Shape_6556_322">
                                    <mesh name="Object_471" geometry={nodes.Object_471.geometry} material={materials.Reifen} />
                                    <mesh name="Object_472" geometry={nodes.Object_472.geometry} material={materials.Reifen_innen} />
                                  </group>
                                </group>
                              </group>
                              <group name="VR_Nabe_Tune_King_Boost_110mm_323" rotation={[0, -0.087, 0]}>
                                <group name="VR_Nabe_Tune_King_Boost_110mm_4921_324">
                                  <group name="Shape_9470_325">
                                    <mesh name="Object_476" geometry={nodes.Object_476.geometry} material={materials.Rahmen} />
                                  </group>
                                </group>
                                <group name="VR_Nabe_Tune_King_Boost_110mm_66801_326">
                                  <group name="Shape_9514_327">
                                    <mesh name="Object_479" geometry={nodes.Object_479.geometry} material={materials.Sattel} />
                                  </group>
                                </group>
                              </group>
                              <group name="VR_Speichen_328" rotation={[0, 0.098, 0]}>
                                <group name="VR_Speichen_5673_329">
                                  <group name="Shape_7375_330">
                                    <mesh name="Object_483" geometry={nodes.Object_483.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_6967_331">
                                  <group name="Shape_8255_332">
                                    <mesh name="Object_486" geometry={nodes.Object_486.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17348_333">
                                  <group name="Shape_7507_334">
                                    <mesh name="Object_489" geometry={nodes.Object_489.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17349_335">
                                  <group name="Shape_8871_336">
                                    <mesh name="Object_492" geometry={nodes.Object_492.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17422_337">
                                  <group name="Shape_6935_338">
                                    <mesh name="Object_495" geometry={nodes.Object_495.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17423_339">
                                  <group name="Shape_8607_340">
                                    <mesh name="Object_498" geometry={nodes.Object_498.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17496_341">
                                  <group name="Shape_8035_342">
                                    <mesh name="Object_501" geometry={nodes.Object_501.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17497_343">
                                  <group name="Shape_7463_344">
                                    <mesh name="Object_504" geometry={nodes.Object_504.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17570_345">
                                  <group name="Shape_8387_346">
                                    <mesh name="Object_507" geometry={nodes.Object_507.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17571_347">
                                  <group name="Shape_7243_348">
                                    <mesh name="Object_510" geometry={nodes.Object_510.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17644_349">
                                  <group name="Shape_8959_350">
                                    <mesh name="Object_513" geometry={nodes.Object_513.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17645_351">
                                  <group name="Shape_9135_352">
                                    <mesh name="Object_516" geometry={nodes.Object_516.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17718_353">
                                  <group name="Shape_7331_354">
                                    <mesh name="Object_519" geometry={nodes.Object_519.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17719_355">
                                  <group name="Shape_7683_356">
                                    <mesh name="Object_522" geometry={nodes.Object_522.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17792_357">
                                  <group name="Shape_9223_358">
                                    <mesh name="Object_525" geometry={nodes.Object_525.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_17793_359">
                                  <group name="Shape_9355_360">
                                    <mesh name="Object_528" geometry={nodes.Object_528.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18216_361">
                                  <group name="Shape_8563_362">
                                    <mesh name="Object_531" geometry={nodes.Object_531.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18388_363">
                                  <group name="Shape_8123_364">
                                    <mesh name="Object_534" geometry={nodes.Object_534.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18713_365">
                                  <group name="Shape_6759_366">
                                    <mesh name="Object_537" geometry={nodes.Object_537.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18715_367">
                                  <group name="Shape_7067_368">
                                    <mesh name="Object_540" geometry={nodes.Object_540.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18788_369">
                                  <group name="Shape_7639_370">
                                    <mesh name="Object_543" geometry={nodes.Object_543.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18789_371">
                                  <group name="Shape_8783_372">
                                    <mesh name="Object_546" geometry={nodes.Object_546.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18862_373">
                                  <group name="Shape_7287_374">
                                    <mesh name="Object_549" geometry={nodes.Object_549.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18863_375">
                                  <group name="Shape_6671_376">
                                    <mesh name="Object_552" geometry={nodes.Object_552.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18936_377">
                                  <group name="Shape_7991_378">
                                    <mesh name="Object_555" geometry={nodes.Object_555.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_18937_379">
                                  <group name="Shape_8915_380">
                                    <mesh name="Object_558" geometry={nodes.Object_558.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_19010_381">
                                  <group name="Shape_9179_382">
                                    <mesh name="Object_561" geometry={nodes.Object_561.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_19011_383">
                                  <group name="Shape_6627_384">
                                    <mesh name="Object_564" geometry={nodes.Object_564.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_19084_385">
                                  <group name="Shape_8343_386">
                                    <mesh name="Object_567" geometry={nodes.Object_567.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_19085_387">
                                  <group name="Shape_9091_388">
                                    <mesh name="Object_570" geometry={nodes.Object_570.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_19158_389">
                                  <group name="Shape_7771_390">
                                    <mesh name="Object_573" geometry={nodes.Object_573.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_19159_391">
                                  <group name="Shape_9311_392">
                                    <mesh name="Object_576" geometry={nodes.Object_576.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_25777_393">
                                  <group name="Shape_7199_394">
                                    <mesh name="Object_579" geometry={nodes.Object_579.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_25949_395">
                                  <group name="Shape_8299_396">
                                    <mesh name="Object_582" geometry={nodes.Object_582.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26274_397">
                                  <group name="Shape_9047_398">
                                    <mesh name="Object_585" geometry={nodes.Object_585.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26276_399">
                                  <group name="Shape_8079_400">
                                    <mesh name="Object_588" geometry={nodes.Object_588.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26349_401">
                                  <group name="Shape_7947_402">
                                    <mesh name="Object_591" geometry={nodes.Object_591.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26350_403">
                                  <group name="Shape_8739_404">
                                    <mesh name="Object_594" geometry={nodes.Object_594.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26423_405">
                                  <group name="Shape_6979_406">
                                    <mesh name="Object_597" geometry={nodes.Object_597.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26424_407">
                                  <group name="Shape_6891_408">
                                    <mesh name="Object_600" geometry={nodes.Object_600.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26497_409">
                                  <group name="Shape_8431_410">
                                    <mesh name="Object_603" geometry={nodes.Object_603.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26498_411">
                                  <group name="Shape_7815_412">
                                    <mesh name="Object_606" geometry={nodes.Object_606.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26571_413">
                                  <group name="Shape_7419_414">
                                    <mesh name="Object_609" geometry={nodes.Object_609.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26572_415">
                                  <group name="Shape_9399_416">
                                    <mesh name="Object_612" geometry={nodes.Object_612.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26645_417">
                                  <group name="Shape_6803_418">
                                    <mesh name="Object_615" geometry={nodes.Object_615.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26646_419">
                                  <group name="Shape_7727_420">
                                    <mesh name="Object_618" geometry={nodes.Object_618.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26719_421">
                                  <group name="Shape_8695_422">
                                    <mesh name="Object_621" geometry={nodes.Object_621.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_26720_423">
                                  <group name="Shape_7023_424">
                                    <mesh name="Object_624" geometry={nodes.Object_624.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30193_425">
                                  <group name="Shape_8211_426">
                                    <mesh name="Object_627" geometry={nodes.Object_627.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30366_427">
                                  <group name="Shape_8475_428">
                                    <mesh name="Object_630" geometry={nodes.Object_630.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30692_429">
                                  <group name="Shape_9003_430">
                                    <mesh name="Object_633" geometry={nodes.Object_633.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30694_431">
                                  <group name="Shape_6715_432">
                                    <mesh name="Object_636" geometry={nodes.Object_636.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30767_433">
                                  <group name="Shape_7859_434">
                                    <mesh name="Object_639" geometry={nodes.Object_639.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30768_435">
                                  <group name="Shape_8519_436">
                                    <mesh name="Object_642" geometry={nodes.Object_642.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30841_437">
                                  <group name="Shape_7903_438">
                                    <mesh name="Object_645" geometry={nodes.Object_645.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30842_439">
                                  <group name="Shape_7155_440">
                                    <mesh name="Object_648" geometry={nodes.Object_648.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30915_441">
                                  <group name="Shape_8167_442">
                                    <mesh name="Object_651" geometry={nodes.Object_651.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30916_443">
                                  <group name="Shape_7111_444">
                                    <mesh name="Object_654" geometry={nodes.Object_654.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30989_445">
                                  <group name="Shape_9267_446">
                                    <mesh name="Object_657" geometry={nodes.Object_657.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_30990_447">
                                  <group name="Shape_8651_448">
                                    <mesh name="Object_660" geometry={nodes.Object_660.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_31063_449">
                                  <group name="Shape_6847_450">
                                    <mesh name="Object_663" geometry={nodes.Object_663.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_31064_451">
                                  <group name="Shape_7595_452">
                                    <mesh name="Object_666" geometry={nodes.Object_666.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_31137_453">
                                  <group name="Shape_7551_454">
                                    <mesh name="Object_669" geometry={nodes.Object_669.geometry} material={materials.FelgenBefestigung} />
                                  </group>
                                </group>
                                <group name="VR_Speichen_31138_455">
                                  <group name="Shape_8827_456">
                                    <mesh name="Object_672" geometry={nodes.Object_672.geometry} material={materials.FelgenStab} />
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="Vorbau_Hope_FR_35mm_457">
                          <group name="Bremsgriff_458" position={[0.046, -0.174, 0.019]} rotation={[-3.116, -0.946, 0.169]}>
                            <group name="Bremsgriff_885_Body2_462">
                              <group name="Shape_417_463">
                                <mesh name="Object_682" geometry={nodes.Object_682.geometry} material={materials.BremsHebel} />
                              </group>
                            </group>
                            <group name="Bremsgriff_717_PartBody_1_459">
                              <group name="Shape_373_1_460">
                                <group name="Bremsschlauchm?ndung_01_461" position={[0.036, 0.002, 0]} rotation={[1.552, -0.009, 1.167]} scale={100}>
                                  <mesh name="Object_679" geometry={nodes.Object_679.geometry} material={materials.GummiDunkel} />
                                </group>
                                <mesh name="Object_677" geometry={nodes.Object_677.geometry} material={materials.Bremse} />
                              </group>
                            </group>
                          </group>
                          <group name="Bremsgriff_1_464" position={[0.046, 0.174, 0.019]} rotation={[-0.027, 0.952, 0.171]}>
                            <group name="Bremsgriff_885_Body2_1_468">
                              <group name="Shape_417_1_469">
                                <mesh name="Object_691" geometry={nodes.Object_691.geometry} material={materials.BremsHebel} />
                              </group>
                            </group>
                            <group name="Bremsgriff_717_PartBody_465">
                              <group name="Shape_373_466">
                                <group name="Bremsschlauchm?ndung_02_467" position={[0.036, 0.002, 0]} rotation={[1.604, -0.002, -1.597]} scale={100}>
                                  <mesh name="Object_688" geometry={nodes.Object_688.geometry} material={materials.GummiDunkel} />
                                </group>
                                <mesh name="Object_686" geometry={nodes.Object_686.geometry} material={materials.Bremse} />
                              </group>
                            </group>
                          </group>
                          <group name="Lenker_1_479" position={[0.035, 0, 0]} rotation={[0, 0.23, 0]}>
                            <group name="Lenker_23103_480">
                              <group name="Shape_13751_481">
                                <mesh name="Object_708" geometry={nodes.Object_708.geometry} material={materials.MetalLenker} />
                              </group>
                            </group>
                          </group>
                          <group name="Lenkergriff_482" position={[0.037, 0.261, 0.029]} rotation={[-2.692, 1.28, -0.351]}>
                            <group name="Lenkergriff_1060_483">
                              <group name="Shape_5559_1_484">
                                <mesh name="Object_712" geometry={nodes.Object_712.geometry} material={materials.GriffSeiten} />
                              </group>
                            </group>
                            <group name="Lenkergriff_1343_485">
                              <group name="Shape_5691_486">
                                <mesh name="Object_715" geometry={nodes.Object_715.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="Lenkergriff_12219_487">
                              <group name="Shape_5603_488">
                                <mesh name="Object_718" geometry={nodes.Object_718.geometry} material={materials.GriffSeiten} />
                              </group>
                            </group>
                            <group name="Lenkergriff_13166_1_489">
                              <group name="Shape_5735_490">
                                <mesh name="Object_721" geometry={nodes.Object_721.geometry} material={materials.GummiDunkel} />
                              </group>
                            </group>
                          </group>
                          <group name="Lenkergriff_1_493" position={[0.037, -0.262, 0.029]} rotation={[-0.124, -0.116, -0.099]}>
                            <group name="Lenkergriff_1060_1_494">
                              <group name="Shape_5559_495">
                                <mesh name="Object_725" geometry={nodes.Object_725.geometry} material={materials.GriffSeiten} />
                              </group>
                            </group>
                            <group name="Lenkergriff_1343_1_496">
                              <group name="Shape_5691_1_497">
                                <mesh name="Object_728" geometry={nodes.Object_728.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="Lenkergriff_12219_1_498">
                              <group name="Shape_5603_1_499">
                                <mesh name="Object_731" geometry={nodes.Object_731.geometry} material={materials.GriffSeiten} />
                              </group>
                            </group>
                            <group name="Lenkergriff_13166_500">
                              <group name="Shape_5735_1_501">
                                <mesh name="Object_734" geometry={nodes.Object_734.geometry} material={materials.GummiDunkel} />
                              </group>
                            </group>
                          </group>
                          <group name="Vorbau_Hope_FR_35mm_27679_504">
                            <group name="Shape_4758_505">
                              <mesh name="Object_737" geometry={nodes.Object_737.geometry} material={materials.MetalHighGloss} />
                            </group>
                          </group>
                          <group name="Federgabel_470" position={[0, 0, -0.14]} rotation={[0, -0.045, 0]}>
                            <group name="Federgabel_736_PartBody_471">
                              <group name="Shape_13826_472">
                                <mesh name="Object_695" geometry={nodes.Object_695.geometry} material={materials.MetalMedGloss} />
                              </group>
                            </group>
                            <group name="Federgabel_953_Body2_473">
                              <group name="Shape_13914_474">
                                <mesh name="Object_698" geometry={nodes.Object_698.geometry} material={materials.MetalHighGloss} />
                              </group>
                            </group>
                            <group name="Federgabel_960_Body2_475">
                              <group name="Shape_13958_476">
                                <mesh name="Object_701" geometry={nodes.Object_701.geometry} material={materials.MetalHighGloss} />
                              </group>
                            </group>
                            <group name="Federgabel_24173_477">
                              <group name="Shape_14002_478">
                                <mesh name="Object_704" geometry={nodes.Object_704.geometry} material={materials.Rahmen} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Sattelstange_733" position={[0.223, 0, -0.104]} rotation={[0, 0.54, 0]}>
                        <group name="Sattelstange2_736" position={[0, 0, 0.145]}>
                          <group name="Sattel_43985_737" position={[0, 0, -0.003]}>
                            <group name="Sattel_736_sattel_738" position={[-0.03, 0, 0.192]} rotation={[0, -0.48, 0]}>
                              <group name="Shape_13676_739" position={[-0.896, 0, -1.019]}>
                                <mesh name="Object_1059" geometry={nodes.Object_1059.geometry} material={materials.Sattel} />
                              </group>
                              <group name="Shape_13681_740" position={[-0.896, 0, -1.019]}>
                                <mesh name="Object_1061" geometry={nodes.Object_1061.geometry} material={materials.GummiDunkel} />
                              </group>
                            </group>
                            <group name="Sattel_24139_741" position={[-0.024, -0.025, 0.184]} rotation={[0, -0.48, 0]}>
                              <group name="Shape_13588_742" position={[-0.897, 0.025, -1.008]}>
                                <mesh name="Object_1064" geometry={nodes.Object_1064.geometry} material={materials.MetalHighGloss} />
                              </group>
                            </group>
                            <group name="Sattel_26656_743" position={[-0.024, 0.025, 0.184]} rotation={[0, -0.48, 0]}>
                              <group name="Shape_13632_744" position={[-0.897, -0.025, -1.008]}>
                                <mesh name="Object_1067" geometry={nodes.Object_1067.geometry} material={materials.MetalHighGloss} />
                              </group>
                            </group>
                            <group name="Shape_13544_745" position={[0, 0, -0.239]} rotation={[0, -0.48, 0]}>
                              <mesh name="Object_1069" geometry={nodes.Object_1069.geometry} material={materials.MetalHighGloss} />
                            </group>
                          </group>
                        </group>
                        <group name="Sattel_1879_734">
                          <group name="Shape_13500_735" rotation={[0, -0.48, 0]}>
                            <mesh name="Object_1054" geometry={nodes.Object_1054.geometry} material={materials.MetalMedGloss} />
                          </group>
                        </group>
                      </group>
                      <group name="RobertS2016_Rahmen_Hauptrahmen_506" position={[0.111, 0, -0.097]}>
                        <group name="Daempfer_Cane-Creek_DB_200-57_30305_507" position={[0.202, -0.007, 0.035]} rotation={[Math.PI, -0.076, Math.PI]}>
                          <group name="Shape_1041_508" position={[0.463, 0.007, 0.766]}>
                            <mesh name="Object_741" geometry={nodes.Object_741.geometry} material={materials.MetalHighGloss} />
                          </group>
                        </group>
                        <group name="Daempfer_Cane-Creek_DB_200-57_148918_509" position={[-0.317, 0, -0.694]} rotation={[Math.PI, -0.076, Math.PI]}>
                          <group name="Shape_953_510">
                            <mesh name="Object_744" geometry={nodes.Object_744.geometry} material={materials.Rahmen} />
                          </group>
                        </group>
                        <group name="Daempfer_Cane-Creek_DB_200-57_149470_511" position={[-0.317, 0, -0.694]} rotation={[Math.PI, -0.076, Math.PI]}>
                          <group name="Shape_769_512">
                            <mesh name="Object_747" geometry={nodes.Object_747.geometry} material={materials.Rahmen} />
                          </group>
                        </group>
                        <group name="Gummi-Metall-Element_20x15_Typ-B_513" position={[0.05, 0, -0.294]} rotation={[0, Math.PI / 3, 0]}>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1026_1_514">
                            <group name="Shape_1606_2_515">
                              <mesh name="Object_751" geometry={nodes.Object_751.geometry} material={materials.GummiDunkel} />
                            </group>
                          </group>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1412_2_516">
                            <group name="Shape_1562_1_517">
                              <mesh name="Object_754" geometry={nodes.Object_754.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1472_518">
                            <group name="Shape_1518_1_519">
                              <mesh name="Object_757" geometry={nodes.Object_757.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="Gummi-Metall-Element_20x15_Typ-B_1_520" position={[0.119, 0.02, -0.379]}>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1026_521">
                            <group name="Shape_1606_1_522">
                              <mesh name="Object_761" geometry={nodes.Object_761.geometry} material={materials.GummiDunkel} />
                            </group>
                          </group>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1412_523">
                            <group name="Shape_1562_2_524">
                              <mesh name="Object_764" geometry={nodes.Object_764.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1472_1_525">
                            <group name="Shape_1518_526">
                              <mesh name="Object_767" geometry={nodes.Object_767.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="Gummi-Metall-Element_20x15_Typ-B_2_527" position={[0.119, -0.02, -0.379]}>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1026_2_528">
                            <group name="Shape_1606_529">
                              <mesh name="Object_771" geometry={nodes.Object_771.geometry} material={materials.GummiDunkel} />
                            </group>
                          </group>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1412_1_530">
                            <group name="Shape_1562_531">
                              <mesh name="Object_774" geometry={nodes.Object_774.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                          <group name="Gummi-Metall-Element_20x15_Typ-B_1472_2_532">
                            <group name="Shape_1518_2_533">
                              <mesh name="Object_777" geometry={nodes.Object_777.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="inafag_61805-2rsr_534" position={[0.089, 0.051, -0.116]} rotation={[0, 0, Math.PI / 2]}>
                          <group name="inafag_61805-2rsr_2533_9_537">
                            <group name="Shape_2471_538">
                              <mesh name="Object_784" geometry={nodes.Object_784.geometry} material={materials.Reifen} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_3304_8_539">
                            <group name="Shape_2339_540">
                              <mesh name="Object_787" geometry={nodes.Object_787.geometry} material={materials.Reifen} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_4066_7_541">
                            <group name="Shape_2515_542">
                              <mesh name="Object_790" geometry={nodes.Object_790.geometry} material={materials.Griffe} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_4815_6_543">
                            <group name="Shape_2383_544">
                              <mesh name="Object_793" geometry={nodes.Object_793.geometry} material={materials.Griffe} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_5565_5_545">
                            <group name="Shape_2427_546">
                              <mesh name="Object_796" geometry={nodes.Object_796.geometry} material={materials.Griffe} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_6314_4_547">
                            <group name="Shape_2603_548">
                              <mesh name="Object_799" geometry={nodes.Object_799.geometry} material={materials.Griffe} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_7065_3_549">
                            <group name="Shape_2559_550">
                              <mesh name="Object_802" geometry={nodes.Object_802.geometry} material={materials.Reifen} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_7872_2_551">
                            <group name="Shape_2647_552">
                              <mesh name="Object_805" geometry={nodes.Object_805.geometry} material={materials.Griffe} />
                            </group>
                          </group>
                          <group name="inafag_61805-2rsr_2342_1_535">
                            <group name="Shape_2691_536">
                              <mesh name="Object_781" geometry={nodes.Object_781.geometry} material={materials.Griffe} />
                            </group>
                          </group>
                        </group>
                        <group name="ISO_7380_M8x50_Linsenkopfschraube_bearbeitet_553" position={[0.202, 0.021, 0.035]} rotation={[0, 0, Math.PI]}>
                          <group name="ISO_7380_M8x50_Linsenkopfschraube_bearbeitet_717_PartBody_554">
                            <group name="Shape_1284_555">
                              <mesh name="Object_809" geometry={nodes.Object_809.geometry} material={materials.Schrauben} />
                            </group>
                            <group name="Shape_1289_556">
                              <mesh name="Object_811" geometry={nodes.Object_811.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="ISO_10642_M6x12_Senkkopfschraube_557" position={[0.089, 0.061, -0.116]} rotation={[0, 0, Math.PI / 2]}>
                          <group name="ISO_10642_M6x12_Senkkopfschraube_717_PartBody_3_558">
                            <group name="Shape_1430_2_559">
                              <mesh name="Object_815" geometry={nodes.Object_815.geometry} material={materials.Schrauben} />
                            </group>
                          </group>
                        </group>
                        <group name="ISO_10642_M6x12_Senkkopfschraube_1_560" position={[0.119, -0.02, -0.383]} rotation={[-Math.PI / 2, 1.178, Math.PI / 2]}>
                          <group name="ISO_10642_M6x12_Senkkopfschraube_717_PartBody_561">
                            <group name="Shape_1430_1_562">
                              <mesh name="Object_819" geometry={nodes.Object_819.geometry} material={materials.Schrauben} />
                            </group>
                          </group>
                        </group>
                        <group name="ISO_10642_M6x12_Senkkopfschraube_2_563" position={[0.119, 0.02, -0.383]} rotation={[-Math.PI / 2, 1.178, Math.PI / 2]}>
                          <group name="ISO_10642_M6x12_Senkkopfschraube_717_PartBody_2_564">
                            <group name="Shape_1430_3_565">
                              <mesh name="Object_823" geometry={nodes.Object_823.geometry} material={materials.Schrauben} />
                            </group>
                          </group>
                        </group>
                        <group name="ISO_10642_M6x12_Senkkopfschraube_3_566" position={[0.045, 0, -0.296]} rotation={[-Math.PI, Math.PI / 6, Math.PI]}>
                          <group name="ISO_10642_M6x12_Senkkopfschraube_717_PartBody_1_567">
                            <group name="Shape_1430_568">
                              <mesh name="Object_827" geometry={nodes.Object_827.geometry} material={materials.Schrauben} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Kette_592" position={[-0.631, 0, -0.291]}>
                          <group name="RobertS2016_Kette_1210_593">
                            <group name="Shape_682_594">
                              <mesh name="Object_863" geometry={nodes.Object_863.geometry} material={materials.chain} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Daempferaufnahme_oben_595" position={[0.202, 0, 0.035]} rotation={[0, -0.579, 0]}>
                          <group name="RobertS2016_Rahmen_Daempferaufnahme_oben_868_596" position={[-0.834, 0, -0.326]}>
                            <group name="Shape_1905_597">
                              <mesh name="Object_867" geometry={nodes.Object_867.geometry} material={materials.Schrauben} />
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Daempferaufnahme_oben_978_598" position={[-0.834, 0, -0.326]}>
                            <group name="Shape_1949_599">
                              <mesh name="Object_870" geometry={nodes.Object_870.geometry} material={materials.Schrauben} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Hauptlager_Zwischenhuelse_600" position={[0.049, 0, -0.101]}>
                          <group name="RobertS2016_Rahmen_Hauptlager_Zwischenhuelse_3348_601">
                            <group name="Shape_3829_602">
                              <mesh name="Object_874" geometry={nodes.Object_874.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Logo_658" position={[-0.104, 0.036, 0.067]} rotation={[-1.542, 0.027, -2.391]}>
                          <group name="RobertS2016_Rahmen_Logo_196626_659">
                            <group name="schild_RobertS_logo_(1)_660" position={[-0.039, 0.007, 0.001]} rotation={[-0.002, 0, -0.005]}>
                              <mesh name="Object_949" geometry={nodes.Object_949.geometry} material={materials.Bike_Logo} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Logo_1_661" position={[-0.049, -0.036, 0.015]} rotation={[1.542, 0.027, -0.75]}>
                          <group name="RobertS2016_Rahmen_Logo_196626_1_662">
                            <group name="schild_RobertS_logo_(2)_663" position={[-0.037, 0.007, 0]} rotation={[-0.008, -0.002, -0.022]}>
                              <mesh name="Object_953" geometry={nodes.Object_953.geometry} material={materials.Bike_Logo} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Logo_Steuerrohr_664" position={[-0.343, 0, 0.273]} rotation={[0, -1.134, -Math.PI / 2]}>
                          <group name="RobertS2016_Rahmen_Logo_Steuerrohr_105800_665">
                            <group name="Shape_2906_666">
                              <mesh name="Object_957" geometry={nodes.Object_957.geometry} material={materials.LabelWhite} />
                            </group>
                            <group name="Shape_2911_667">
                              <mesh name="Object_959" geometry={nodes.Object_959.geometry} material={materials.LabelBlack} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Umlenkrolle_Gewindehuelse_668" position={[0.089, 0.031, -0.116]}>
                          <group name="RobertS2016_Rahmen_Umlenkrolle_Gewindehuelse_4309_669">
                            <group name="Shape_2171_670">
                              <mesh name="Object_963" geometry={nodes.Object_963.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Umlenkrolle_Kaefig_671" position={[-0.631, 0.001, -0.291]}>
                          <group name="RobertS2016_Rahmen_Umlenkrolle_672" position={[0.72, 0.054, 0.175]}>
                            <group name="RobertS2016_Rahmen_Umlenkrolle_99015_673">
                              <group name="Shape_3686_674">
                                <mesh name="Object_968" geometry={nodes.Object_968.geometry} material={materials.Getriebe} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Umlenkrolle_Kaefig_838_675">
                            <group name="Shape_2029_676">
                              <mesh name="Object_971" geometry={nodes.Object_971.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Umlenkrolle_Leertrum_677" position={[0.163, 0.057, -0.251]}>
                          <group name="inafag_626-2rs_678" position={[0, 0.001, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <group name="inafag_626-2rs_2533_9_681">
                              <group name="Shape_3348_1_682">
                                <mesh name="Object_979" geometry={nodes.Object_979.geometry} material={materials.Bremskloetze} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_3304_8_1_683">
                              <group name="Shape_3392_1_684">
                                <mesh name="Object_982" geometry={nodes.Object_982.geometry} material={materials.Reifen} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_4066_7_1_685">
                              <group name="Shape_3128_1_686">
                                <mesh name="Object_985" geometry={nodes.Object_985.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_4815_6_1_687">
                              <group name="Shape_3040_688">
                                <mesh name="Object_988" geometry={nodes.Object_988.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_5565_5_689">
                              <group name="Shape_3084_1_690">
                                <mesh name="Object_991" geometry={nodes.Object_991.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_6314_4_691">
                              <group name="Shape_3172_692">
                                <mesh name="Object_994" geometry={nodes.Object_994.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_7065_3_693">
                              <group name="Shape_3260_694">
                                <mesh name="Object_997" geometry={nodes.Object_997.geometry} material={materials.Reifen} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_7872_2_695">
                              <group name="Shape_3216_1_696">
                                <mesh name="Object_1000" geometry={nodes.Object_1000.geometry} material={materials.MetalMedGloss} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_2342_1_1_679">
                              <group name="Shape_3304_680">
                                <mesh name="Object_976" geometry={nodes.Object_976.geometry} material={materials.MetalMedGloss} />
                              </group>
                            </group>
                          </group>
                          <group name="inafag_626-2rs_1_697" position={[0, -0.007, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <group name="inafag_626-2rs_2533_9_1_700">
                              <group name="Shape_3348_701">
                                <mesh name="Object_1007" geometry={nodes.Object_1007.geometry} material={materials.Reifen} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_3304_8_702">
                              <group name="Shape_3392_703">
                                <mesh name="Object_1010" geometry={nodes.Object_1010.geometry} material={materials.Reifen} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_4066_7_704">
                              <group name="Shape_3128_705">
                                <mesh name="Object_1013" geometry={nodes.Object_1013.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_4815_6_706">
                              <group name="Shape_3040_1_707">
                                <mesh name="Object_1016" geometry={nodes.Object_1016.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_5565_5_1_708">
                              <group name="Shape_3084_709">
                                <mesh name="Object_1019" geometry={nodes.Object_1019.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_6314_4_1_710">
                              <group name="Shape_3172_1_711">
                                <mesh name="Object_1022" geometry={nodes.Object_1022.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_7065_3_1_712">
                              <group name="Shape_3260_1_713">
                                <mesh name="Object_1025" geometry={nodes.Object_1025.geometry} material={materials.Reifen} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_7872_2_1_714">
                              <group name="Shape_3216_715">
                                <mesh name="Object_1028" geometry={nodes.Object_1028.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                            <group name="inafag_626-2rs_2342_1_698">
                              <group name="Shape_3304_1_699">
                                <mesh name="Object_1004" geometry={nodes.Object_1004.geometry} material={materials.Griffe} />
                              </group>
                            </group>
                          </group>
                          <group name="RobertS2016_Rahmen_Umlenkrolle_Leertrum_6500_716">
                            <group name="Shape_2980_717">
                              <mesh name="Object_1031" geometry={nodes.Object_1031.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Unterschutzplatte_Rockman_mini_721" position={[0.105, 0, -0.344]} rotation={[Math.PI, -0.769, Math.PI]}>
                          <group name="RobertS2016_Rahmen_Unterschutzplatte_Rockman_mini_88437_722">
                            <group name="Shape_3757_723">
                              <mesh name="Object_1039" geometry={nodes.Object_1039.geometry} material={materials.Unterschutzplatte} />
                            </group>
                          </group>
                        </group>
                        <group name="Steuersatz_ob_725" position={[-0.298, 0, 0.302]} rotation={[0, 0.436, 0]}>
                          <group name="Steuersatz_ob_12402_726">
                            <group name="Shape_496_727">
                              <mesh name="Object_1043" geometry={nodes.Object_1043.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="Pedale_569" position={[0.119, 0.054, -0.319]} rotation={[Math.PI, 0.584, 0]}>
                          <group name="Kettenblatt_SRAM_directmount_26Z_570">
                            <group name="Kettenblatt_SRAM_directmount_26Z_49887_571">
                              <group name="Shape_5859_572">
                                <mesh name="Object_832" geometry={nodes.Object_832.geometry} material={materials.Getriebe} />
                              </group>
                            </group>
                          </group>
                          <group name="Kurbel_X01_DH_li_573" position={[0, 0.054, 0]} rotation={[-Math.PI, 0, Math.PI]}>
                            <group name="Pedal_Funn_Bigfoot_le_577" position={[0.165, 0.091, 0]} rotation={[0, -0.584, -Math.PI]}>
                              <group name="Pedal_Funn_Bigfoot_le_28132_578">
                                <group name="Shape_5930_579">
                                  <mesh name="Object_842" geometry={nodes.Object_842.geometry} material={materials.Pedale} />
                                </group>
                              </group>
                              <group name="Pedal_Funn_Bigfoot_le_30507_580">
                                <group name="Shape_5974_581">
                                  <mesh name="Object_845" geometry={nodes.Object_845.geometry} material={materials.Rahmen} />
                                </group>
                              </group>
                            </group>
                            <group name="Kurbel_X01_DH_li_6634_PartBody_574">
                              <group name="Shape_14199_575">
                                <mesh name="Object_836" geometry={nodes.Object_836.geometry} material={materials.MetalMedGloss} />
                              </group>
                              <group name="Shape_14204_576">
                                <mesh name="Object_838" geometry={nodes.Object_838.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                          </group>
                          <group name="Kurbel_X01_DH_re_582" position={[0, 0.052, 0]} rotation={[-Math.PI, 0, 0]}>
                            <group name="Kurbel_X01_DH_re_963_Body2_583">
                              <group name="Shape_14127_584">
                                <mesh name="Object_849" geometry={nodes.Object_849.geometry} material={materials.Schrauben} />
                              </group>
                            </group>
                            <group name="Pedal_Funn_Bigfoot_re_587" position={[0.165, 0.089, 0]} rotation={[0, 0.579, 0]}>
                              <group name="Pedal_Funn_Bigfoot_re_8287_588">
                                <group name="Shape_6045_589">
                                  <mesh name="Object_856" geometry={nodes.Object_856.geometry} material={materials.Pedale} />
                                </group>
                              </group>
                              <group name="Pedal_Funn_Bigfoot_re_25783_590">
                                <group name="Shape_6089_591">
                                  <mesh name="Object_859" geometry={nodes.Object_859.geometry} material={materials.Rahmen} />
                                </group>
                              </group>
                            </group>
                            <group name="Kurbel_X01_DH_re_6634_PartBody_585">
                              <group name="Shape_14083_586">
                                <mesh name="Object_852" geometry={nodes.Object_852.geometry} material={materials.MetalMedGloss} />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Hauptrahmen_837_603" position={[-0.631, 0, -0.291]}>
                          <group name="Armature_S1_604" position={[0.358, -0.001, 0.561]} rotation={[0, 0, Math.PI]} scale={100}>
                            <group name="GLTF_created_0">
                              <group name="Empty022_619" position={[0.001, 0.002, 0]} />
                              <group name="Empty023_620" position={[0.001, 0, 0]} />
                              <group name="Empty024_621" position={[0, -0.001, 0]} />
                              <primitive object={nodes.GLTF_created_0_rootJoint} />
                              <group name="Schlauch_01_746_correction" position={[0.004, 0, -0.009]} rotation={[0, 0, -Math.PI]} scale={0.01}>
                                <group name="Schlauch_01_746" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                              </group>
                              <skinnedMesh name="Object_898" geometry={nodes.Object_898.geometry} material={materials.Schlauch} skeleton={nodes.Object_898.skeleton} />
                            </group>
                          </group>
                          <group name="Armature_S2_622" position={[0.358, -0.001, 0.561]} rotation={[0, 0, Math.PI]} scale={100}>
                            <group name="GLTF_created_1">
                              <group name="Empty025_635" position={[0.002, -0.001, 0.001]} />
                              <group name="Empty026_636" position={[0.001, 0, 0]} />
                              <group name="Empty027_637" position={[0, 0.001, 0]} />
                              <primitive object={nodes.GLTF_created_1_rootJoint} />
                              <group name="Schlauch_02_747_correction" position={[0.004, 0, -0.009]} rotation={[0, 0, -Math.PI]} scale={0.01}>
                                <group name="Schlauch_02_747" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                              </group>
                              <skinnedMesh name="Object_919" geometry={nodes.Object_919.geometry} material={materials.Schlauch} skeleton={nodes.Object_919.skeleton} />
                            </group>
                          </group>
                          <group name="Armature_S3_638" position={[0.28, 0, 0.482]} rotation={[0, 0, -Math.PI]} scale={100}>
                            <group name="GLTF_created_2">
                              <primitive object={nodes.GLTF_created_2_rootJoint} />
                              <group name="Schlauch_03_748_correction" position={[0.003, 0, -0.008]} rotation={[0, 0, Math.PI]} scale={0.01}>
                                <group name="Schlauch_03_748" position={[0.001, -0.002, 0]} rotation={[-Math.PI / 2, 0.001, 0]} scale={100} />
                              </group>
                              <skinnedMesh name="Object_943" geometry={nodes.Object_943.geometry} material={materials.Schlauch} skeleton={nodes.Object_943.skeleton} />
                            </group>
                          </group>
                          <group name="Shape_2835_657">
                            <mesh name="Object_945" geometry={nodes.Object_945.geometry} material={materials.Carbon} />
                          </group>
                        </group>
                        <group name="RobertS2016_Rahmen_Umlenkrolle_Nabe_718" position={[0.089, 0.045, -0.116]}>
                          <group name="RobertS2016_Rahmen_Umlenkrolle_Nabe_18308_719">
                            <group name="Shape_2100_720">
                              <mesh name="Object_1035" geometry={nodes.Object_1035.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                        <group name="Steuersatz_un_728" position={[-0.344, 0, 0.203]} rotation={[0, 0.436, 0]}>
                          <group name="Steuersatz_un_7607_729">
                            <group name="Shape_611_730">
                              <mesh name="Object_1047" geometry={nodes.Object_1047.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                          <group name="Steuersatz_un_22775_731">
                            <group name="Shape_567_732">
                              <mesh name="Object_1050" geometry={nodes.Object_1050.geometry} material={materials.Rahmen} />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="Shadows_750">
                      <group name="FrontWheelShadow_751" position={[-0.03, 0.044, 0]} rotation={[Math.PI, 0, -0.673]} scale={[0.924, 0.328, 1.019]}>
                        <group name="ShadowQuad_(AR)_752">
                          <mesh name="Object_1073" geometry={nodes.Object_1073.geometry} material={materials['ShadowWheel-AR']} />
                        </group>
                      </group>
                      <group name="BackWheelShadow_753" position={[1.184, 0.001, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.916, 0.286, 1.01]}>
                        <group name="ShadowQuad_(AR)_754">
                          <mesh name="Object_1076" geometry={nodes.Object_1076.geometry} material={materials['ShadowWheel-AR']} />
                        </group>
                      </group>
                      <group name="CenterShadow_755" position={[0.542, 0.001, 0]} rotation={[-Math.PI, 0, 0]} scale={[1.865, 0.914, 1.01]}>
                        <group name="ShadowQuad_(AR)_756" position={[0, 0, 0.005]}>
                          <mesh name="Object_1079" geometry={nodes.Object_1079.geometry} material={materials['ShadowDrop-AR']} />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/bikes/carbon_frame_bike.glb');
