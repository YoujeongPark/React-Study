import React, {useState, useEffect,useMemo} from 'react';




const getColorKor = (color) => {
    console.log("getColorKor");
    switch(color){
        case "red" : 
            return "빨강";
        case "orange" : 
            return "주황";
        default:
           return "아직 잘 모름"; 
    }
};

const getMovieGenreKor = (movie) => {
    console.log("getMovieGenreKor");

    switch(movie){
        case "Marriage Story" : 
            return "로맨스";
        case "The Fast and The Furious" : 
            return "액션";    
        case "Avengers" : 
            return "슈피히어로";
        default:
            return "아직 잘 모름";
    }

}


const Info = ({color, movie})=> {

    const colorKor = getColorKor(color);
    const movieGenreKor = getMovieGenreKor(movie);

    // const colorKor = useMemo(()=> getColorKor(color), [color]);
    // const movieGenreKor = useMemo(()=> getMovieGenreKor(movie), [movie]);


    return (
        <div className = "info-wrapper">
            제가 가장 좋아하는 색은 {colorKor}이고 , <br/>
            즐겨보는 영화 장르는 {movieGenreKor} 입니다. 
        </div>
    );



};

export default Info;