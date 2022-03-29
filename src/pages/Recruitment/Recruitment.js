import styled from "styled-components"
import './Recruitment.css'
import { useState } from "react"

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
            <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"></link>
            <Container ismobile={ismobile} background={colors.$background}>
                <div className='introduction-container'>
                    <h1>Recrutements</h1>
                    <div className='button-container'>
                        <button className='button-discord' style={{ "--clr": "#FF0044" }}>Discord</button>
                        <button className='button-faction' style={{ "--clr": "#389da0" }}>FAQ</button>
                    </div>
                </div>
                <div className="condition-container">
                    <div className="condition-title">
                        <h1>Conditions de Recrutements</h1>
                        <p>Si vous avez des questions sur les conditions en général nous vous invitons à lire l'FAQ ou a nous contacter via discord.</p>
                    </div>
                    <div className="condition-container-box">
                        <div className="condition-box" style={{ "--clr": "#00ade1" }}>
                            <div className="condition-content">
                                <div className="condition-icon">
                                    <i className="icon ion-md-body"></i>
                                </div>
                                <div className="condition-text">
                                    <h3>Avoir 15 ans minimum</h3>
                                    <p>Nous vous demandons d'être franc</p>
                                </div>
                            </div>
                        </div>
                        <div className="condition-box" style={{ "--clr": "#dc00d4" }}>
                            <div className="condition-content">
                                <div className="condition-icon">
                                    <i className="icon ion-md-people"></i>
                                </div>
                                <div className="condition-text">
                                    <h3>Connaître un minimum Paladium</h3>
                                    <p>1mois d'expérience minimum</p>
                                </div>
                            </div>
                        </div>
                        <div className="condition-box" style={{ "--clr": "#00dc82" }}>
                            <div className="condition-content">
                                <div className="condition-icon">
                                    <i className="icon ion-md-stopwatch"></i>
                                </div>
                                <div className="condition-text">
                                    <h3>Être actif sur Discord et Minecraft</h3>
                                    <p>1h/j suffit</p>
                                </div>
                            </div>
                        </div>
                        <div className="condition-box" style={{ "--clr": "#f9ec51" }}>
                            <div className="condition-content">
                                <div className="condition-icon">
                                    <i className="icon ion-md-microphone"></i>
                                </div>
                                <div className="condition-text">
                                    <h3>Avoir un micro correct</h3>
                                    <p>Aucune exeption</p>
                                </div>
                            </div>
                        </div>
                        <div className="condition-box" style={{ "--clr": "#fb2f6d" }}>
                            <div className="condition-content">
                                <div className="condition-icon">
                                    <i className="icon ion-md-alert"></i>
                                </div>
                                <div className="condition-text">
                                    <h3>Être sérieux et mature</h3>
                                    <p>Condition vérifier lors de la phase de test</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-category">
                <p className="welcome-recruitment">Bienvenue sur notre page de recrutement !</p>
                <p className="subtitle-recruitement">Vous retrouverais ici toutes les informations nécessaire concertant le processus d'entrée dans notre faction</p>
                </div>
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
  min-height: fit-content;
  padding-top: 140px;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
& .second-category{
padding-left: 30px;
padding-bottom: 30px;

    & .welcome-recruitment{
        font-family: calibri;
        font-size: 2em;
        font-weight: bold;
        position: relative;
        padding-bottom: 3px;
        color: #ffffff;
        text-align: left;
    
        &::after{
            content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 150px;
        border-radius: 3px;
        background-color: #2ecc71;
        }
      }
    
      & .subtitle-recruitement{
        font-family: calibri;
        font-size: 1em;
        font-weight: bold;
        position: relative;
        padding-bottom: 3px;
        color: #868484;
        text-align: left;
    }
}
`


export default Recruitment
