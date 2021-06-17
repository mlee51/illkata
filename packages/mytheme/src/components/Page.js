import React from "react"
import { connect, styled } from "frontity"

const Page = ({ state }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]


    return (
        <Postwrap>
            <h2>{page.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </Postwrap>

    )
}



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

export default connect(Page)