import React from "react"
import { css, styled } from "frontity"
import sample from '-!file-loader!../images/splash.mp4'

const Video = () => {
    return (
        <Fullscreen>
            <Svideo className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </Svideo>
        </Fullscreen>
    )
}

const Svideo = styled.video`



position: fixed;
z-index: -1;



`

const Fullscreen = styled.div`
position: fixed;
top: 25%;
background-color: black;
z-index: 0;

width: 100%;
height: 100%; 



`
export default Video