import React from "react"
import './App.sass'
import { Header } from "./components/Header"
import { Home } from "./components/Home";
import { WhoWeAre } from "./components/WhoWeAre";
import { Separator } from "./components/Separator";
import { History } from "./components/History";
import BeADonor from './components/BeADonor';
import Supporters from './components/Supporters';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App:React.FC = () => {
  
  return (
    <>
      <Header/>
      <Home/>
      <Separator tamanho={"100%"} />
      <WhoWeAre/>
      <Separator tamanho={"100%"} />
      <History/>
      <Separator tamanho={"100%"} />
      <BeADonor/>
      <Separator tamanho={"100%"} />
      <Supporters/>
      <Separator tamanho={"100%"} />
      <ContactUs/>
      <Footer/>
    </>
  )
}
export {App}