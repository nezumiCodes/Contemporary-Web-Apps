import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, doc, addDoc, 
         orderBy, query } 
from 'firebase/firestore';

export default function useCheckins() {
    const db = getFirestore();
    const ref = collection(db, "checkins");

    const getCheckins = () => getDocs(ref);
    
    const createCheckin = (checkin) => addDoc(ref, checkin);

    const createComment = (checkinID, comment) => {
        const ref = collection(db, "checkins", checkinID, "comment");
        return addDoc(ref, comment);
    };

    const getComments = (checkinID) => {
        const ref = collection(db, "checkins", checkinID, "comment");
        return getDocs(ref);
    } 

    return {getCheckins, createCheckin, createComment, getComments};
}