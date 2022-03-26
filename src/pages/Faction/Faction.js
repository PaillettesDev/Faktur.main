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
        discord_username: "", discord_tag: "", discord_avatar: "", ig_username: "", ig_head: "", rank: "", rank_color: "", description: "",
    }])
    const [relations, setRelations] = useState([{
        faction_name: "", faction_logo: "", faction_rank: "", color:"", faction_member: "", faction_leader: "", faction_discord: ""
    }])
    const [cardIsOpen, setCardIsOpen] = useState(false)

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    window.addEventListener("load", () => {
        fetch("http://192.168.88.239:82/faction/members")
            .then(resp => resp.json())
            .then(data => {
                setMembers(data)
            })

        fetch("http://192.168.88.239:82/faction/relations")
            .then(resp => resp.json())
            .then(data => {
                setRelations(data)
            })
    })

    const handleMenu = () => {
        setCardIsOpen(!cardIsOpen)
    }

    return (
        <>
        <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1, user-scalable=no;user-scalable=0;" />
        <Container ismobile={ismobile} background={colors.$background}>
            <div className='introduction-container'>
                <h1>La FakTuR</h1>
                <div className='button-container'>
                    <button className='button-discord' style={{ "--clr": "#FF0044" }}>Discord</button>
                    <button className='button-Recrutements' style={{ "--clr": "#389da0" }}>Recrutements</button>
                </div>
            </div>
        </Container>
            <div className='category-container'>
                <div className='category-title-container'>
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
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 20,
                            },
                            1000: {
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
                            return (
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
            <div className='category-container'>
                <div className='category-title-container'>
                    <h1>Nos ally & truce</h1>
                    <p>Retrouvez toutes les informations sur nos différentes relations.</p>
                </div>
                <div className='card-relation-container'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={3}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 20,
                            },
                            1000: {
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
                        className="swiper-relation"
                    >
                        {relations.map(relation => {
                            return (
                                <SwiperSlide>
                                    <a href={relation.faction_discord} style={{"textDecoration":"none"}}>
                                        <CardRelation>
                                            <CardRelationContent>
                                                <CardRelationLogo color={relation.color}>
                                                    <img src={relation.faction_logo} alt="relation_logo"></img>
                                                </CardRelationLogo>
                                                <CardRelationInfo>
                                                    <CardRelationName>{relation.faction_name}</CardRelationName>
                                                    <p>
                                                        <span style={{"color":`${relation.color}`, "fontSize":"15px", "fontWeight": "bold"}}> {relation.faction_rank}</span>
                                                    </p>
                                                    <p style={{"color":"#868484"}}>
                                                       Cette faction comporte {relation.faction_member} membres et est gérer par {relation.faction_leader}
                                                    </p>
                                                </CardRelationInfo>
                                            </CardRelationContent>
                                        </CardRelation>
                                    </a>
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

//CardMember
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

//Card relation

const CardRelation = styled.div`
cursor: pointer;
position: relative;
background: #fff;
border-radius: 20px;
width: 300px;
height: 150px;
transition: all 0.4s ease;
&:hover{
  transform: translateY(-15px);
}
`

const CardRelationContent = styled.div`
display: flex;
width: 300px;
height: 150px;
justify-content: center;
align-items: center;
`

const CardRelationLogo = styled.div`
height: 90px;
width: 90px;
margin-left: 10px;
background: ${props => (props.color ? props.color : "#fb2f6d")};
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

const CardRelationName = styled.h1`
    margin-top: 10px;
    font-family: calibri;
    font-size: 1.8em;
    font-weight: bold;
    color: #000000;
`

const CardRelationInfo = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 150px;
justify-content: center;
align-items: center;

& p{
    font-family: calibri;
    font-size: 1em;
    font-weight: bold;
    color:#000000;
    text-align: center;
    padding-left:10px;
    padding-right: 10px;
}
`

export default Faction
