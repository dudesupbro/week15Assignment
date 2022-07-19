import React, { useState } from 'react';

export const NewMasterForm = (props) => {
    const [name, setName] = useState('');
    const [phoneNumber, setphoneNumber] = useState(undefined);

    const handlephoneNumberInput = (e) => {
        const int= parseInt(e.target.value, 10);
        setphoneNumber(int >= 0 ? int: '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && phoneNumber) {
            props.addNewMaster({name, phoneNumber});
            setName('');
            setphoneNumber('');
        } else {
            alert('invalid input')
        }
    };

    return (
        <div>
            <h4>Add a new Master</h4>
            <form>
                <input
                    type='text'
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type='text'
                    placeholder='phone number'
                    onChange={handlephoneNumberInput}
                    value={phoneNumber}
                />
                <button type='submit'>Add Master</button>
            </form>
        </div>
    )
};