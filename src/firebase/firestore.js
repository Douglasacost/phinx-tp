import { db } from './firebase';

const VEHICLES_COLLECTION_NAME = 'vehicles';

const addVehicle = (data) =>{
    db.collection(VEHICLES_COLLECTION_NAME).add({...data, disabled: false})
};

const getVehicles = (setter) => db.collection(VEHICLES_COLLECTION_NAME)
    .onSnapshot(setter);

const deleteDoc = (uid) => db.collection(VEHICLES_COLLECTION_NAME).doc(uid).delete();

const updateDoc = (data) => db.collection(VEHICLES_COLLECTION_NAME).doc(data.key).update(data);

export {
    addVehicle,
    getVehicles,
    deleteDoc,
    updateDoc
}