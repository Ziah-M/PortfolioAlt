import React from 'react'
import styled from 'styled-components'
const VIDEO_ID = '418027174'

// Doesn't work on VIMEO's free plans

const VimeoBackground = ({ children }) => (
  <VimeoWrapper>
    <VimeoIframe
      id="videobg"
      src={`https://player.vimeo.com/video/${VIDEO_ID}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=true&playsinline=true`}
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      playsinline
    ></VimeoIframe>
    <DarkOverlay />
    <Children>{children}</Children>
  </VimeoWrapper>
)

export default VimeoBackground

const VimeoWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
`

const VimeoIframe = styled.iframe`
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

const Children = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`
