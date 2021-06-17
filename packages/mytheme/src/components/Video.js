import React from "react"
import { css, styled } from "frontity"
import sample from '../images/splash2.gif'

const Video = () => {
    return (
        <Fullscreen/>
           
            
         
    )
}

const Svideo = styled.video`



position: fixed;
z-index: -1;



`

const Fullscreen = styled.div`
position: fixed;
height: 100%;

background-image: url(${sample});

z-index: 0;
background-position: center;
background-repeat: no-repeat;
background-size: cover;

height: 100%; 



`
export default Video