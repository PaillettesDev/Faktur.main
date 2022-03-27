import styled from "styled-components"
import './ModalSearchClicked.css'

const ModalSearchClicked = ({ handlerClose, element }) => {

    function checkInput() {
        var discord = document.getElementById("discord")
        var email = document.getElementById("email");
        var formMail = document.getElementById("div-mail");
        var formDiscord = document.getElementById("div-discord");
        var question = document.getElementById("question_to_add")
        var formQuestion = document.getElementById("div-question")

        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var discordPattern = /^((?!(discordtag|everyone|here)#)((?!@|#|:|```).{2,32})#\d{4})/;
        if (!email.value.match(emailPattern)) {
            formMail.classList.add("error")
        }

        if (!discord.value.match(discordPattern)) {
            formDiscord.classList.add("error")
        }

        if (question.value.length < 10) {
            formQuestion.classList.add("error")
        }

        if (discord.value.match(discordPattern) && email.value.match(emailPattern)) {
            console.log("good")
            fetch(`http://192.168.88.239:82/faq/addquestion`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    discord_tag: discord.value,
                    email: email.value,
                    question: question.value
                })
            }).then(() => {
                var question = document.getElementById("div-button")

                question.classList.add("success")
            })
        }
    }

    function checkChange() {
        var discord = document.getElementById("discord")
        var email = document.getElementById("email");
        var formMail = document.getElementById("div-mail");
        var formDiscord = document.getElementById("div-discord");
        var question = document.getElementById("question_to_add")
        var formQuestion = document.getElementById("div-question")

        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var discordPattern = /^((?!(discordtag|everyone|here)#)((?!@|#|:|```).{2,32})#\d{4})/;

        if (email.value.match(emailPattern)) {
            formMail.classList.remove("error")
        }

        if (discord.value.match(discordPattern)) {
            formDiscord.classList.remove("error")
        }

        if (question.value.length > 10) {
            formQuestion.classList.remove("error")
        }
    }

    return (
        <ModalContainer className="ModalContainer">
            <ModalTop>
                <ModalTopTitle>Support</ModalTopTitle>
                <ModalTopQuestion>{element.question}</ModalTopQuestion>
            </ModalTop>
            <ModalResponseContainer>
                <ModalResponseTitle>Réponse</ModalResponseTitle>
                <ModalResponse>{element.response}</ModalResponse>
            </ModalResponseContainer>
            <ModalSatisfactionContainer>
                <ModalSatisfactionTitle>Cette réponse ne vous à pas aider ? Vous voulez ajouter une question a l'FAQ ?</ModalSatisfactionTitle>
                <ModalSatisfactionSubtitle>Si vous voulez nous faire part d'une question qui n'est pas présente dans l'FAQ ? Alors remplissez le formulaire ci-dessous et nos équipe la traiteront le plus rapidement possible ! Nous vous préviendrons pas la suite sur Discord ou par Mail du résultat.</ModalSatisfactionSubtitle>
                <div className="send-question-container">
                    <div className="send-question-box">
                        <h2>Envoyer votre question</h2>
                        <div className="form-control" id="div-discord">
                            <input type="text" id="discord" className="field" placeholder="Votre discord(exemple: Paillettes_#4110)" data-error="Vous devez ajouter votre tag(example: #4110)" onChange={checkChange}></input>
                            <small className="errorSmall">Veuillez saisir votre tag (example: #4110)</small>
                        </div>
                        <div className="form-control" id="div-mail">
                            <input type="email" id="email" className="field" placeholder="Votre mail(exemple: example@gmail.com)" data-error="Votre email est invalide" onChange={checkChange}></input>
                            <small className="errorSmall">Veuillez saisir une adresse electronique valide</small>
                        </div>
                        <div className="form-control" id="div-question">
                            <textarea className="field" placeholder="Votre question" id="question_to_add" onChange={checkChange}></textarea>
                            <small className="errorSmall">Votre réponse question courte</small>
                        </div>
                        <div className="form-control" id="div-button">
                            <button className="send-question-button" onClick={checkInput}>Envoyer</button>
                            <small className="buttonSmall">Votre réponse a bien était envoyer</small>
                        </div>
                    </div>
                </div>
            </ModalSatisfactionContainer>
            <button className="leave-button" onClick={handlerClose}>Fermer</button>
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
height: 23%;
top: 0;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
align-items: center;
justify-content: center;
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
    width: 80px;
    border-radius: 3px;
    background-color: #2ecc71;
}
`

const ModalTopQuestion = styled.p`
font-family: calibri;
font-size: 1.5em;
font-weight: bold;
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
text-align: left;
`

const ModalResponseTitle = styled.h1`
font-family: calibri;
font-size: 1.8em;
font-weight: bold;
color: #403e3e;
position: relative;
padding-bottom: 3px;

&::after{
    content: "";
    position: absolute;
    left: 0;
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

const ModalSatisfactionContainer = styled.div`
width: 100%;
height: fit-content;
padding: 10px;
align-items: center;
justify-content: center;
text-align: left;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`

const ModalSatisfactionTitle = styled.h1`
font-family: calibri;
font-size: 0.9em;
font-weight: bold;
color: #403e3e;
`

const ModalSatisfactionSubtitle = styled.p`
font-family: calibri;
font-size: 0.8em;
font-weight: bold;
color: #7e7d7d;
`


export default ModalSearchClicked;