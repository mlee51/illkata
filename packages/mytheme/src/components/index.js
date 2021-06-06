import React, { useState } from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from './List'
import Post from './Post'
import Page from './Page'
import { Squash as Hamburger } from 'hamburger-react'
import { useSpring, animated, config } from 'react-spring'
import Logo from '../logo.png'
import shirtbg from '../images/lesgomini.jpg'
import useWindowDimensions from './useWindow'
import Video from "./Video"




const Video2 = () => {
    return (
        <div style={{ position: "fixed", zIndex: "-99", width: "100%", height: "100%" }}>
            <iframe frameborder="0" height="100%" width="100%"
                src="https://youtube.com/embed/IR0Ouo1zACA?autoplay=1&controls=0&showinfo=0&autohide=1">
            </iframe>
        </div>
    )
}



const Component = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div>
            width: {width} ~ height: {height}
        </div>
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
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>

            <Global styles={css`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                width: 100%;
              
              }
                html {
                    color: white;
                    background-color: black;
                    width: 100%;
                    font-family: system-ui, Verdana, Arial, sans-serif;
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

                    <Link onClick={() => { setOpen(!isOpen); setPage("home"); setSplash(false) }} link="/">Home</Link>
                    <br />
                    <Link onClick={() => { setOpen(!isOpen); setPage("blog"); setSplash(false) }} link="/">Blog</Link>
                    <br />
                    <Link link="/about-us">Store</Link>
                    <br />
                    <Link link="/about-us">About Us</Link>
                    <br />
                </Menu>
            </>}
            {splash ? <>  <Toff  onClick={() => setSplash(false) }>
                <animated.div style={props}><Simg src={Logo} /></animated.div>
            </Toff>
            <animated.div style={props}><Video /></animated.div></> :
                <>

                    {page == "home" && <Sbg style={bwfade} src={shirtbg} />}

                    <Toff>
                        <animated.div style={props}><Simg src={Logo} /></animated.div>
                    </Toff>




                    {page == "home" &&
                        <animated.div style={props}>
                            <Homedesc>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum magna in scelerisque pretium. Quisque metus elit, sollicitudin quis tincidunt vel, vehicula eu eros. Quisque ullamcorper in risus vel porta. Nullam pharetra, ipsum ut eleifend egestas, erat lorem luctus lectus.
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
color: white;
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
z-index: 3;
width: auto;
right:0;
`

const Toff = styled.div`
padding-top: 12.5%;
`

const Simg = styled.img`
width: 40%;
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

const Header = styled.header`
background-color: green;
position: fixed;

color: white;
display: flex;

//outline: grey solid 1px;

`
const Menu = styled.nav`
 position: fixed;
 width: 100%;
top: 0;
padding-top: 12.5%;
margin-top : 0;
  text-align: center;
  font-size: 10vw;
  z-index: 1;
  line-height: 1.5;
  background-color: black;
  height: 100%;

  & > a {
    color: white;
    text-decoration: none;
  }
`

export default connect(Root)