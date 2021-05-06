import { makeStyles } from '@material-ui/core'
import React, { useContext, useState } from 'react'

import countryContext from '../Provider/CountryContext';

const useStyles=makeStyles((theme)=>({
    btn:{
        marginTop:"1rem",
        color:"rgba(96, 102, 208, 0.8)",
        border:"1.5px solid rgba(96, 102, 208, 0.7)",
        "& p":{
            display:"inline-block",
            margin:0,
            padding:0,
            marginRight:"1rem",
        },
        paddingLeft:"0.5rem",
        paddingTop:"0.5rem",
        paddingBlock:"0.5rem",
        borderRadius:"12px",
        cursor:"pointer",
        transition:"0.3s ease-in-out",
        "&:hover":{
            borderColor:"#F9A826",
            backgroundColor:"#F9A826",
            color:"#fff",
        },
    },
    correct:{
        marginTop:"1rem",
        color:"rgba(96, 102, 208, 0.8)",
        border:"1.5px solid rgba(96, 102, 208, 0.7)",
        "& p":{
            display:"inline-block",
            margin:0,
            padding:0,
            marginRight:"1rem",
        },
        paddingLeft:"0.5rem",
        paddingTop:"0.5rem",
        paddingBlock:"0.5rem",
        borderRadius:"12px",
        transition:"0.3s ease-in-out",
        backgroundColor:"#60BF88",
        color:"#fff",
        pointerEvents:"none",
    },
    incorrect:{
        marginTop:"1rem",
        color:"rgba(96, 102, 208, 0.8)",
        border:"1.5px solid rgba(96, 102, 208, 0.7)",
        "& p":{
            display:"inline-block",
            margin:0,
            padding:0,
            marginRight:"1rem",
        },
        paddingLeft:"0.5rem",
        paddingTop:"0.5rem",
        paddingBlock:"0.5rem",
        borderRadius:"12px",
        transition:"0.3s ease-in-out",
        backgroundColor:"#EA8282",
        color:"#fff",
        pointerEvents:"none",
    },
    initial:{
        marginTop:"1rem",
        color:"rgba(96, 102, 208, 0.8)",
        border:"1.5px solid rgba(96, 102, 208, 0.7)",
        "& p":{
            display:"inline-block",
            margin:0,
            padding:0,
            marginRight:"1rem",
        },
        paddingLeft:"0.5rem",
        paddingTop:"0.5rem",
        paddingBlock:"0.5rem",
        borderRadius:"12px",
        transition:"0.3s ease-in-out",
        pointerEvents:"none",
    }
}))

function Button({children, i,}) {

    const {checkCorrects,answerType} =useContext(countryContext);
    const classes=useStyles();

    return (
        <div className={`${answerType[i]!=="initial" && answerType[i]!=="correct" && answerType[i]!=="incorrect" ? classes.btn : ""} ${answerType[i]=="initial" && classes.initial} ${answerType[i]=="correct" && classes.correct } ${answerType[i]=="incorrect" && classes.incorrect }`} onClick={()=>checkCorrects(i)}>
            {children}
        </div>
    )
}

export default Button
