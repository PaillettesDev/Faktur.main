import styled from "styled-components"
import './Home.css'
import Skin from '../../assets/Home/Skin.png'
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
        <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1, user-scalable=no;user-scalable=0;" />
            <Container background={colors.$background} ismobile={ismobile}>
                <div className="text-container">
                    <h1>La FakTuR</h1>
                    <h3>Une faction plus que soudé qui vous souhaite la Bienvenue !</h3>
                </div>
                {!ismobile && <img src={Skin} alt="minecraft_skin" className="skin"></img>}
            </Container>
            <div className="background-color">
                <div className="information-container">
                    <div className="information-text">
                        <p>A propos de nous</p>
                        <p>Faction de 30joueurs</p>
                        <p>La FakTuR est une faction assez ancienne est très expérimenté
                            dans Paladium, elle est créer en V.4 par les anciens chefs:
                            TuringEnigma et Trocky. Elle est reprise ensuite par Anonymous et
                            Galtrips, et est désormais elle est entre les mains de Kuraah et
                            Samxvdhn. Notre faction a énormément de visibilité, notament grâce a notre
                            ancienneté ainsi qu'aux différentes vidéos de potentiels Youtubeur.
                            Nos différents projets nous permette aussi d'être reconnu auprès des
                            différents joueurs du serveur. C'est donc avec joie et bonhumeur que nous
                            les réalisons à travers les différents saisons.
                        </p>
                        <p>Notre présentation ta intéresser ? Si tu as plus de 15ans, que tu
                            es quelqu'un de bon vivant et que tu souhaite
                            nous rejoindre dans cette belle aventure , il te suffit de remplir notre formulaire
                            en cliquant sur le bouton juste en dessous !
                        </p>
                    </div>
                    <div className="vertical-center">
                        <button className="button-form">Formulaire</button>
                    </div>
                </div>
            </div>
            <div className="about-site-container">
                <div className="box-container">
                    <a href="/faction" >
                        <div className="box-1" style={{ "--clr": "#00ade1" }}>
                            <div className="box-head">
                                <p className="title">Faction</p>
                            </div>
                            <div className="box-body">
                                <p className="details">Ici vous pourrez retrouver toutes nos membres
                                    et leur rôle dans la faction. Ainsi que différentes information sur son
                                    fonctionnement !</p>
                            </div>
                        </div>
                    </a>
                    <a href="/news">
                        <div className="box-2" style={{ "--clr": "#fb2f6d" }}>
                            <div className="box-head">
                                <p className="title">News</p>
                            </div>
                            <div className="box-body">
                                <p className="details">Vous avez envie de voir ce qu'il c'est passer chez
                                    nous ces derniers jours ? Cette partie du site est faite pour vous ! Toutes
                                    les nouvelles concernant notre faction si trouve !</p>
                            </div>
                        </div>
                    </a>
                    <a href="/réalisation">
                        <div className="box-3" style={{ "--clr": "#00dc82" }}>
                            <div className="box-head">
                                <p className="title">Réalisation</p>
                            </div>
                            <div className="box-body">
                                <p className="details">Dans cette partie vous retrouverais toutes
                                    no plus belles réalisations avec quelques anecdotes, </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
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
