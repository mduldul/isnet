import React from 'react'
import Navigation from '../navbar/navigation'
import Footer from '../footer/footer'

const Content = ({ children }) => {
    return (
        <main>
            <Navigation />
            {children}
            <Footer />
        </main>
    )
}

export default Content
