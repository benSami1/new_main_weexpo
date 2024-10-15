import React, { useEffect, useRef, useState } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useHeadTracking } from '../../components/hooks/useHeadTracking';
import { useLipsync } from '../../components/hooks/useLipsync';

export function Nina(props) {
  const { nodes, materials, scene } = useGLTF('/nina.glb')
  const { animations } = useGLTF('/animations.glb');
  const ninaRef = useRef()
  const { actions, mixer } = useAnimations(animations, ninaRef);
  const [animation, setAnimation] = useState(
    animations.find((a) => a.name === 'Idle') ? 'Idle' : animations[0].name // Check if Idle animation exists otherwise use first animation
  );
  const { client } = props;

  useEffect(() => {
    client?.convaiClient.current.sendTextChunk("");
  }, [])

  useEffect(() => {
    if (client?.isTalking) {
      setAnimation('Idle');
    } else {
      setAnimation('Idle');
    }
  }, [client?.isTalking]);
  useEffect(() => {
    actions[animation]
      .reset()
      .fadeIn(mixer.stats.actions.inUse === 0 ? 0 : 0.5)
      .play();
    return () => actions[animation]?.fadeOut(0.5);
  }, [animation]);


  useLipsync({ client, characterRef: ninaRef, nodes, scene });
  useHeadTracking({ client, nodes });

  return (
    <group ref={ninaRef} {...props} dispose={null}>
      <group scale={0.01}>
        <skinnedMesh
          geometry={nodes.CC_Base_Tongue.geometry}
          material={materials.Std_Tongue}
          skeleton={nodes.CC_Base_Tongue.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Cloth_Skirt_02_001.geometry}
          material={materials.Knee_length_skirt_001}
          skeleton={nodes.Cloth_Skirt_02_001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.High_Heels.geometry}
          material={materials.High_Heels}
          skeleton={nodes.High_Heels.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Rolled_sleeves_shirt.geometry}
          material={materials.Rolled_sleeves_shirt}
          skeleton={nodes.Rolled_sleeves_shirt.skeleton}
        />
        <primitive object={nodes.RL_BoneRoot} />
        <skinnedMesh
          geometry={nodes.CC_Base_Body_1.geometry}
          material={materials.Std_Skin_Head}
          skeleton={nodes.CC_Base_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Body_2.geometry}
          material={materials.Std_Skin_Body}
          skeleton={nodes.CC_Base_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Body_3.geometry}
          material={materials.Std_Skin_Arm}
          skeleton={nodes.CC_Base_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Body_4.geometry}
          material={materials.Std_Skin_Leg}
          skeleton={nodes.CC_Base_Body_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Body_5.geometry}
          material={materials.Std_Nails}
          skeleton={nodes.CC_Base_Body_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Body_6.geometry}
          material={materials.Std_Eyelash}
          skeleton={nodes.CC_Base_Body_6.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Eye_1.geometry}
          material={materials.Std_Eye_R_002}
          skeleton={nodes.CC_Base_Eye_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Eye_2.geometry}
          material={materials.Std_Eye_Occlusion_R_0}
          skeleton={nodes.CC_Base_Eye_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Eye_3.geometry}
          material={materials.Std_Eye_L_002}
          skeleton={nodes.CC_Base_Eye_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_TearLine_1.geometry}
          material={materials.Std_Tearline_R}
          skeleton={nodes.CC_Base_TearLine_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_TearLine_2.geometry}
          material={materials.Std_Tearline_L}
          skeleton={nodes.CC_Base_TearLine_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Teeth_1.geometry}
          material={materials.Std_Upper_Teeth}
          skeleton={nodes.CC_Base_Teeth_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.CC_Base_Teeth_2.geometry}
          material={materials.Std_Lower_Teeth}
          skeleton={nodes.CC_Base_Teeth_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hair_Long_004_1.geometry}
          material={materials.Scalp_Transparency_003}
          skeleton={nodes.Hair_Long_004_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hair_Long_004_2.geometry}
          material={materials.Hair_Transparency_003}
          skeleton={nodes.Hair_Long_004_2.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/nina.glb')
