import './App.css'
import { HashRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Links from './routes/Links'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)

    const clockInterval = setInterval(() => {
      const clock = document.getElementById('clock')
      if (clock) {
        clock.innerText = new Date().toLocaleTimeString()
      }
    }, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(clockInterval)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <HashRouter>
        <Analytics />
        <Links />
        <p id="clock"></p>

        {showTop && (
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </HashRouter>
    </>
  )
}

export default App
