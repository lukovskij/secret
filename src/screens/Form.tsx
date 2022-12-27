import React, { useCallback, useRef, useState } from 'react';

import {db} from '../services/firebase'

import {  doc, getDoc, setDoc } from "firebase/firestore"; 

type Props = {
    visitorId: string
    handler: (status: 'form' | 'error' | 'video') => void
}
function Form(props: Props) {
   

    const ref = useRef<HTMLInputElement | null>(null)
    const handler = useCallback(async () => {
        const value: string | undefined = ref.current?.value?.toString?.()
        if(value === undefined){
            props.handler('error')
            return
        }
        const docRef = doc(db, "users", value);
        const docSnap = await getDoc(docRef);

     
        
        if(docSnap?.exists()){
            console.log(docSnap.data()?.device, props.visitorId)
            if(docSnap.data()?.device === props.visitorId){
               props.handler('video')
            }else if(!docSnap.data()?.device){
            await setDoc(docRef, {
                device: props.visitorId});
                props.handler('video')
            }else {
                props.handler('error')
            }
           
        
        }else {
            props.handler('error')
        }
    }, [])
    return (
        <>
         <h1>
        Давай код!
      </h1>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',width: '100%', padding: '0 16px'}}>
            <input type="text" ref={ref} style={{height: '32px', width: '100%', border: '1px solid red', marginBottom: '16px', marginTop: '16px'}}/>   
            <button type='button' onClick={() => {
                handler()
            }}>
                Стартуєм!
            </button>
        </div>
        </>
    );
}

export default Form;