import './Faction.css'
import { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const Faction = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )
    const [members, setMembers] = useState([{
        discord_username:"",discord_tag:"",discord_avatar:"",ig_username:"", ig_head:"",rank:"",rank_color:"",description:"",
    }])
    const [cardIsOpen, setCardIsOpen] = useState(false)

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    window.addEventListener("load", () => {
        fetch("http://localhost:82/faction/members")
            .then(resp => resp.json())
            .then(data => {
                setMembers(data);
                console.log(data[2].description.length)
            })
    })

    const handleMenu = () => {
        setCardIsOpen(!cardIsOpen)
    }

    return (
        <> <Container ismobile={ismobile} background={colors.$background}>
                <div className='introduction-container'>
                    <h1>La FakTuR</h1>
                    <div className='button-container'>
                        <button className='button-discord' style={{"--clr":"#FF0044"}}>Discord</button>
                        <button className='button-Recrutements' style={{"--clr":"#389da0"}}>Recrutements</button>
                    </div>
                </div>  
            </Container>
            <div className='members'>
                <div className='members-title-container'>
                    <h1>Nos membres</h1>
                    <p>Retrouvez toutes les informations sur nos membres</p>
                </div>
                <div className='card-container'>
                    <Swiper
                     modules={[Navigation, Pagination]}
                     slidesPerView={3}
                     spaceBetween={10}
                     slidesPerGroup={1}
                     navigation={true}
                     pagination={{clickable:true}}
                     breakpoints={{
                         0:{
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 20,
                         },
                        640: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                          spaceBetween: 20,
                        },
                        1000:{
                            slidesPerView: 2,
                          slidesPerGroup: 1,
                          spaceBetween: 20,
                        },
                        1160: {
                          slidesPerView: 3,
                          slidesPerGroup: 1,
                          spaceBetween: 1,
                        },
                      }}
                       className="swiper"
                       >
                            {members.map(member => {
                                return(
                                    <SwiperSlide>
                                        <Card>
                                            <CardBurger
                                            color="#ffffff"
                                            onClick={handleMenu}
                                            cardIsOpen={cardIsOpen}
                                            ><i className='arrow right'></i></CardBurger>
                                            <CardContent>
                                            <CardAvatar>
                                                <img src={member.ig_head ? member.ig_head : member.discord_avatar} alt="avatar"></img>
                                            </CardAvatar>
                                            <CardUsername>{member.discord_username}</CardUsername>
                                            <CardRank color={member.rank_color}>{member.rank}</CardRank>
                                            <CardDescription>{member.description}</CardDescription>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

const Container = styled.div`
  min-height: ${props => (props.ismobile ? "50vh" : "80vh")};
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Card = styled.div`
cursor: pointer;
position: relative;
background: #fff;
border-radius: 20px;
width: 300px;
height: 330px;
transition: all 0.4s ease;
&:hover{
  transform: translateY(-15px);
}
`

const CardContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: 330px;
`

const CardAvatar = styled.div`
height: 130px;
width: 130px;
margin-top: 10px;
background: #fb2f6d;
padding: 3px;
border-radius: 50%;

& img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #fff;
}
`

const CardUsername = styled.h1`
margin-top: 10px;
font-family: calibri;
font-size: 1.8em;
font-weight: bold;
color: #000000;
`

const CardRank = styled.p`
font-family: calibri;
font-size: 15px;
font-weight: bold;
color: ${props => props.color ? props.color : "#000000"};
`

const CardDescription = styled.p`
color: #7e7d7d;
font-size: 20px;
margin: 10px 10px 0px 10px;
text-align: center;
`

const CardBurger = styled.div`
width: 25px;
height: 25px;
position: relative;
cursor: pointer;
float: right;
margin-right: 10px;
margin-top:10px;

i::before {
    position: relative;
    /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
    content: "";
    display: inline-block;
    /* By using an em scale, the arrows will size with the font */
    width: 1em;
    height: 1em;
    border-right: 0.4em solid #868484;
    border-top: 0.4em solid #868484;
    transform: rotate(45deg);
    margin-right: 1.5em;
}
`

export default Faction
