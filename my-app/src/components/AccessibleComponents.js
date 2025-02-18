import React from 'react'
import '../styles/AccessibleComponents.css';
import NikeBefore from '../assets/NikeBefore.svg'
import NikeAfter from '../assets/NikeAfter.svg'
import DropdownScreenshot from '../assets/DropdownScreenshots.svg'

/* imports related to state diagram gallery */
// import ImageSlider from './ImageSlider'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import keyboardBefore from '../assets/stateDiagrams/keyboard_before.svg'
import keyboardAfter from '../assets/stateDiagrams/keyboard_after.svg'
import mouseBefore from '../assets/stateDiagrams/mouse_before.svg'
import mouseAfter from '../assets/stateDiagrams/mouse_after.svg'

import inputTable from '../assets/IODiagrams/inputTable.svg'
import outputTable from '../assets/IODiagrams/outputTable.svg'

const stateDiagramImages = [
  {
    original: keyboardBefore,
    thumbnail: keyboardBefore,
    originalHeight: 'true',
    originalWidth: 'true',
    description: 'keyboard state diagram',
  },
  {
    original: keyboardAfter,
    thumbnail: keyboardAfter,
    originalHeight: 'true',
    originalWidth: 'true',
    description: 'keyboard state diagram with new accessibility feature in red',
  },
  {
    original: mouseBefore,
    thumbnail: mouseBefore,
    originalHeight: 'true',
    originalWidth: 'true',
    description: 'mouse state diagram',
  },
  {
    original: mouseAfter,
    thumbnail: mouseAfter,
    originalHeight: 'true',
    originalWidth: 'true',
    description: 'mouse state diagram with new accessibility feature in red',

  },
];

export function AccessibilityResponse1() {
  return (
    <p>
    when exploring the accessibility of drop down menus across popular websites including Nike, Qualtrics, and Google Forms, I noticed: <br/>
    non-standardized user interaction across drop-down menus 
    e.g. some sites activate the dropdown on hover while others do only on click 
    differing levels of efficiency vs usability 
    e.g. Google Forms allows for filtering by keyword but Nike does not
    the most accessible allowed for a diversity of ways to accomplish a task
    for example, being able to activate a dropdown menu by hovering over it OR clicking on it OR  being able to navigate with keyboard via focus 
    </p>
  )
}

export function InputsOutputsTable() {
  return (
    <p>
      INSERT INPUTS / OUTPUTS TABLE HERE
    </p>
  )
}

export function AccessibilityResponse2() {
  return (
    <p>
    One example of in-accessibility for dropdown menu outputs is that without a filtering option, people who use screen readers may have to wait a long time to get to the dropdown option they are looking for. This decrease in efficiency directly impacts usability and access.<br/><br/>
    
    Another example of in-accessibility are site-specific differences around interaction norms. This is particularly impactful for people who use screen readers because without clear visual cues to communicate user-interaction modalities, users experience decreased learnability, intuition, and confidence when navigating digital content. <br/><br/>
    
    These access disparities highlight how visually-able mouse-users are often prioritized in digital design, followed by visually-able keyboard users followed by people who use screenreaders. These differences in access go beyond good design to dictate the worlds people have access to (Holmes), necessitating investment and innovation for a world where everyone has access. 
    </p>
  )
}

export function AccessibilityResponse3() {
  return (
  <div>
    <p style={{color: '#E86249', fontWeight: 'bold'}}>
    To increase accessibility, I added a feature that allows you to filter drop-down menus by keyword via keyboard-only interaction
  </p>
  
   <p>
    This feature solves for mismatches between user needs and the real world, including: <br/>
    
    reducing cognitive load for people with cognitive disabilities
    increasing learnability of product offerings for first time users
    increasing efficiency for power-users who want to search via dropdown 
    increasing the efficiency of keyboard and screen-reader users who want to know all menu categories that contain keyword
  </p>
  </div>
  )
}

export function ExplorationSection() {
  return (
  <div>
    <p>
      We cannot change what we are not aware of. To explore opportunities for accessibility innovation, I first explored the strengths and weaknesses of popular dropdown menu interfaces including Qualtrics, Google Forms, and Nike.
    </p>
    <img className="img" src={DropdownScreenshot} alt="Dropdown menus from Qualtrics, Google Forms, and Nike"/>
  </div>
  )
}

