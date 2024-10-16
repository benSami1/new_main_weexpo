/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useLipsync } from '../../hooks/useLipsync';
import { useHeadTracking } from '../../hooks/useHeadTracking';


export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations , scene} = useGLTF('/thainina.glb');
  const { actions, mixer } = useAnimations(animations, group);

  const [animation, setAnimation] = useState(
    animations.find((a) => a.name === 'Idle') ? 'Idle' : animations[0]?.name
  );
  const { client } = props;

  // Ensure Convai client sends an initial text chunk on mount
  useEffect(() => {
    client?.convaiClient?.current?.sendTextChunk('');
  }, [client]);

  // Handle animation state based on client's talking status
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
    return () => actions[animation].fadeOut(0.5);
  }, [animation]);

  // Custom hooks for lipsync and head tracking
  useLipsync({ client, characterRef: group, nodes, scene });
  useHeadTracking({ client, nodes });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Women_V006_Motion" scale={0.01}>
          <group name="CC_Base_Body">
            <skinnedMesh
              name="CC_Base_Body_1"
              geometry={nodes.CC_Base_Body_1.geometry}
              material={materials.Std_Skin_Head}
              skeleton={nodes.CC_Base_Body_1.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_1.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_2"
              geometry={nodes.CC_Base_Body_2.geometry}
              material={materials.Std_Skin_Body}
              skeleton={nodes.CC_Base_Body_2.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_2.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_2.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_3"
              geometry={nodes.CC_Base_Body_3.geometry}
              material={materials.Std_Skin_Arm}
              skeleton={nodes.CC_Base_Body_3.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_3.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_3.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_4"
              geometry={nodes.CC_Base_Body_4.geometry}
              material={materials.Std_Skin_Leg}
              skeleton={nodes.CC_Base_Body_4.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_4.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_4.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_5"
              geometry={nodes.CC_Base_Body_5.geometry}
              material={materials.Std_Nails}
              skeleton={nodes.CC_Base_Body_5.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_5.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_5.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Body_6"
              geometry={nodes.CC_Base_Body_6.geometry}
              material={materials.Std_Eyelash}
              skeleton={nodes.CC_Base_Body_6.skeleton}
              morphTargetDictionary={nodes.CC_Base_Body_6.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Body_6.morphTargetInfluences}
            />
          </group>
          <group name="CC_Base_Eye">
            <skinnedMesh
              name="CC_Base_Eye_1"
              geometry={nodes.CC_Base_Eye_1.geometry}
              material={materials['Std_Eye_R.002']}
              skeleton={nodes.CC_Base_Eye_1.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_1.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Eye_2"
              geometry={nodes.CC_Base_Eye_2.geometry}
              material={materials['Std_Eye_Occlusion_R.001']}
              skeleton={nodes.CC_Base_Eye_2.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_2.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_2.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Eye_3"
              geometry={nodes.CC_Base_Eye_3.geometry}
              material={materials['Std_Eye_L.002']}
              skeleton={nodes.CC_Base_Eye_3.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_3.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_3.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_Eye_4"
              geometry={nodes.CC_Base_Eye_4.geometry}
              material={materials['Std_Eye_Occlusion_R.001']}
              skeleton={nodes.CC_Base_Eye_4.skeleton}
              morphTargetDictionary={nodes.CC_Base_Eye_4.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_Eye_4.morphTargetInfluences}
            />
          </group>
          <group name="CC_Base_TearLine">
            <skinnedMesh
              name="CC_Base_TearLine_1"
              geometry={nodes.CC_Base_TearLine_1.geometry}
              material={materials.Std_Tearline_R}
              skeleton={nodes.CC_Base_TearLine_1.skeleton}
              morphTargetDictionary={nodes.CC_Base_TearLine_1.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_TearLine_1.morphTargetInfluences}
            />
            <skinnedMesh
              name="CC_Base_TearLine_2"
              geometry={nodes.CC_Base_TearLine_2.geometry}
              material={materials.Std_Tearline_L}
              skeleton={nodes.CC_Base_TearLine_2.skeleton}
              morphTargetDictionary={nodes.CC_Base_TearLine_2.morphTargetDictionary}
              morphTargetInfluences={nodes.CC_Base_TearLine_2.morphTargetInfluences}
            />
          </group>
          <primitive object={nodes.CC_Base_BoneRoot} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/thainina.glb');
