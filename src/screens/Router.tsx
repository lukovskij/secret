import React, { useState } from 'react';
import Form from './Form';
import Video from './Video';
import Menu from './Menu';


type Props = {
    visitorId: string
}

function Router(props: Props) {
    const [status, setStatus] = useState<'form' | 'error' | 'video' | 'banka' | 'menu'>('form')
    
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
        <Video openMenu={() => setStatus('menu')}/>
    )
   }
   return null
}

export default Router;