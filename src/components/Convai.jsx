import { Canvas } from '@react-three/fiber'
import { KeyboardControls, Loader } from '@react-three/drei'

import { Experience } from '../components/Experience'
import { useConvaiClient } from '../../src/hooks/useConvaiClient'
import ChatBubble from '../components/chat/Chat'
import styles from '../components/Chatbox.module.css' // Custom CSS styles

function Convai() {
  /**
   * Add apikey and character id here
   */
  const { client } = useConvaiClient('e55f314e-887b-11ef-a0c7-42010a7be011', 'ce220016881a7cb86f7f33b5fba815b7')

  return (
    <div className={styles.widgetContainer}>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'sprint', keys: ['Shift'] },
          { name: 'jump', keys: ['Space'] }
        ]}
      >
        <Loader />
        <Canvas
          shadows
          camera={{
            position: [0, 0.8, 3],
            fov: 75
          }}
          className={styles.canvas}
        >
          <Experience client={client} />
        </Canvas>
      </KeyboardControls>

      <div className={styles.chatContainer}>
        <ChatBubble client={client} />
      </div>
    </div>
  )
}

export default Convai

