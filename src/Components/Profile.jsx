import React from 'react'
import Email from './Email'
import Name from './Name'
import Adress from './Adress'
import PersonalInfo from './PersonalInfo'
import './Profile.css'
const Profile = () => {
  return (
    <div className='new'>
      <Email mail="guslhanfmammadova@gmail.com"/>
    <Name name="Gulshan"/>
    <Adress address='Buzovna'/>
<PersonalInfo info={20} student='Bakalavr' uni='ASOIU'/>
    </div>
  )
}

export default Profile
