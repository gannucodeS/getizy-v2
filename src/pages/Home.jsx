import HeroSlider from '../components/HeroSlider.jsx'
import Features from '../components/Features.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Testimonials from '../components/Testimonials.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Projects from '../components/Projects.jsx'
import Team from '../components/Team.jsx'
import VideoSection from '../components/VideoSection.jsx'
import Blog from '../components/Blog.jsx'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <WhyChoose />
      <Projects />
      <Team />
      <VideoSection />
      <Blog />
    </>
  )
}
