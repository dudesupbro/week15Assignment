import React from 'react';
import { NewMasterForm } from './NewMasterForm';



export const Dog = (props) => {
    const { dog, updateDog } = props;

    const deleteMaster = (masterId) => {
        const updatedDog = {
            ...dog,
            masters: dog.masters.filter((x) => x._id !== masterId)
        };
        updateDog(updatedDog);
    }

    const addNewMaster = (master) => updateDog({ ...dog, masters: [...dog.masters, master]});

    const masters = () => (
        <ul>
            {dog.masters.map((master, index) => (
                <li key={index}>
                    <label> {`${master.name} Phone Number: ${master.phoneNumber}`}</label>
                    <button onClick={(e) => deleteMaster(master._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
            <h1>{dog.name}</h1>
            {
                masters({masters, dogId: dog._id, deleteMaster})
            }
            <NewMasterForm addNewMaster={addNewMaster} />
        </div>
    );

}