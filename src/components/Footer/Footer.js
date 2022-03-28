import React from 'react';
import './Footer.css'

const Footer = ({ colors }) => {

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-part' style={{ "--clr": "#00ade1" }}>
                        <h3>Support</h3>
                        <ul>
                            <li className='footer-list'>
                                <a href="/faq" >FAQ</a>
                                <a href="https://discord.gg/WVyqW5crQA">Discord</a>
                                <a href='href=mailto:paillettes2kevin@gmail.com?subject="Problème/Question"'>Contact mail</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-part' style={{ "--clr": "#00dc82" }}>
                        <h3>Credit</h3>
                        <ul>
                            <li className='footer-list'>
                                <a href="https://github.com/PaillettesDev">Paillettes_</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-part' style={{ "--clr": "#fb2f6d" }}>
                        <h3>Réseau</h3>
                        <ul>
                            <li className='footer-list'>
                                <a href='https://discord.gg/WVyqW5crQA'>Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-part' style={{ "--clr": "#f9ec51" }}>
                        <h3>Site</h3>
                        <ul>
                            <li className='footer-list'>
                                <a href='/'>Home</a>
                                <a href='/recruitment'>Recrutements</a>
                                <a href='/achievement'>Réalisation</a>
                                <a href='/faction'>Faction</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='copr-container'>
                <div className='copr-row'>
                    <div className='copr-part'>
                        <a href='/Copyright'>Copyright ©2022 Paillettes_ </a>
                        <a href='legalMentions'>| Mentions légales</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;