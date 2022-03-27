import styled from "styled-components"
import './Faq.css'
import { useEffect, useState } from "react"
import ModalSearchClicked from "../../components/Modal/ModalSearchClicked"

const Faq = ({ colors }) => {
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 820 ? true : false
    )
    const [searchTerm, setsearchTerm] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [listClicked, setListClicked] = useState([])

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    let [suggestions, setSuggestions] = useState([])

    window.addEventListener("load", () =>{
        fetch('http://192.168.88.239:82/faq/qr')
        .then(resp => resp.json())
        .then(data => {
            setSuggestions(data)
        })
    })

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setsearchTerm(searchWord)
        const newFilter = suggestions.filter((value) => {
            return value.question.toLowerCase().includes(searchWord.toLowerCase());
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

            if(searchWrapper.classList.contains("active")){
                window.addEventListener("click", function(click){
                    var clickInsideWrapper = searchWrapper.contains(click.target);

                    if(clickInsideWrapper === false){
                        searchWrapper.classList.remove('active');
                    }
                })
            }
        }
    })

    function handleSearch(value){
        setListClicked(value)
    }

    function handleClose(){
        setListClicked([])
    }

    return (
        <>
        {listClicked.length !== 0 && (
            <ModalSearchClicked handlerClose={handleClose} element={listClicked}/>
        )}
        <meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1, user-scalable=no;user-scalable=0;" />
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
                                        <li key={key} onClick={() => {handleSearch(value)}} style={{"whiteSpace": "nowrap", "overflow":"hidden", "textOverflow": "ellipsis"}}>{value.question}</li>
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
padding-top: 100px;
padding-bottom: 50px;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => (props.ismobile ? "position: relative; bottom: 0;" : "")}
`


export default Faq
