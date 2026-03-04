import React from 'react'
import ReactDOM from 'react-dom/client'


const Title=()=>{
    return (
        <h1>Namaste React Using JSX</h1>
    )
}
const h1=React.createElement("h1",{},"this is react component")
const elem=410133
const HeadingComponent=()=>{

    return(
        <div id="parent">
            <Title />
            {h1}
            {elem }
            <h1>Yoh ho</h1>
        </div>
    )
}

const root=ReactDOM.createRoot(document.querySelector("#root"));

// root.render(jsxHeading)
root.render(<HeadingComponent />)