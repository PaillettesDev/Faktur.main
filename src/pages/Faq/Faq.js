import styled from "styled-components"
import './Faq.css'
import { useEffect, useState } from "react"
import ModalSearchClicked from "../../components/Modal/ModalSearchClicked/ModalSearchClicked.js"
import ModalCategoryClicked from "../../components/Modal/ModalCategoryClicked/ModalCategoryClicked"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

//The css Code of the swiper is in the Faction.css

const Faq = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )
    const [searchTerm, setsearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [listClicked, setListClicked] = useState([])
    const [cardClicked, setCardClicked] = useState([])
    const [categoryInfo, setCategoryInfo] = useState([])

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    let [suggestions, setSuggestions] = useState([])

    window.addEventListener("load", () => {
        fetch('http://192.168.88.239:82/faq/qr')
            .then(resp => resp.json())
            .then(data => {
                setSuggestions(data)
            });
        fetch('http://192.168.88.239:82/faq/categoryinfo')
            .then(resp => resp.json())
            .then(data => {
                setCategoryInfo(data)
            })
    })

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setsearchTerm(searchWord)
        const newFilter = suggestions.filter((value) => {
            return value.question.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (!newFilter.length > 0) {
            newFilter.push("Aucun résultat pour votre recherche")
        }

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    useEffect(() => {
        if (filteredData.length !== 0) {
            const searchWrapper = document.querySelector(".search-input");
            const inputBox = searchWrapper.querySelector("input");

            inputBox.onkeyup = (e) => {
                let userData = e.target.value;

                if (userData) {
                    searchWrapper.classList.add('active');
                } else {
                    searchWrapper.classList.remove('active');
                }
            }

            if (searchWrapper.classList.contains("active")) {
                window.addEventListener("click", function (click) {
                    var clickInsideWrapper = searchWrapper.contains(click.target);

                    if (clickInsideWrapper === false) {
                        searchWrapper.classList.remove('active');
                    }
                })
            }
        }
    })

    function handleSearch(value) {
        setListClicked(value)
    }

    function handleClose() {
        setListClicked([])
    }

    function handleCard(value) {
        setCardClicked(value)

        
    }

    function handleCloseCard() {
        setCardClicked([])
    }

    return (
        <>
            {listClicked.length !== 0 && (
                <ModalSearchClicked handlerClose={handleClose} element={listClicked} />
            )}
            {cardClicked.length !== 0 && (
                <ModalCategoryClicked handlerClose={handleCloseCard} element={cardClicked} allElement={suggestions}/>
            )}
            <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1, user-scalable=no;user-scalable=0;" />
            <link 
  href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" 
  rel="stylesheet"  type='text/css'></link>
            <Container ismobile={ismobile} background={colors.$background}>
                <div className="introduction-faq-container">
                    <h1>Bienvenue ! Les questions les plus posées se trouve ici</h1>
                </div>
                <div className="wrapper">
                    <div className="search-input">
                        <input type="text" placeholder="Rechercher votre question..." value={searchTerm} onChange={handleFilter}></input>
                        {filteredData.length !== 0 && (
                            <div className="autocom-box active">
                                {filteredData.slice(0, 8).map((value, key) => {
                                    return (
                                        <li key={key} onClick={() => { handleSearch(value) }} style={{ "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>{value.question}</li>
                                    );
                                })}
                            </div>
                        )}
                        <div className="icon"><i className="fa fa-search" ></i></div>
                    </div>
                </div>
            </Container>
            <div className='category-container faq'>
                <div className='category-title-container'>
                    <h1>Nos catégories</h1>
                    <p>Retrouvez toutes les questions les plus poser juste en dessous</p>
                </div>
                <div className='card-faq-container'>
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
                        className="swiper-faq"
                    >
                        {categoryInfo.map((value, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="category-faq-card" onClick={() => {handleCard(value)}}>
                                        <div className="category-faq-img-card">
                                            <img src={value.category_image} alt="Skin"></img>
                                        </div>
                                        <div className="details-faq-card">
                                            <div className="information-faq-category-card">
                                                <div className="information-faq-category-card-title">
                                                    <p data-text="Recrutements" >{value.category_name}</p>
                                                </div>
                                                <span>{value.category_description}</span>
                                            </div>
                                        </div>
                                    </div>
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
padding-top: 200px;
padding-bottom: 220px;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => (props.ismobile ? "position: relative; bottom: 0;" : "")}
`

export default Faq
