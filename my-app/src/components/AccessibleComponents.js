import React from 'react'
import '../styles/AccessibleComponents.css';
import NikeBefore from '../assets/NikeBefore.svg'
import NikeAfter from '../assets/NikeAfter.svg'

export default function AccessibleComponents() {
  // TODO: change the folor of filter & faster to be red 
  return (
    <div className="main-box">
    <h1>Accessible Components</h1>
    <h2>re-imagining access & exploring possibilities </h2>
    <h3>what if you could filter by key word for faster menu navigation via keyboard? </h3>
    <img className="img" src={NikeBefore} alt="picture of dropdown menu on Nike website"/>
    <img className="img" src={NikeAfter} alt="picture of dropdown menu on Nike website with search by keyword capability" />
    <h2 className="left-aligned-text"> accessibility reflection</h2>
    

    </div> // main-box div

  )
}