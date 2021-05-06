import { makeStyles, Typography, Container } from '@material-ui/core';
import React, { useContext } from 'react'

import Zoom from 'react-reveal/Zoom'

import countryContext from '../Provider/CountryContext';
import Button from './Button';


import {quiz} from '../images';

const useStyles=makeStyles((theme)=>({
    title:{
        fontFamily:"Poppins,sans-serif",
        textTransform:"uppercase",
        fontSize:"28px",
        color:"#fff",
        fontWeight:"700",
        [theme.breakpoints.down("xs")]:{
            fontSize:"25px",
        }
    },
    containerCard:{
        position:"relative",
        minWidth:"400px",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#fff",
        borderRadius:"24px",
        minHeight:"55vh",
        paddingTop:"3rem",
        [theme.breakpoints.down("xs")]:{
            minWidth:"unset",
        }
    },
    text:{
        fontFamily:"Poppins,sans-serif",
        fontSize:"22px",
        color:"#2F527B",
        fontWeight:"700",
    },
    containerBtn:{
        display:"flex",
        justifyContent:"flex-end",
        marginTop:"1rem",
        marginBottom:"1rem",
        transition:"all 0.3s ease-in-out"
    },
    btn:{
        backgroundColor:"#F9A826",
        padding:"0.5rem 1rem",
        borderRadius:"12px",
        color:"#fff",
        cursor:"pointer",
        transition:"0.3s ease-in-out",
        "&:hover":{
            backgroundColor:"#F9A810",
            transform:"translateY(-1px)"
        }
    },
    btnOff:{
        backgroundColor:"#F9A826",
        padding:"0.5rem 1rem",
        borderRadius:"12px",
        color:"#fff",
        pointerEvents:"none",
        transition:"0.3s ease-in-out",
        "&:hover":{
            backgroundColor:"#F9A810",
            transform:"translateY(-1px)"
        },
        opacity:0,
    },
    img:{
        width:"120px",
        position:"absolute",
        top:-40,
        right:0,
    }
}))
function CapitalGame() {

    const classes=useStyles();
    const options=["A","B","C","D"];

    const {answersCapital,answerCapitalCorrect,checked,attempts,resetCapitalQuestions}=useContext(countryContext);

    return (
        
        <>
            {attempts<5 && <Zoom>
                <Container>
                    <Typography className={classes.title}>
                        Country Quiz
                    </Typography>
                    <Container className={classes.containerCard}>
                        <img src={quiz} alt="quiz"  className={classes.img}/>
                        <Typography className={classes.text}>
                            {answerCapitalCorrect.capital} is the capital of :
                        </Typography>

                        {answersCapital.map((answer,index)=>(
                            <Button key={index} i={index} >
                                <p>{options[index]}</p>{answer}
                            </Button>
                        ))}
                        {checked && <div className={classes.containerBtn}>
                            <div className={classes.btn} onClick={resetCapitalQuestions}>
                                Next
                            </div>
                        </div>}
                        {!checked && <div className={classes.containerBtn}>
                            <div className={classes.btnOff}>
                                -
                            </div>
                        </div>}
                        
                    </Container>
                </Container>           
            </Zoom> }
            
        </> 
        
    )
}

export default CapitalGame
