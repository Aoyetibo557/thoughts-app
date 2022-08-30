import React from 'react'
import SettingComp from '../components/SettingComp/SettingComp';

function SettingsPage({userdata}) {
 
  return (
    <div>
      <h4>Setting</h4>
      <SettingComp userData={userdata} />
    </div>
  )
}

export default SettingsPage