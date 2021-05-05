import {Grid, Container, makeStyles, Typography, CircularProgress, Button} from '@material-ui/core'
import React, { useEffect, useState } from 'react'


import {quiz} from '../images';
import {result} from '../images';

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import Zoom from 'react-reveal/Zoom';

const useStyles=makeStyles((theme)=>({
    root:{
        position:"relative",
        height:"100vh",
        background: "rgba(96, 102, 208, 0.7)",
        overflow:"hidden"
    },
    rectangle:{
        position: "absolute",
        width: "700px",
        height: "640px",
        left: "-350px",
        top: "300.28px",
        background: "rgba(96, 102, 208, 0.7)",
        borderRadius: "33px",
        transform: "rotate(-65.14deg)",
    },
    rectangle_2:{
        position: "absolute",
        width: "914px",
        height: "600px",
        left: "1000px",
        top: "-200px",
        background: "rgba(96, 102, 208, 0.7)",
        borderRadius: "33px",
        transform: "rotate(-65.14deg)",
    },
    containerCard:{
        position:"relative",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    contentCentered:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"2rem",
        marginRight:"2rem",
    },
    title:{
        fontFamily:"Poppins,sans-serif",
        textTransform:"uppercase",
        fontWeight:"700",
        color:"#F2F2F2",
        fontSize:"20px",
        lineHeight:"54px"
    },
    containerContent:{
        position:"relative",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#fff",
        borderRadius:"24px",
        padding:"2.5rem 1.5rem 1.5rem 1.5rem",


    },
    question:{
        color:"#2F527B",
        fontWeight:"700",
        fontSize:"1.2rem",
    },
    answer:{
        marginTop:"1.2rem",
        color: "rgba(96, 102, 208, 0.8)",
        fontWeight:"500",
        fontSize:"0.8rem",
        border: "1.5px solid rgba(96, 102, 208, 0.7)",
        borderRadius:"12px",
        padding:"0.6rem 0.5rem 0.6rem 0.6rem",
        cursor:"pointer",
        display:"flex",
        justifyContent:"flex-start",
        transition:"0.3s ease-in-out",
        "&:hover":{
            backgroundColor:"#F9A826",
            color:"#fff",
        },
    },
    answerCorrect:{
        color:"#fff",
        marginTop:"1.2rem",
        fontWeight:"500",
        fontSize:"0.8rem",
        border: "1.5px solid rgba(96, 102, 208, 0.7)",
        borderRadius:"12px",
        padding:"0.6rem 0.5rem 0.6rem 0.6rem",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#60BF88",
    },
    answerIncorrect:{
        color:"#fff",
        marginTop:"1.2rem",
        fontWeight:"500",
        fontSize:"0.8rem",
        border: "1.5px solid rgba(96, 102, 208, 0.7)",
        borderRadius:"12px",
        padding:"0.6rem 0.5rem 0.6rem 0.6rem",
        display:"flex",
        justifyContent:"space-between",
        backgroundColor:"#EA8282",
    },
    answerCheck:{
        marginTop:"1.2rem",
        color: "rgba(96, 102, 208, 0.8)",
        fontWeight:"500",
        fontSize:"0.8rem",
        border: "1.5px solid rgba(96, 102, 208, 0.7)",
        borderRadius:"12px",
        padding:"0.6rem 0.5rem 0.6rem 0.6rem",
        display:"flex",
        justifyContent:"flex-start",
    }
    ,
    alternative:{
        margin:0,

    },
    country:{
        margin:0,
        marginLeft:"1.5rem",
    },
    imgquiz:{
        width:"35%",
        position:"absolute",
        top:"-50px",
        right:0,
    },
    next:{
        fontFamily:"Poppins",
        fontWeight:"700",
        color:"#fff",
        backgroundColor:"#F9A826",
        textTransform:"Capitalize",
        "&:hover":{
            backgroundColor:"#cda434",
            color:"#333333",
        }
    },
    center:{
        marginTop:"1rem",
        display:"flex",
        justifyContent:"flex-end"
    },
    icon:{
        fontSize:"1 rem",
    },
    flexEnd:{
        display:"flex",
        alignItems:"center",
    },
    flexStart:{
        display:"flex",
        justifyContent:"flex",
        alignItems:"center",
    },
    contentResult:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
    ,
    result:{
        width:"75%",
    },
    titleResult:{
        color:"#1D355D",
        fontSize:"2rem",
        marginTop:"3.5rem",
        fontWeight:"700",
    },
    correctAnswer:{
        fontFamily:"Poppins,sans-serif",
        color:"#1D355D",
        fontSize:"1rem"
    },
    numberCorrects:{
        fontFamily:"Poppins,sans-serif",
        fontSize:"1.5rem",
        color:"lightgreen",
        fontWeight:"700"
    },
    tryAgain:{
        marginTop:"2rem",
        fontFamily:"Poppins,sans-serif",
        border:"2px solid #1D355D",
        padding:"0.5rem 2rem",
        borderRadius:"12px",
        cursor:"pointer"

    },
    titleTryAgain:{
        fontFamily:"Poppins,sans-serif",
        color:"#1D355D",
        fontWeight:"600",
    },
    footer:{
        position:"absolute",
        bottom:0,
    },
    footerText:{
        fontFamily:"Poppins,sans-serif",
        textAlign:"center",
        color:"#F2F2F2"
    }
    ,
    flex:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    github:{
        textDecoration:"none"
    }
}))

