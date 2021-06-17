import React from "react"
import { connect, styled } from "frontity"
import dayjs from "dayjs"
import { useSpring, animated } from 'react-spring'

const Post = ({ state }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const formattedDate = dayjs(post.date).format("M/D/YYYY")
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <APostwrap style={props}>
            <h2>{post.title.rendered}</h2>
            <p>
                
                <strong>{formattedDate}</strong>
            </p>
            <p>
                <strong> {author.name}</strong>
               
            </p>
            <br/>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </APostwrap>
    )
}

const Title = styled.div`
 

  
`;


const Postwrap = styled.div`
 //margin-top: 17%;

padding-top: 5%;
@media (orientation: landscape) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
 & > h2 {
     font-size: 2em;
  }

`

const APostwrap = animated(Postwrap)
export default connect(Post)