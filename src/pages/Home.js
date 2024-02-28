import React from "react";
import anime_list from "../data-src/anime-list";
import Card from "../components/Card";

export default function Home () {

    const [input, setInput] = React.useState('');

    const handleUserInput = (e) => {
        setInput(e.target.value.toLowerCase());
    };

    function exitButtonHandler () {
        document.querySelector(".pop-up-anime-rating").innerHTML = "";
        document.querySelector(".pop-up-container").style.display = "none";
    }


    return (
        <>

            <div className="pop-up-container">
                <div className="pop-up">
                    <div className="pop-up-exit-container" onClick={exitButtonHandler}>
                        <div className="pop-up-exit">
                            <p>X</p>
                        </div>
                    </div>
                    <p className="pop-up-anime-title">__</p>
                    <p className="pop-up-anime-rating"></p>
                    <p className="pop-up-anime-tags">__</p>
                    <p className="pop-up-anime-description">__</p>

                    <br></br>
                    <p>Watch now:</p>
                    <hr></hr>
                    <a href="#" target="_blank" className="pop-up-anime-link">__</a>
                </div>
            </div>

            <div id="search-menu">
                <input onChange={handleUserInput} type="text" name="search-animes" placeholder="ex. 'One Piece'"></input>
                <p>Search the anime of your choice.</p>
            </div>

            <div id="results-menu">

                <section className="results-container">
                    
                    {anime_list.filter(anime => anime.anime_search_Title.includes(input)).map(Card)}

                </section>

            </div>

            <a href="#nav-bar"><div className="up-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
                    <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                </svg>
            </div></a>

        </>
    );
}