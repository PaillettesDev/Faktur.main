import styled from "styled-components"
import './achievement.css'
import { useState } from "react"

const Home = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    return (
        <>
        <Container ismobile={ismobile} background={colors.$background}>

        </Container>
        </>
    )
}

const Container = styled.div`
  min-height: ${props => (props.ismobile ? "50vh" : "100vh")};
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export default Home
