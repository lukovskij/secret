import React, { useEffect, useState } from 'react';
import {  ref, getDownloadURL } from "firebase/storage";
import { storage } from '../services/firebase';

// const imagesRef = ref(storage, 'fe_vlad.mp4')

type Props = {
  openMenu: () => void
}

const setItemLS = (key: string, value: any) => {
  try {

    window.localStorage.setItem(key, JSON.stringify(value))

  }catch (err) {
    console.log(err)
  }
}

const getItemLS = (key: string) => {
  try {
   const value = JSON.parse(window.localStorage.getItem(key) || '1')
   return value
  }
  catch (err) {
    console.log(err)
    return 1
  }
}

function Video(props: Props) {
    const [src, setUrl] = useState('')
    useEffect(() => {
      const ls_counter = getItemLS('VID')

            getDownloadURL(ref(storage,  `f_${ls_counter}.mp4`))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    console.log(url, 'url')
    let counter = ls_counter >= 3 ? 1 : ls_counter+1
    
    setItemLS('VID', counter)
    setUrl(url)
  })
  .catch((error) => {
   console.log('error')
  });
        
    }, [])
    return (
        <div className='video'>
        {
            src === '' ? <p>Завантаження...</p> :  <div dangerouslySetInnerHTML={{ __html: `
            <video style={{width: '100%', height: 'auto', maxHeight: '70vh'}} autoplay loop playsinline>
              <source src=${src} type="video/mp4"/>
            </video>
          `}}>

            </div>
        }
        <div>
        <button className='button button-outline' type='button' onClick={props.openMenu}>
                Інструкція для глінтвейну
            </button>
            </div>
        </div>
    );
}

export default Video;