import React from 'react';

const Home=React.lazy(()=> import("./views/Home"));
const Questions=React.lazy(()=> import("./views/Questions"));
const Results=React.lazy(()=> import("./views/Results"));

const routes =[
    {path:"/", name:"Home", component:Home},
    {path:"/questions", name:"Questions", component:Questions},
    {path:"/results", name:"results", component:Results},
]

export default routes;