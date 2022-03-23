import './Faction.css'
import { useState } from "react"
import styled from "styled-components"

const Faction = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )
    const [members, setMembers] = useState(undefined)

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    window.addEventListener("load", () => {
        fetch("http://localhost:82/faction/members")
            .then(resp => resp.json())
            .then(data => {
                setMembers(data);
            })
    })

    return (
        <> <Container ismobile={ismobile} background={colors.$background}>
                <div className='introduction-container'>
                    <h1>La FakTuR</h1>
                    <div className='box-container'>
                        <a href="https://discord.gg/WVyqW5crQA">
                            <div className='box'>
                                <p className='box-title'>Discord</p>
                                <p className='box-description'>test</p>
                                <span class="ltbrac">&lt;</span><span class="eleme">html</span><span class="gtbrac">&gt;</span>
                            </div>
                        </a>
                        <a href="/recruitments">
                            <div className='box'>
                                <div className='box-right'></div>
                                <p className='box-title'>Recrutements</p>
                                <p className='box-description'>test</p>
                                <div className='angle-brackets'>
                                    <span></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>  
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

export default Faction
