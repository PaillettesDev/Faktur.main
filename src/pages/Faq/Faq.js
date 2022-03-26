import styled from "styled-components"
import './Faq.css'
import { useEffect, useState } from "react"

const Faq = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )

    const [searchTerm, setsearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState([])

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    let suggestions = [
        "Channel",
        "CodingLab",
        "CodingNepal",
        "YouTube",
        "YouTuber",
        "YouTube Channel",
        "Blogger",
        "Bollywood",
        "Vlogger",
        "Vechiles",
        "Facebook",
        "Freelancer",
        "Facebook Page",
        "Designer",
        "Developer",
        "Web Designer",
        "Web Developer",
        "Login Form in HTML & CSS",
        "How to learn HTML & CSS",
        "How to learn JavaScript",
        "How to became Freelancer",
        "How to became Web Designer",
        "How to start Gaming Channel",
        "How to start YouTube Channel",
        "What does HTML stands for?",
        "What does CSS stands for?",
    ];

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setsearchTerm(searchWord)
        const newFilter = suggestions.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(!newFilter.length > 0){
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
        }
    })

    function handleSearch(value){
        console.log(value)
    }

    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"></link>
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
                                        <li key={key} onClick={() => {handleSearch(value)}}>{value}</li>
                                    );
                                })}
                            </div>
                        )}
                        <div className="icon"><i className="fa fa-search" ></i></div>
                    </div>
                </div>
            </Container>
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


export default Faq
