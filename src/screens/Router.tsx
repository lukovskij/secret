import React, { useState } from 'react';
import Form from './Form';
import Video from './Video';
import Menu from './Menu';
import { useIsSafari } from '../helpers';


type Props = {
    visitorId: string
}

function Router(props: Props) {
    const [status, setStatus] = useState<'form' | 'error' | 'video' | 'banka' | 'menu'>('form')
    const isSafari = useIsSafari()
    
    if(status === 'menu') {
        return <Menu handler={() => setStatus('video')}/>
    }
   if(status === 'form' || status === 'error'){
    return <div className='form-wrapper'>
        <Form handler={(status: 'form' | 'error' | 'video')=> setStatus(status)} visitorId={props.visitorId}/>
        {status === 'error' && <h1>Ойй щось пішло не так.</h1>}
    </div>
   }
   if(status === 'video') {
    return (
        <Video isSafari={isSafari} openMenu={() => setStatus('menu')}/>
    )
   }
   return null
}

export default Router;