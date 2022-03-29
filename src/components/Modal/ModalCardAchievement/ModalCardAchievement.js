import styled from "styled-components"
import './ModalCardAchievement.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const ModalCardAchievement = ({ handlerClose, element }) => {

    return (
        <ModalContainer className="ModalContainer">
            <ModalTop>
                <ModalTopTitle>{element.achievement_title}</ModalTopTitle>
                <button className="leave-button-category" onClick={handlerClose}>Fermer</button>
            </ModalTop>
            <ModalResponseContainer>
                <ModalResponse>{element.achievement_description}</ModalResponse>
            </ModalResponseContainer>
            <ModalPicturesContainer>
                <ModalPictureTitle>Photos</ModalPictureTitle>
                <div className='card-achievement-picture-container'>
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
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                spaceBetween: 20,
                            },
                        }}
                        className="swiper-card-achievement-pictures"
                    >
                        {element.achievement_image.map((value, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="achievement-picture-card-container">
                                        <div className="achievement-picture-card">
                                            <img src={value} alt="achievement-pictures"></img>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                        {element.achievement_video.map((value, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="achievement-picture-card-container">
                                        <div className="achievement-picture-card">
                                            <iframe width="400" height="250" src={value} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </ModalPicturesContainer>
            <ModalPubFacContainer>
                <p>
                    Vous souhaitez rejoindre notre faction pour nous aider dans des réalisations comme celle-ci ? Alors aller remplir notre formulaire de recrutement et vous recevrez une réponse sous 48heures !
                </p>
            </ModalPubFacContainer>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
margin: auto;
background: white;
border-radius: 15px 15px 0 0;
height: 80%;
z-index: 10;
overflow: hidden;
overflow-y: scroll;
display: flex;
flex-direction: column;

&::-webkit-scrollbar {
    width: 12px;
}

&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
`

const ModalTop = styled.div`
width: 100%;
height: fit-content;
padding: 10px;
top: 0;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
align-items: center;
justify-content: space-between;
text-align: center;
`

const ModalTopTitle = styled.h1`
font-family: calibri;
font-size: 2em;
font-weight: bold;
position: relative;
padding-bottom: 3px;

&::after{
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 4px;
    width: 110px;
    border-radius: 3px;
    background-color: #2ecc71;
}
`

const ModalResponseContainer = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
width: 80%;
height: fit-content;
padding: 10px;
margin: 20px auto;
border-radius: 10px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.40);
align-items: center;
justify-content: center;
text-align: center;
`

const ModalPicturesContainer = styled.div`
width: 100%;
height: fit-content;
align-items: center;
justify-content: center;
text-align: center;
`

const ModalPictureTitle = styled.h1`
font-family: calibri;
font-size: 1.8em;
font-weight: bold;
color: #403e3e;
position: relative;
padding-bottom: 3px;

&::after{
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 4px;
    width: 80px;
    border-radius: 3px;
    background-color: #2ecc71;
}
`

const ModalResponse = styled.p`
font-family: calibri;
font-size: 1.3em;
font-weight: bold;
color: #7e7d7d;
`

const ModalPubFacContainer = styled.div`
width: 100%;
height: fit-content;
align-items: center;
justify-content: center;
text-align: left;
padding-left: 10px;
padding-right: 10px;
margin-bottom: 10px;

& p{
font-family: calibri;
font-size: 1em;
font-weight: bold;
color: #7e7d7d;
}
`

export default ModalCardAchievement;