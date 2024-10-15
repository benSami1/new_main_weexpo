import * as THREE from 'three';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier';



export function Player({ lerp = THREE.MathUtils.lerp }) {
 
  const ref = useRef(null);
 
  // Use the react-three/fiber useFrame function
  useFrame((state) => {
    
  
    if (ref.current) {
      // update camera
      state.camera.position.set(
        ref.current?.translation().x,
        ref.current?.translation().y + 0.5,
        ref.current?.translation().z - 3
      );
      // movement
     
      // jumping
    
    }
  });

  return (
    <>
      <RigidBody
        canSleep={false}
        ref={ref}
        colliders={false}
        mass={1}
        type="dynamic"
        position={[0, 2, 3]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[1, 0.2]} />
      </RigidBody>
    </>
  );
}
