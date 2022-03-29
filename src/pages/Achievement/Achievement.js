import styled from "styled-components"
import './Achievement.css'
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import ModalCardAchievement from "../../components/Modal/ModalCardAchievement/ModalCardAchievement";
import ModalCardCategoryAchievement from "../../components/Modal/ModalCardCategoryAchievement/ModalCardCategoryAchievement";

const Achievement = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )
    const [allAchievements, setAllAchievements] = useState([])
    const [categoryAchievements, setCategoryAchievements] = useState([])
    const [handleCardAchievementValue, sethandleCardAchievementValue] = useState([])
    const [cardAchievementCategory, setCardAchievementCategory] = useState([])
    const [filterAchievementByCategory, setfilterAchievementByCategory] = useState([])

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    window.addEventListener("load", (req, res) => {
        fetch("http://192.168.88.239:82/achievements/allachievements")
            .then(resp => resp.json())
            .then(data => {
                setAllAchievements(data)
            });
        fetch("http://192.168.88.239:82/achievements/categoryinfo")
            .then(resp => resp.json())
            .then(data => {
                setCategoryAchievements(data)
            })
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
    }

    function handleCardAchievementClose() {
        sethandleCardAchievementValue([])
    }

    function handleCardAchievementCategory(value) {
        const filterAchievements = allAchievements.filter(element => element.category.includes(value.category));
        
        setfilterAchievementByCategory(filterAchievements)
        setCardAchievementCategory(value)
    }

    function handleCardAchievementCategoryClose() {
        setCardAchievementCategory([])
    }

    return (
        <>
            {handleCardAchievementValue.length !== 0 && (
                <ModalCardAchievement handlerClose={handleCardAchievementClose} element={handleCardAchievementValue} />
            )}
            {cardAchievementCategory.length !== 0 && (
                <ModalCardCategoryAchievement handlerClose={handleCardAchievementCategoryClose} categoryInfo={cardAchievementCategory} achievementInfo={filterAchievementByCategory}/>
            )}
            <Container ismobile={ismobile} background={colors.$background}>
                <div className="introduction-faq-container">
                    <h1>Retrouver toutes nos réalisations juste ici !</h1>
                </div>
                <div className='card-all-achievement-container'>
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
                        }}
                        className="swiper-all-achievement"
                    >
                        {allAchievements.map((value, key) => {
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
            </Container>
            <div className='category-container faq'>
                <div className='category-title-container'>
                    <h1>Les catégories</h1>
                    <p>Retrouvez nos réalisations classée par saisons</p>
                </div>
                <div className='card-all-achievement-container'>
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
                        }}
                        className="swiper-all-achievement"
                    >
                        {categoryAchievements.map((value, key) => {
                            return(
                                <SwiperSlide key={key}>
                                    <div className="category-achievement-container" onClick={() => {handleCardAchievementCategory(value)}}>
                                        <div className="category-achievement-image">
                                            <img src={value.category_image} alt="category_image"></img>
                                        </div>
                                        <div className="details-category-achievement-card">
                                            <div className="information-category-achievement-card">
                                                <div className="information-category-achievement-card-title">
                                                    <p data-text="Recrutements" >{value.category_name}</p>
                                                </div>
                                                <span>Clique pour plus d'information</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}

const Container = styled.div`
padding-top: 100px;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export default Achievement
