import React, { useState, useEffect } from 'react'

import CountryContext from './CountryContext';

function Provider({children}) {


    const [dataCountries,setDataCountries]=useState([]);

    /*Tipo de juego */
    const [attempts,setAttempts]=useState(0);
    const [initCapitals,setInitCapitals]=useState(false);
    const [answerCapitalCorrect,setAnswerCapitalCorrect]=useState(null);
    const [indexCorrect,setIndexCorrect]=useState(null);
    const [answersCapital,setAnswersCapital]=useState([]);
    const [answerType,setAnswerType]=useState([]);
    const [checked,setChecked]=useState(false);

    const [initFlags,setInitFlags]=useState(false);
    const [answerFlagCorrect,setAnswerFlagCorrect]=useState(null);
    const [indexCorrectFlag,setIndexCorrectFlag]=useState(null);
    const [answersFlag,setAnswersFlag]=useState([]);



    const getCountries = async() =>{

        const response= await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();

        const dataTemporal = data.map(({name,capital,flag})=>({name,capital,flag}));
        const dataCountries=dataTemporal.filter((el)=> el.capital!=="" && el.name!=="");
        setDataCountries(dataCountries);
    }

    //Capital
    const generateQuestionsCapital = ()=>{
        let dataQuestions=new Array();
        /* 5 Questions */
        //correct
        const correct=Math.round(Math.random()*3);
        setIndexCorrect(correct);
        for(let i=0;i<4;i++){
            const random=Math.round(Math.random()*dataCountries.length);
            if(i === correct){
                setAnswerCapitalCorrect({name : dataCountries[random].name , capital :dataCountries[random].capital});
            }
            dataQuestions.push(dataCountries[random].name);
        }
        setAnswersCapital(dataQuestions);
    }

    const checkCorrects = (iSelected) =>{
        if(initCapitals){
            let arrayTypes=new Array();
            answersCapital.map((el,i)=>{
                if(i === iSelected){
                    if(i=== indexCorrect){
                        arrayTypes.push("correct");
                    }else{
                        arrayTypes.push("incorrect");
                    }
                }else{
                    if(i=== indexCorrect){
                        arrayTypes.push("correct");
                    }else{
                        arrayTypes.push("initial");
                    }
                }
            })
            setAnswerType(arrayTypes);
            setChecked(true);
        }
        if(initFlags){
            let arrayTypes=new Array();
            answersFlag.map((el,i)=>{
                if(i === iSelected){
                    if(i=== indexCorrectFlag){
                        arrayTypes.push("correct");
                    }else{
                        arrayTypes.push("incorrect");
                    }
                }else{
                    if(i=== indexCorrectFlag){
                        arrayTypes.push("correct");
                    }else{
                        arrayTypes.push("initial");
                    }
                }
            })
            setAnswerType(arrayTypes);
            setChecked(true);
        }
        
    }
    const resetCapitalQuestions = () =>{
        generateQuestionsCapital();
        setAnswerType([]);
        setChecked(false);
        setAttempts(attempts+1);
    }

    //Flags

    const generateQuestionsFlag = () =>{
        let dataQuestionsFlag=new Array();
        const correctFlag=Math.round(Math.random()*3);
        setIndexCorrectFlag(correctFlag);

        for(let i=0;i<4;i++){
            const random=Math.round(Math.random()*dataCountries.length);
            if(i == correctFlag){
                setAnswerFlagCorrect({name : dataCountries[random].name , flag :dataCountries[random].flag});
            }
            dataQuestionsFlag.push(dataCountries[random].name);
        }
        setAnswersFlag(dataQuestionsFlag);
    }

    const resetFlagQuestions = () =>{
        generateQuestionsFlag();
        setAnswerType([]);
        setChecked(false);
        setAttempts(attempts+1);
    }

    useEffect(()=>{
        getCountries();
    },[])

    return (
        <CountryContext.Provider value={
            {
                dataCountries,
                initCapitals,
                setInitCapitals,
                attempts,
                generateQuestionsCapital,
                answersCapital,
                answerCapitalCorrect,
                checkCorrects,
                checked,
                answerType,
                resetCapitalQuestions,

                initFlags,
                setInitFlags,
                generateQuestionsFlag,
                answerFlagCorrect,
                answersFlag,
                resetFlagQuestions,
            }}>
            {children}
        </CountryContext.Provider>
    )
}

export default Provider
