import styled from "styled-components"
import './Recruitment.css'
import { useState, useEffect } from "react"

const Recruitment = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    return (
        <>
            <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1, user-scalable=no;user-scalable=0;" />
            <Container ismobile={ismobile} background={colors.$background}>
                <div className='introduction-container'>
                    <h1>Recrutements</h1>
                    <div className='button-container'>
                        <button className='button-discord' style={{ "--clr": "#FF0044" }}>Discord</button>
                        <button className='button-faction' style={{ "--clr": "#389da0" }}>FAQ</button>
                    </div>
                </div>
                <p>Bienvenue sur notre page de recrutement !</p>
                <p>Vous retrouverais ici toutes les informations nécessaire concertant le processus d'entrée dans notre faction</p>
            </Container>
            <div className="form-container">
                <div className="background-form-color">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfnvlgrff88A-_ExyCIduoHX0n-wCVym8tIxstiEaIFyKMe4Q/viewform?embedded=true" height="100%" width="100%" position="relative" marginHeight="0" marginWidth="0" frameBorder="0" className="form-iframe" title="form-iframe"></iframe>
                </div>
                <p>Si vous avez des question concernant le processus de recrutement ou la faction nous vous conseillons d'aller voir notre FAQ.</p>
            </div>
        </>
    )
}

const Container = styled.div`
  min-height: ${props => (props.ismobile ? "70vh" : "100vh")};
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p:nth-child(2){
      color:#ffffff;
      font-size: 1.3em;
      font-weight: bold;
      padding:  5% 10px 0 10px;
  }

  & p:nth-child(3){
    color:#868585;
    font-size: 1em;
    font-weight: bold;
    padding:  0 10px 0 10px;
}
`


export default Recruitment
