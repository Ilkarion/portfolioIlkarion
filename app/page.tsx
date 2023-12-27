import GetInTouch from '@/components/GeiInTouch/GetInTouch'
import Header from '@/components/Header/Header'
import NavBar from '@/components/NavBar/NavBar'
import ProjectExamples from '@/components/ProjectExamples/ProjectExamples'
import Skills from '@/components/Skills/Skills'


export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Skills />
      <ProjectExamples />
      <GetInTouch />
    </>
  )
}
