import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import HackerRank from './components/HackerRank.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import LeetCode from './components/LeetCode.jsx'
import Personal from './components/Personal.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <Experience />
        <Work />
        <Personal />
        <Skills />
        <LeetCode />
        <HackerRank />
        <Education />
      </main>
      <Footer />
    </>
  )
}
