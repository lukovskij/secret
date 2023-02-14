import React, { useEffect, useState } from 'react';
import {  ref, getDownloadURL } from "firebase/storage";
import { storage } from '../services/firebase';

// const imagesRef = ref(storage, 'fe_vlad.mp4')

type Props = {
  openMenu: () => void
}
    
function Video(props: Props) {
    const [src, setUrl] = useState('')
    useEffect(() => {
            getDownloadURL(ref(storage,  'fedchuk_2.mp4'))
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
    setUrl(url)
  })
  .catch((error) => {
   console.log('error')
  });
        
    }, [])
    return (
        <div className='video'>
          <h6 style={{width: '100%', height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontSize: '24px'}}>
          <div>Тут скоро щось буде <img src="/images/tss.png" className='smile'/></div>
          </h6>
        {/* {
            src === '' ? <p>Завантаження...</p> :  <video style={{width: '100%', height: 'auto', maxHeight: '70vh'}} autoPlay controls src={src}/>
        } */}
        <div>
        А поки насолоджуйся <img src="/images/love.png" className='smile'/>
        <button className='button button-outline' type='button' onClick={props.openMenu}>
                Інструкція для глінтвейну
            </button>
            </div>
        </div>
    );
}

export default Video;