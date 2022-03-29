import styled from "styled-components"
import './ModalCardCategoryAchievement.css'
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import ModalCardAchievement from "../ModalCardAchievement/ModalCardAchievement";

const ModalCardCategoryAchievement = ({ handlerClose, categoryInfo, achievementInfo}) => {

    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )
    const [handleCardAchievementValue, sethandleCardAchievementValue] = useState([])

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    function mouseOverAllAchievementCardAdd(key) {
        const imageToChangeFilter = document.getElementById(`${key}`)

        if (!ismobile) {
            imageToChangeFilter.childNodes[0].style.filter = "grayscale(80%)";
            imageToChangeFilter.childNodes[1].childNodes[0].classList.add("over");
            imageToChangeFilter.childNodes[1].style.padding = "10px 10px";
        }
    }

    function mouseOverAllAchievementCardRemove(key) {
        if (!ismobile) {
            const imageToChangeFilter = document.getElementById(`${key}`)

            imageToChangeFilter.childNodes[0].style.filter = "grayscale(20%)";
            imageToChangeFilter.childNodes[1].childNodes[0].classList.remove("over")
            imageToChangeFilter.childNodes[1].style.padding = "0px 10px";
        }
    }

    function handleCardAchievement(value) {
        sethandleCardAchievementValue(value)

        const toBack = document.getElementById("ModalContainerCategory")

        toBack.style.zIndex = "-1"
    }

    function handleCardAchievementClose() {
        sethandleCardAchievementValue([])

        const toBack = document.getElementById("ModalContainerCategory")

        toBack.style.zIndex = "10"
    }

    return (
        <>
            {handleCardAchievementValue.length !== 0 && (
                <ModalCardAchievement handlerClose={handleCardAchievementClose} element={handleCardAchievementValue} />
            )}
            <ModalContainer className="ModalContainer" id="ModalContainerCategory">
                <ModalTop>
                    <ModalTopTitle>Paladium {categoryInfo.category_name}</ModalTopTitle>
                    <button className="leave-button-category" onClick={handlerClose}>Fermer</button>
                </ModalTop>
                <ModalPicturesContainer>
                    <ModalPictureTitle>Réalisations</ModalPictureTitle>
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
                            {achievementInfo.map((value, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <div className="achievement-all-card" id={key} onMouseOver={() => { mouseOverAllAchievementCardAdd(key) }} onMouseLeave={() => { mouseOverAllAchievementCardRemove(key) }} onClick={() => { handleCardAchievement(value) }}>
                                            <div className="achievement-all-background-image-card">
                                                <img src={value.achievement_image[0]} alt="backgroundImage"></img>
                                            </div>
                                            <div className="details-all-achievement-card">
                                                <div className="information-all-achievement-card">
                                                    <div className="information-all-achievement-card-title">
                                                        <p data-text="Recrutements" >{value.achievement_title}</p>
                                                    </div>
                                                    <span>Clique pour plus d'information</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </ModalPicturesContainer>
                <ModalResponseContainer>
                    <ModalResponse>{categoryInfo.category_description}</ModalResponse>
                </ModalResponseContainer>
            </ModalContainer>
        </>
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

const ModalResponse = styled.p`
font-family: calibri;
font-size: 1.3em;
font-weight: bold;
color: #7e7d7d;
`

const ModalPicturesContainer = styled.div`
width: 100%;
height: fit-content;
margin-top: 10px;
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
    width: 70px;
    border-radius: 3px;
    background-color: #2ecc71;
}
`

export default ModalCardCategoryAchievement;