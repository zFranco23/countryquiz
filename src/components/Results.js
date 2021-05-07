import { makeStyles, Container, Typography } from '@material-ui/core';
import React,{useContext} from 'react'

import Zoom from 'react-reveal/Zoom'

import CountryContext from '../Provider/CountryContext'
import {result} from '../images';
const useStyles=makeStyles((theme)=>({
    title:{
        fontFamily:"Poppins,sans-serif",
        textTransform:"uppercase",
        fontSize:"28px",
        color:"#fff",
        fontWeight:"700",
        [theme.breakpoints.down("xs")]:{
            fontSize:"22px",
        }
    },
    containerCard:{
        maxWidth:"350px",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#fff",
        borderRadius:"24px",
        paddingTop:"3rem",
        paddingBottom:"2rem",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"420px",
        }
    },
    text:{
        fontFamily:"Poppins,sans-serif",
        fontSize:"30px",
        color:"#2F527B",
        fontWeight:"700",
        textAlign:"center",
        marginTop:"1rem"
    },
    textDescription:{
        fontFamily:"Poppins,sans-serif",
        fontSize:"24px",
        color:"#2F527B",
        fontWeight:"500",
        textAlign:"center",
        marginTop:"1rem",
        "& span":{
            color:"lightgreen",
            fontWeight:"700"
        },
        [theme.breakpoints.down("xs")]:{

        }
    },
    containerBtn:{
        display:"flex",
        justifyContent:"center",
    }
    ,
    btn:{
        border: "2px solid #1D355D",
        cursor: "pointer",
        padding: "0.5rem 2rem",
        marginTop: "2rem",
        fontFamily: "Poppins,sans-serif",
        borderRadius: "12px",
    },
    textFinal:{
        fontFamily:"Poppins,sans-serif",
        color:"#1D355D",
        fontWeight:"600",
    }
}))

function Results() {
    const classes=useStyles();

    const {countCorrects,tryAgain}=useContext(CountryContext);
    return (
        <div>
            <Zoom>
                <Container maxWidth="xs">
                    <Typography className={classes.title}>
                        Country Quiz
                    </Typography>
                    <Container className={classes.containerCard}>
                        <img src={result} alt="results"/>
                        <Typography className={classes.text}>
                            Results
                        </Typography>
                        <Typography className={classes.textDescription}>
                            You got <span>{countCorrects}</span> points
                        </Typography>
                        <div className={classes.containerBtn}>
                            <div className={classes.btn} onClick={tryAgain}>
                                <Typography className={classes.textFinal}>
                                    Try again
                                </Typography>
                            </div>
                        </div>
                        
                    </Container>
                </Container>
            </Zoom>
        </div>
    )
}

export default Results
