import React, { useState } from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from './List'
import Post from './Post'
import Page from './Page'
import { Squash as Hamburger } from 'hamburger-react'
import { useSpring, animated, config, useTransition } from 'react-spring'
import Logo from '../images/logo2.png'
import shirtbg from '../images/lesgomini.jpg'
import useWindowDimensions from './useWindow'
import Video from "./Video"
import IG from "../images/ig.svg"
import KATA from "../images/kata.png"




const Video2 = () => {
    return (
        <div style={{ position: "fixed", zIndex: "-99", width: "100%", height: "100%" }}>
            <iframe frameborder="0" height="100%" width="100%"
                src="https://youtube.com/embed/IR0Ouo1zACA?autoplay=1&controls=0&showinfo=0&autohide=1">
            </iframe>
        </div>
    )
}



const Contact = () => {

    return (
        <Footer>

            <a href="mailto:prepxxx32@gmail.com">CONTACT</a>
            <br/>

            <a href="https://www.instagram.com/illkata/"><Icon src={IG} /></a><a href="https://youtube.com/channel/UCZUqU43V3G7TTI_afJVqKuQ"><Icon src={KATA} /></a>
        </Footer>
    );
}


const Root = ({ state }) => {

    const data = state.source.get(state.router.link);
    const [isOpen, setOpen] = useState(false);
    const [page, setPage] = useState("home");
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const bwfade = useSpring({ to: { filter: "saturate(100%)" }, from: { filter: "saturate(0%)" }, config: config.slow });
    const [splash, setSplash] = useState(true);

    //console.log(window.innerWidth);


    const [show, set] = useState(true)
    const transitions = useTransition(splash, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: splash,
        delay: 300,
        config: config.molasses
    })
    const pfade = useSpring({
        // padding: hovered ? "0.1vw" : "2vw", "10vw" : "6vw",
        opacity: splash ? "0%" : "100%",
        filter: splash ? "saturate(0%)" : "saturate(100%)",
        config: config.molasses
    });
    let button;
    let footer;
    if ((page == "home") || splash || isOpen) {
        footer = <Contact />;
    } else {
        footer = <></>;
    }

    if ((page == "home") || splash) {
        button = <Banner src={Logo} />;
    } else {
        button = <></>;
    }

    return (
        <>

            <Global styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                width: 100%;
               
              }
              &::-webkit-scrollbar {
                display: none;
              }
                html {
                    color: white;
                    
                    //overflow: hidden;
                    background-color: black;
                    width: 100%;
                    font-family: 'Lato', sans-serif;
                    img {
                        width: 100%;
                        height: auto;
                   
                      }
                    
                }
                `}
            />
            <Mdiv>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </Mdiv>

            {isOpen && <>

                <Menu >
                    <Simg onClick={() => setOpen(!isOpen)} src={Logo} />
                    <br />

                    <Link onClick={() => { setOpen(!isOpen); setPage("home"); setSplash(false) }} link="/">HOME</Link>
                    <br />
                    <Link onClick={() => { setOpen(!isOpen); setPage("blog"); setSplash(false) }} link="/">BLOG</Link>
                    <br />
                    <Link onClick={() => { setOpen(!isOpen); setPage("store"); setSplash(false) }} link="/store">KHARMARCY</Link>
                    <br />
                    <Link onClick={() => { setOpen(!isOpen); setPage("about"); setSplash(false) }} link="/about">ABOUT</Link>
                    <br />
                </Menu>
            </>}
            {button}
            {transitions(
                (styles, item) => item && <>
                    <animated.div style={styles}><div onClick={() => setSplash(false)} ><Video /></div></animated.div></>
            )}
            {!splash &&
                <>

                    {page == "home" && <Sbg style={pfade} src={shirtbg} />}
                    {page == "home" &&
                        <animated.div style={props}>
                            <Homedesc>
                                <b>WELCOME TO THE SANCTUM</b>
                            </Homedesc>
                        </animated.div>}

                    <main>
                        <Tdiv>

                        </Tdiv>
                        
                        <Switch>
                            {page == "blog" && <List when={data.isArchive} />}
                            <Post when={data.isPost} />
                            <Page when={data.isPage} />
                        </Switch>
                        {data.isPost && <><strong><Return><Link onClick={() => setPage("blog")} link="/">Back</Link></Return></strong><br /><br /><br /></>}
                    </main>
                </>}
            {footer}
        </>
    );
};

const Tdiv = styled.div`
background-color: red;
width:auto;
`
const Timg = styled.img`
width: auto;

`

const Return = styled.div`
margin-top: 5%;
font-size: 1.6em;
width: auto;
text-align:right;
margin-right: 5%;
& > a {
color: white;
text-decoration: none;
}
`

const Homedesc = styled.div`
padding: 15%;
font-size: 1.2em;
color: rgb(236,15,113);
text-align: center;
padding-top: 45%;
`

const Sbg = styled(animated.img)`
height: auto;
z-index: -1;
width: 100%;
position: fixed;
background-color:black;

`
const Mdiv = styled.div`
transform-origin: top right;
transform: scale(1);
position: fixed;
z-index: 4;
width: auto;
right:0;
`

const Toff = styled.div`

padding-top: ${(props) => props.splash ? "12.5%" : "0%"};
`

const Banner = styled.img`
position: fixed;
padding-top: 12.5%;
left: 30%;
width: 40%;
height: auto;
//height: 40%;
z-index: 1;
`

const Icon = styled.img`
height: 1em;
width: auto;
filter: invert(1);
`

const Simg = styled.img`
//position: fixed;
width: 10rem;
display: block;
height: auto;
//height: 40%;
margin-left: auto;
margin-right: auto;
z-index: 2;
`

const Flexend = styled.div`

`

const Flexgrow = styled.div`
flex-grow: 4;

`
const Footer = styled.div`
    position: fixed;
    display: inline-block;
    left: 0;
    bottom: 0;
    font-size: 1.6em;
    width: 100%;
    //background-color: red;
    color: grey;
    z-index: 2;
    text-align: center;
    & > a {
        color: white;
        text-decoration: none;
      }
    
  `
const Header = styled.header`
background-color: green;
position: fixed;

color: white;
display: flex;

//outline: grey solid 1px;

`
const Menu = styled.nav`
 position: fixed;
 height: 100%;
top: 0;
padding-top: 12.5%;
margin-top : 0;
  text-align: center;
  font-size: 2.5rem;
  z-index: 3;
  line-height: 1.5;
  background-color: black;
  height: 100%;

  & > a {
    color: white;
    text-decoration: none;
  }
`

export default connect(Root)