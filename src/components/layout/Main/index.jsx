import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MainLayout = ({ children }) => (
    <div>
        <Header />
        <main className="min-h-half">{children}</main>
        <Footer />
    </div>
)

export default React.memo(MainLayout)