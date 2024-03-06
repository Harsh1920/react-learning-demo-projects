import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import './Style.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/theme-context'


const ThemeMode = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default ThemeMode