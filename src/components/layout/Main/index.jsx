import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className="min-h-half">{children}</main>
    <Footer />
  </>
)

export default React.memo(MainLayout)
