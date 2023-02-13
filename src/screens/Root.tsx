// src/App.js
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'

import Router from './Router'
import React from 'react'


function Root() {
  const {
    isLoading,
    error,
    data,
  } = useVisitorData();


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (data) {
    // perform some logic based on the visitor data
    return (
      <>
      <img src='/images/logo.svg' className='logo'/>
       <Router visitorId={data.visitorId}/>
       <div className='footer'>
          <a className='link' href='#hello'>
          <span>Дізнатись скільки зібрано</span> <img className='bug-icon' src='/images/money_bag.png'/>
          </a>
          <a className='link' href='#hello'>
          <img className='bug-icon-r' src='/images/insta.png'/><span>fedchuk_kava</span>
          </a>
       </div>
       </>
    );
  } else {
    return null;
  }
}

export default Root;