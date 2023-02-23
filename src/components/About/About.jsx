import React from 'react'
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque exercitationem quibusdam cumque magnam nesciunt non autem quaerat, modi tenetur laboriosam velit at laborum vitae beatae officiis corrupti alias obcaecati.</p>
    </Container>
  )
}

export default About

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: justify;
  padding-top: 100px;
`