import React, { useEffect, useState } from 'react';
import {  ref, getDownloadURL } from "firebase/storage";
import { storage } from './services/firebase';

// const imagesRef = ref(storage, 'fe_vlad.mp4')

    
function Video() {
    const [src, setUrl] = useState('')
    useEffect(() => {
            getDownloadURL(ref(storage,  'fe_vlad.mp4'))
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
        <>
        <h1>Video</h1>
        {
            src === '' ? <p>Пожди...</p> :  <video style={{width: '100%'}} autoPlay src={src}/>
        }
        </>
    );
}

export default Video;