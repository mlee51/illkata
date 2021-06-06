import React from "react"
import { connect, styled } from "frontity"
import { useSpring, animated } from 'react-spring'
import Link from "@frontity/components/link"
import Post from './Post'
import shirtbg from '../images/lesgomini.jpg'


const List = ({ state }) => {

    const data = state.source.get(state.router.link)
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <>
           
            <AItems style={props}>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    return (
                        <Link key={item.id} link={post.link}>
                            {post.title.rendered}
                            <br />
                        </Link>
                    )
                })}
            </AItems>
        </>
    );
};

const Simg = styled.img`

`


const Items = styled.div`
    margin-top: 17%;
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 2.2em;
    color: white;
    text-decoration: none;
  }
`

const AItems = animated(Items)

export default connect(List)