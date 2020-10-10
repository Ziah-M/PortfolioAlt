import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

const VIDEO_ID = `S0bxi3vZBgY`
const VIDEO_URL = `https://www.youtube.com/embed/${VIDEO_ID}`
const VIDEO_THUMBNAIL_URL = `http://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`

/*
        The following params are part of Youtube's JS API.

        You can view all the parameters here:
        https://developers.google.com/youtube/player_parameters?hl=en

        The ones I've included below produces the most minimal player
        as Youtube allows but feel free to edit these params as you wish.
        Be sure  to leave the mute tag as is (this is necessary
        for autoplaying the video on browsers)
        */
       const PLAYER_VARS = {
        autoplay: 1,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        playsinline: 1,
        controls: 0,
        color: 'white',
        loop: 1,
        mute: 1,
        playlist: VIDEO_ID,
      }

const VideoBackground = ({ children }) => {
  const [opacity, setOpacity] = useState(0)
  const [scale, setScale] = useState(1)
  const onPlayerReady = (event) => {
    event.target.playVideo()
    //IMPORTANT
    //do not delete the below if you want your video to work properly on all browsers
    event.target.mute()
  }

  const PLAYER_EVENTS = {
    onReady: onPlayerReady,
  }

  const opts = {
    videoId: VIDEO_ID,
    playerVars: PLAYER_VARS,
  }

  const videoEl = useRef()
  useEffect(() => {
    const wrapperWidth = window.outerWidth
    const videoWidth = videoEl.offsetWidth
    const videoHeight = videoEl.offsetHeight //this is to get around the elastic url bar on mobiles like ios...
    let wrapperHeight
    if (wrapperWidth < 1024) {
      wrapperHeight = window.innerHeight + 100
    } else {
      wrapperHeight = window.innerHeight
    }

    const newScale = Math.max(
      wrapperWidth / videoWidth,
      wrapperHeight / videoHeight,
    )

    if (newScale !== scale) {
      setScale(newScale)
    }
  })

  return (
    <FeatureVideo>
      <VideoBg></VideoBg>
      <Video
        ref={videoEl}
        style={{ opacity, transform: `translate(-50%, -50%) scale(${scale})` }}
      >
        <YouTube
          videoId={VIDEO_ID}
          opts={opts}
          onReady={(event) => onPlayerReady(event)}
          onPlay={() => setOpacity(1)}
          onEnd={() => setOpacity(0)}
          className="yt-player"
        />
      </Video>
    </FeatureVideo>
  )
}

export default VideoBackground

// this is the outer container wrapper and it contains the video. It can be any height you wish but since I am making a background today, I'm leaving it as 100vh.
const FeatureVideo = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

/* . video-bg uses the Youtube ID to get a
hi res thumbnail to serve as an image fallback.
You can change the size of this to suit your needs. */

const VideoBg = styled.div`
  background-image: url(${VIDEO_THUMBNAIL_URL});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`

const Video = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  height: 0;
  width: 100%;
  padding: 0;
  padding-bottom: 56.25%;

  .yt-player {
    height: calc(100% + 250px);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    pointer-events: none;
    margin-top: -125px;
    
  }
`

/*


  .video-wrapper ensures the iframe is always displayed at 16:9 ratio using the padding-bottom trick, while feature.video wraps around it all to set the height and clip any overflowing video (which will be scaled using JavaScript in the next step).

I also gave the iframe extra height and a negative margin to hide Youtube’s branding. You can’t get rid of the logo etc through the JS API alone, so with a bit of smoke and mirrors we hide it with CSS magic.

Also it is important to note, this code defaults to a 16:9 resolution. If the resolution of your video is not this size, you’ll need to update the padding percentage of .video-wrapper according to the proper aspect ratio.. You can click here for more examples of different aspect ratio padding percentages.

By this point the video should be autoplaying smoothly on all browsers and devices, but the aspect ratio still isn’t right. There’s just one more thing we need to do…

*/
