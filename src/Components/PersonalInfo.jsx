import React from 'react'

const PersonalInfo = ({info,uni,student}) => {
  return (
    <div>
      <p>Age:{info}</p>
      <p>Universitet:{uni}</p>
      <p>Tehsil Seviyyesi:{student}</p>

    </div>
  )
}

export default PersonalInfo
