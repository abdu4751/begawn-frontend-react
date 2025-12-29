
import './App.css'
import { ClientComments } from './Components/ClientComments'
import { DiscoveryCall } from './Components/DiscoveryCall'
import { Documentation } from './Components/Documentation'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { HeroSection } from './Components/HeroSection'
import { KeyMetrics } from './Components/KeyMetrics'
import { ProofOfWork } from './Components/ProofOfWork'
import { ServicesSection } from './Components/ServicesSection'
import { WhyChooseUs } from './Components/WhyChooseUs'

function App() {



  
  return (
    
     <section className="w-[100%] h-screen bg-[url('./assets/backgroundpatteren.png')]" >
     <Header></Header>
        <HeroSection ></HeroSection>
        <ServicesSection></ServicesSection>
        <WhyChooseUs></WhyChooseUs>
          <Documentation></Documentation>
         <ProofOfWork></ProofOfWork>
      <DiscoveryCall></DiscoveryCall>
      <KeyMetrics></KeyMetrics>
      <ClientComments></ClientComments>
      <Footer></Footer>
   
    </section>
      
  
  )
}

export default App
