import styled from "styled-components"
import './Home.css'
import Skin from '../../assets/Home/Skin.png'

const Home = ({ colors }) => {

    return (
        <>
            <section>
                <div className="text-container">
                    <p>La FakTuR</p>
                    <p>Une faction plus que soudé qui vous souhaite la Bienvenue !</p>
                    <img src={Skin} alt="minecraft_skin" className="skin"></img>
                </div>
            </section>
            <div className="information-container"></div>
        </>
    )
}

const Container = styled.div`
  height: 100vw;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export default Home
