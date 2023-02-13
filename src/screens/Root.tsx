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
    return <div style={{display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', flexDirection: 'column'}}>Завантаження...</div>;
  }
  if (error) {
    return <div style={{display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', flexDirection: 'column'}}>Трапилась помилка: {error.message}</div>;
  }

  if (data) {
    // perform some logic based on the visitor data
    return (
      <>
      <img src='/images/logo.svg' className='logo'/>
       <Router visitorId={data.visitorId}/>
       <div className='footer'>
       <a className='link' href='https://send.monobank.ua/jar/3qRRwtAfQ'>
          <span>Дізнатись скільки зібрано</span> <img className='bug-icon' src='/images/money_bag.png'/>
          </a>
          <a className='link' href='https://instagram.com/fedchuk_kava'>
          <img className='bug-icon-r' src='/images/instagram.svg'/><span>fedchuk_kava</span>
          </a>
       </div>
       </>
    );
  } else {
    return null;
  }
}

export default Root;