export function IOTableSection() {
  return (
  <div class='container'>
    <div class='box' id='left-col'>
    <img className="img" src={inputTable} alt="table of input interaction options for dropdown menus at Qualtrics, Nike, Google Forms"/>
    <div style={{margin:'15px'}}></div>
    <img className="img" src={outputTable} alt="table of output interaction options for dropdown menus at Qualtrics, Nike, Google Forms"/>
    </div>
    <div class='box' id='right-col'>
      <h2 style={{textAlign: 'left'}}>analyzing accessibility of input/output modalities</h2>
      <p>
        <span style={{fontWeight: 'bold'}}>Takeaways:</span> <br />
        <ul style={{ listStyleType: 'disc' }}>
                    <li>non-standardized user interaction across drop-down menus 
                      <ul> <li>
                          e.g. some sites activate the dropdown on hover while others do only on click
                      </li> </ul>
                    </li>
                    <li>differing levels of efficiency vs usability 
                      <ul><li> 
                        e.g. Google Forms allows for filtering by keyword but Nike does not
                      </li></ul>
                    </li>
                    <li>the most accessible allowed for a diversity of ways to accomplish a task
                      <ul><li>
                        e.g. being able to activate a dropdown menu by hovering over it OR clicking on it OR  being able to navigate with keyboard via focus 
                      </li></ul>
                    </li>
        </ul>
        
        This is  <span style={{fontWeight: 'bold'}}> inaccessible </span> because: 
        <ul>
          <li>
          site-specific differences in interaction norms creates decreased learnability, intuition, and confidence when navigating digital content 
          </li>
          <li>
            without a filtering option, people who use screen readers have to wait a long time to find the dropdown option they are looking for. Decreased efficiency harms access and usability.
          </li>
        </ul>
        <span style={{fontWeight: 'bold'}}>This matters because...<br/></span>
      
        These access disparities highlight how visually-able mouse-users are often prioritized in digital design, followed by visually-able keyboard users followed by people who use screenreaders. These differences in access go beyond good design to dictate the worlds people have access to (Holmes), necessitating investment and innovation for a world where everyone has access. 
      </p>
    </div>
  </div>
  )
}


export function CustomImageGallery() {
  return (
      <div className='image-gallery-wrapper'>
      <ImageGallery items={stateDiagramImages} showNav={false}/>
      </div>
  )

}

// export function inputOutputTables() {
//   return (
//     // <div className='two-col-flexbox'>
//     //   <div className='left-col'>
//       <div>
//       <img className="img" src={inputTable} alt="table of input interaction options for dropdown menus at Qualtrics, Nike, Google Forms"/>
//       <img className="img" src={outputTable} alt="table of output interaction options for dropdown menus at Qualtrics, Nike, Google Forms"/>

//       <img className="img" src={DropdownScreenshot} alt="Dropdown menus from Qualtrics, Google Forms, and Nike"/>

//       </div>
//   )
// }

/**
 *       <div className='right-col'>
      //   <p>
      //     sample p text on the right
      //   </p>
      // </div>
    // </div>
 * 
 */

export default function AccessibleComponents() {
  // TODO: change the folor of filter & faster to be red 
  return (
    <div className="main-box">
    <h1>Accessible Components</h1>
    <h2>re-imagining access & exploring possibilities </h2>



    <h2 className="left-aligned-text">what if you could <span style={{color: '#E86249'}}> filter </span> by key word for  <span style={{color: '#E86249'}}> faster </span> menu navigation via keyboard? </h2>
    <img className="img" src={NikeBefore} alt="dropdown menu on Nike website"/>
    <img className="img" src={NikeAfter} alt="dropdown menu on Nike website with search by keyword capability" />

    <h2 className="left-aligned-text">exploring the dropdown accessibility landscape 🔎</h2>
    <ExplorationSection/>

    <h2 className="left-aligned-text"> analyzing accessibility of popular dropdown interfaces 🤔</h2>
    <IOTableSection />
    {/* <ExplorationSection/> */}
    {/* <inputOutputTables /> */}



    <h2 className="left-aligned-text">mapping out digital interactions through state diagrams 🗺</h2>
    {/* <ImageGallery items={images} /> */}
    <CustomImageGallery />


    <h4>exploring existing accessibility features for dropdown menus</h4>
    <AccessibilityResponse1/>

    <h4>analyzing existing ways users can experience dropdown menus</h4>
    <InputsOutputsTable/>
    <AccessibilityResponse2/>
    <h4>designing more accessible dropdown menus</h4>
    <h5>“Accessibility is about solving for mismatches between users and the real world” - Kat Holmes</h5>
    <AccessibilityResponse3/>
    </div> // main-box div

  )
}