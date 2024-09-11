import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import { Projects } from '@/components/Projects'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import SocialLinks from '@/components/SocialLinks'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Achievements />
      <SocialLinks />
      <Contact />
    </main>
  )
}