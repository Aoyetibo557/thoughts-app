import React from 'react'
import SettingComp from '../components/SettingComp/SettingComp';

function SettingsPage({userdata}) {
 
  return (
    <div>
      <SettingComp userData={userdata} />
    </div>
  )
}

export default SettingsPage