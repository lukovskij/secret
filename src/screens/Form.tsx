import React, { useCallback, useRef, useState } from 'react';

import {db} from '../services/firebase'

import {  doc, getDoc, setDoc } from "firebase/firestore"; 

type Props = {
    visitorId: string
    handler: (status: 'form' | 'error' | 'video') => void
}
function Form(props: Props) {
   

    const ref = useRef<HTMLInputElement | null>(null)
    const [state, setState] = useState('')
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
        <div className='form-wr'>
            <div className='input-wr'><img className='input-icon' src='/images/ph_lock.svg'/> <input onChange={(e) => setState(e.target.value)} type="text" ref={ref} className='input' placeholder='Код сюди'/>   </div>
            <button disabled={!Boolean(state?.length)} className='button' type='button' onClick={() => {
                handler()
            }}>
                Го <img src='/images/cool.png'/>
            </button>
        </div>
    );
}

export default Form;