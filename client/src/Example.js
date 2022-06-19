import React, {useState, useEffect, useCallback} from 'react';
import Info from "./Info";

const Example = ()=> {
    const [color, setColor] = useState("");
    const [movie, setMovie] = useState("");

    const onChangeHandler = useCallback((e)=> {
        if(e.target.id === "color"){
            setColor(e.target.value);
            console.log("set color console log");
        }            
        else{
            setMovie(e.target.value);
            console.log("set Movie");
        } 

    },[])

    //console.log("App 실행");

    // const onChangeHandler = (e) => {
    //     if(e.target.id === "color"){
    //         setColor(e.target.value);
    //         console.log("set color console log");
    //     }            
    //     else{
    //         setMovie(e.target.value);
    //         console.log("set Movie");
    //     } 
            
    // }; // 변할때마다 계속 렌더링됨 
    // 이 함수가 계속 선언될 필요가 잇을까? 제일 처음 선언되고 재 사용되면 좋을것 같은데 
  

    return (
        <div className = "App">
            <div>
                <label>
                    Color
                    <input id = "color" 
                           value = {color}
                           onChange = {onChangeHandler}/>
                </label>
            </div>
            <div>
                What is your favorite movie among these?
                <label>
                    <input 
                        type = "radio"
                        name = "movie"
                        value = "Marriage Story"
                        onChange = {onChangeHandler}/>
                        Marriage Story
                </label>
                <label>
                    <input 
                        type = "radio"
                        name = "movie"
                        value = "The Fast and The Furious"
                        onChange = {onChangeHandler}/>
                        The Fast and The Furious
                </label>
                <label>
                    <input 
                        type = "radio"
                        name = "movie"
                        value = "Avengers"
                        onChange = {onChangeHandler}/>
                        Avengers
                </label>
                <Info 
                    color = {color}
                    movie = {movie}/>
            </div>
        </div>
    );



};

export default Example;