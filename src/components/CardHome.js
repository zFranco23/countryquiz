import React,{useContext, useEffect} from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core';


import Zoom from 'react-reveal/Zoom';
import countryContext from '../Provider/CountryContext';

import CapitalGame from './CapitalGame';
import FlagsGame from './FlagsGame';
import Footer from './Footer';

const useStyles=makeStyles((theme)=>({
    root:{
        backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/background.png)`,
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        minHeight:"100vh",
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column",
        alignItems:"center",
    },
    title:{
        fontFamily:"Poppins,sans-serif",
        textTransform:"uppercase",
        fontSize:"33px",
        color:"#fff",
        fontWeight:"700",
    },
    containerCard:{
        maxWidth:"300px",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#fff",
        borderRadius:"24px",
        paddingTop:"3rem",
        paddingBottom:"2rem",
    },
    text:{
        fontFamily:"Poppins,sans-serif",
        textAlign:"center",
        fontSize:"1.2rem",
        fontWeight:"600",
    },
    btn:{
        textAlign:"center",
        margin:"1.25rem",
        padding:"1rem 1.5rem",
        cursor:"pointer",
        borderRadius:"25px",
        backgroundColor:"#f9a826",
    },
    containerMain:{
        margin:"auto",
    }
}))
function CardHome() {

    const {
        setStillPlay,
        setInitCapitals,
        initCapitals,
        generateQuestionsCapital,
        setInitFlags,
        initFlags,
        generateQuestionsFlag,
    }=useContext(countryContext);
    const classes=useStyles();

    const handleInitCapitals = () => {
        setStillPlay(true);
        generateQuestionsCapital();
        setInitCapitals(true);
    }
    const handleInitFlags = () => {
        setStillPlay(true);
        generateQuestionsFlag();
        setInitFlags(true);
    }

    return (
        <div className={classes.root}>
            {initCapitals && !initFlags && <CapitalGame />}
            {!initCapitals && initFlags && <FlagsGame />}
            {!initCapitals && !initFlags && 
                <Zoom>
                    <div className={classes.containerMain}>
                        <Typography className={classes.title}>
                            Country Quiz
                        </Typography>
                        <Container maxWidth="xs"className={classes.containerCard}>
                            <Typography className={classes.text}>
                                We have 2 types of questions
                            </Typography>
                            <Typography className={classes.text}>
                                Choose one and try it !
                            </Typography>
                            <div className={classes.btn} onClick={handleInitCapitals}>
                                Capitals
                            </div>
                            <div className={classes.btn} onClick={handleInitFlags}>
                                Flags
                            </div>
                        </Container>
                    </div>        
                </Zoom>
            }
            <Footer />
                      
        </div>
    )
}

export default CardHome
