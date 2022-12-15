import {db} from './firebase'

import { collection, doc, getDoc, setDoc } from "firebase/firestore"; 

export const getDocumentByKey = async (value: string) => {
    const docRef = doc(db, "users", value);
    
    return getDoc(docRef);
}

export const setDeviceIdByKey = async (value: string, deviceID: string) => {
    const docRef = await getDocumentByKey(value)
    await setDoc(docRef, {
        device: deviceID})
}