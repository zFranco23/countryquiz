import React from 'react'

import {makeStyles} from '@material-ui/core';


const useStyles=makeStyles((theme)=>({
    footer:{
        "& p":{
            margin:0,
            padding:0
        },
        color:"#F2F2F2"
    },
    github:{
        textDecoration:"none"
    },
    footerText:{
        textAlign:"center",
        [theme.breakpoints.down("xs")]:{
            fontSize:"0.8rem",
        }
    }
}))
function Footer() {

    const classes=useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.flex}>
                <p className={classes.footerText}>
                    created by <a href="https://github.com/zFranco23" className={classes.github}>zFranco23</a> - devChallenges.io
                </p>
            </div>
        </div>
    )
}

export default Footer
