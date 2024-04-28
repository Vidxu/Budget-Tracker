import React, { useState } from 'react';

function Sett() {

  return (
    <div>
      <h2>Settings</h2>
      <br/><br/><br/><br/><br/>
      <div>
        <h3>Theme</h3>
        <select>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <h3>Notifications</h3>
        <label>
          <input type="checkbox"/>
          Enable notifications
        </label>
      </div>
      <div>
        <h3>Currency</h3>
        <select>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
      
        </select>
      </div>
    </div>
  );
}

export default Sett;
