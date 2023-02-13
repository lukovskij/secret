import React, { useState } from 'react';
import Form from './Form';
import Video from './Video';


type Props = {
    visitorId: string
}

function Router(props: Props) {
    const [status, setStatus] = useState<'form' | 'error' | 'video' | 'banka'>('form')
    
   if(status === 'form' || status === 'error'){
    return <div className='form-wrapper'>
        <Form handler={(status: 'form' | 'error' | 'video')=> setStatus(status)} visitorId={props.visitorId}/>
        {status === 'error' && <h1>Ойй щось пішло не так.</h1>}
    </div>
   }
   if(status === 'video') {
    return (
        <Video/>
    )
   }
   return null
}

export default Router;