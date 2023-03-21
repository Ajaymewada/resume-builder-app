import React, { useState } from 'react'

import '../Styles/Build.css'
import TabCard from './TabCard'
function BuildResume() {
  const [tabNumber, setTabNumber] = useState('0')
  const HandleTabs = (e) => {
    setTabNumber(e.target.getAttribute("tabnumber"))
  }
  return (
    <div>
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-lg-8 mt-5">
          <ul className='Tabs'>
            <li className={tabNumber === '0' ? 'Tab active' : 'Tab'} tabnumber='0' onClick={HandleTabs}>Basic</li>
            <li className={tabNumber === '1' ? 'Tab active' : 'Tab'} tabnumber='1' onClick={HandleTabs}>Education</li>
            <li className={tabNumber === '2' ? 'Tab active' : 'Tab'} tabnumber='2' onClick={HandleTabs}>Projects</li>
            <li className={tabNumber === '3' ? 'Tab active' : 'Tab'} tabnumber='3' onClick={HandleTabs}>Certifications</li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-10">
          <TabCard tabnumber={tabNumber} />
        </div>
      </div>
    </div>
  )
}

export default BuildResume