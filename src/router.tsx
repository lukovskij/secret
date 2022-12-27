import React, { ReactNode, useState } from 'react';
import Form from './form';
import Video from './video';


type Props = {
    visitorId: string
}

function Router(props: Props) {
    const [status, setStatus] = useState<'form' | 'error' | 'video' | 'banka'>('form')
    
   if(status === 'form' || status === 'error'){
    return <>
    <iframe src={`${window.origin}/proxy/3qRRwtAfQ`} />
        <Form handler={(status: 'form' | 'error' | 'video')=> setStatus(status)} visitorId={props.visitorId}/>
        {status === 'error' && <h1>Не найобуй бо видалю з чата!</h1>}
    </>
   }
   if(status === 'video') {
    return (
        <Video/>
    )
   }
   if(status === 'banka'){
    return <a href='http://send.monobank.ua/jar/5FWWoSbAA3' target={'_blank'} style={{width: '100%', height: '100vh'}}/>
   }
}

export default Router;