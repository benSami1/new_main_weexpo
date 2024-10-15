import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { Loader, Stage } from '@react-three/drei';
import { useConvaiClient } from './hooks/useConvaiClient';
import ChatBubble from './chat/Chat';
import styles from '../components/Chatbox.module.css';

function Convai() {
  const { client } = useConvaiClient(
    'cb9a3e92-889a-11ef-abef-42010a7be011', 
    'ce220016881a7cb86f7f33b5fba815b7'
  );

  return (
    <div className={styles.widgetContainer}>
      <Loader />
      <Canvas
        shadows
        camera={{
          position: [0, 2, 3], // Camera positioned for better perspective
          fov: 10, // Narrower field of view for a natural feel
        }}
        onCreated={(state) => {
          state.camera.lookAt(0, 1.2, 0); // Focus camera on upper body
        }}
        gl={{ alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        <Stage
          preset="soft"
          contactShadow={{ opacity: 1, blur: 2 }}
          environment="sunset"
          adjustCamera={false}
        >
          {/* Slightly raise the avatar's position */}
          <group position={[0, -0.2, 0]}>
            <Experience client={client} />
          </group>
        </Stage>
      </Canvas>

      {/* Chat Bubble Container */}
      <div className={styles.chatContainer}>
        <ChatBubble client={client} />
      </div>
    </div>
  );
}

export default Convai;
