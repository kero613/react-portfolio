import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true)
      } else {
        setShowScrollBtn(false)
      }
    });
  }, []);

  return (
    <div id='up' className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />


      <a style={{ opacity: showScrollBtn ? 1 : 0, transition: "1s" }} href='#up'>
        <button className='scroll2Top icon-keyboard_arrow_up'></button>
      </a>

    </div>
  )
}

export default App