function Home() {

    const classes=useStyles();

    const [attempts,setAttemps]=useState(0);
    const [dataCountries,setDataCountries]=useState([]);
    const [json,setJson]=useState({});
    const [answers,setAnswers]=useState([]);
    const [alternative]=useState(["A","B","C","D"]);


    const [question,setQuestion]=useState(true);
    const [answer,setAnswer]=useState(false);
    const [indexSelected,setIndexSelected]=useState();
    const [indexCorrect,setIndexCorrect]=useState();
    const [corrects,setCorrects]=useState(0);

    const getCountries = async() =>{
        const response= await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        
        const dataTemporal = data.map(({name,capital,flag})=>({name,capital,flag}));
        const dataCountries=dataTemporal.filter((el)=> el.capital!=="");
        /* const dataCountries = data.map(({name,capital,flag})=>({name,capital,flag})); */
        setDataCountries(dataCountries);

        /* Generar index random */
        const index = Math.round(Math.random()*dataCountries.length);
        const truthJson=dataCountries.find((el,i)=> i===index);
        setJson(truthJson);

        const index2 = Math.round(Math.random()*dataCountries.length);
        const answer2=dataCountries.find((el,i)=> i===index2);

        const index3 = Math.round(Math.random()*dataCountries.length);
        const answer3=dataCountries.find((el,i)=> i===index3);

        const index4 = Math.round(Math.random()*dataCountries.length);
        const answer4=dataCountries.find((el,i)=> i===index4);

        const dataTemp=[truthJson,answer2,answer3,answer4];

        setIndexCorrect(dataTemp.indexOf(truthJson));
        setAnswers(dataTemp);
        
    }
    const handleReset= () =>{
        setAttemps(0);
        setCorrects(0);
    }
    const handleShow=(i)=>{
        setQuestion(false);
        setAnswer(true);
        setIndexSelected(i);
        if(i===indexCorrect){
            setCorrects(corrects+1);
        }

    }
    const handleShowReverse = () =>{

        /* Nuevas preguntas */
        const index = Math.round(Math.random()*dataCountries.length);
        const truthJson=dataCountries.find((el,i)=> i===index);
        setJson(truthJson);

        const index2 = Math.round(Math.random()*dataCountries.length);
        const answer2=dataCountries.find((el,i)=> i===index2);

        const index3 = Math.round(Math.random()*dataCountries.length);
        const answer3=dataCountries.find((el,i)=> i===index3);

        const index4 = Math.round(Math.random()*dataCountries.length);
        const answer4=dataCountries.find((el,i)=> i===index4);

        const dataTemp=[truthJson,answer2,answer3,answer4];

        dataTemp.sort(()=> Math.random()-0.5);

        setIndexCorrect(dataTemp.indexOf(truthJson));
        setAnswers(dataTemp);
        setQuestion(true);
        setAnswer(false);
        setAttemps(attempts+1);    
    }

    useEffect(()=>{
        getCountries();
    },[])



    return (
        <div className={classes.root}>
            <div className={classes.rectangle}>
            </div>
            <div className={classes.rectangle_2}>
            </div>
            <Container maxWidth="xs" className={classes.containerCard}>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.contentCentered}>
                        <div className={classes.content}>
                            <Typography className={classes.title}>
                                Country Quiz
                            </Typography>
                            {attempts<5 ?
                                <Zoom>
                                    <Container maxWidth="xs" className={classes.containerContent}>
                                        <img className={classes.imgquiz} src={quiz} alt="quiz"/>
                                        <Typography className={classes.question}>
                                            {json.capital} is the capital of
                                        </Typography>
                                        {
                                            question && 
                                            <>
                                                
                                                {answers.length>0 ? 
                                                    answers.map((answer,i)=>(
                                                    <div key={i} className={classes.answer} onClick={()=>handleShow(i)}>
                                                        
                                                        <p className={classes.alternative}>
                                                                {alternative[i]}
                                                        </p>
                                                        <p className={classes.country}>
                                                                {answer.name}
                                                        </p>
                                                        
                                                    </div> 
                                                    ))
                                                : <CircularProgress size={50}/>}
                                            </>
                                        }
                                        {
                                            answer && 
                                            <>

                                                {answers.length>0 ? 
                                                    answers.map((answer,i)=>{
                                                        if(i===indexSelected){
                                                            if(i===indexCorrect){
                                                                
                                                                return(
                                                                <div key={i} className={classes.answerCorrect}>
                                                                    <div className={classes.flexStart}>
                                                                        <p className={classes.alternative}>
                                                                                {alternative[i]}
                                                                        </p>
                                                                        <p className={classes.country}>
                                                                                {answer.name}
                                                                        </p>

                                                                    </div>
                                                                    <div className={classes.flexEnd}>
                                                                        <CheckCircleOutlineIcon className={classes.icon}/>
                                                                    </div>
                                                                    
                                                                </div>  
                                                                )   
                                                            }else{
                                                                return(
                                                                    <div key={i} className={classes.answerIncorrect}>
                                                                        <div className={classes.flexStart}>
                                                                            <p className={classes.alternative}>
                                                                                    {alternative[i]}
                                                                            </p>
                                                                            <p className={classes.country}>
                                                                                    {answer.name}
                                                                            </p>
                                                                        </div>
                                                                        
                                                                        <div className={classes.flexEnd}>
                                                                            <HighlightOffIcon className={classes.icon} />
                                                                        </div>
                                                                        
                                                                    </div>  
                                                                )

                                                            }
                                                        }else{
                                                            if(i===indexCorrect){
                                                                return (
                                                                <div key={i} className={classes.answerCorrect}>
                                                                    <div className={classes.flexStart}>
                                                                        <p className={classes.alternative}>
                                                                                {alternative[i]}
                                                                        </p>
                                                                        <p className={classes.country}>
                                                                                {answer.name}
                                                                        </p>
                                                                    </div>
                                                                    
                                                                    <div className={classes.flexEnd}>
                                                                        <CheckCircleOutlineIcon  className={classes.icon}/>
                                                                    </div>
                        
                                                                </div>
                                                                )
                                                            }else{
                                                                return (
                                                                    <div key={i} className={classes.answerCheck}>
                                                                        <p className={classes.alternative}>
                                                                                {alternative[i]}
                                                                        </p>
                                                                        <p className={classes.country}>
                                                                                {answer.name}
                                                                        </p>
                                                                        
                                                                    </div>
                                                                )
                                                            }
                                                        }
                                                    })
                                                : <CircularProgress size={50}/>
                                                }
                                                <div className={classes.center}>
                                                    <Button className={classes.next} disableElevation onClick={handleShowReverse}>
                                                        Next
                                                    </Button>

                                                </div>
                                                
                                            </>
                                        }
                                        
                                    </Container>
                                </Zoom>
                                
                                : 
                                <Container maxWidth="xs" className={classes.containerContent}>
                                    <div className={classes.contentResult}>
                                        <img src={result}  className={classes.result} alt="result"/>
                                        <Typography className={classes.titleResult}>
                                            Results
                                        </Typography>
                                        <Typography className={classes.correctAnswer}>
                                            You got <span className={classes.numberCorrects}>{corrects}</span> correct answers
                                        </Typography>
                                        <div className={classes.tryAgain} onClick={handleReset}>
                                            <Typography className={classes.titleTryAgain}>
                                                Try again
                                            </Typography>
                                        </div>
                                    </div>   
                                </Container>    
                            }
                            
                        </div>
                    </Grid>
                    <div className={classes.footer}>
                        <div className={classes.flex}>
                            <Typography className={classes.footerText}>
                                created by <a href="https://github.com/zFranco23" className={classes.github}>zFranco23</a>
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
