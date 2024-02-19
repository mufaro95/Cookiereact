import ReactDom from 'react-dom'
import React from 'react'


import { NavBar } from './components/navbar.jsx'
import Cookie  from './components/cookie.jsx'
import { Footer } from './components/footer.jsx'

function Application(){
    return(
    <div>
        <NavBar />
        <Cookie />
        <Footer />
    </div>
    )
}


ReactDom.render(
    <Application />,
    document.getElementById('app')
)


