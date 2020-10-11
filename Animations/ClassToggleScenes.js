import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'

const ClassToggleScenes = ({ children }) => (
  <>
    <Scene
      duration={400}
      triggerHook={0.6}
      triggerElement="#about-paragraph"
      classToggle={['.about-section', 'visible']}
    >
      <></>
    </Scene>
    <Scene
      duration="60%"
      triggerHook={0.6}
      triggerElement="#skill-one"
      classToggle={['#skill-one', 'visible']}
      indicators
    >
      <>{children}</>
    </Scene>
  </>
)

export default ClassToggleScenes
