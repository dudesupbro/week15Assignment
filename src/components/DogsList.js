import React from 'react';
import { Dog } from './Dog';
import { dogsApi } from '../rest/DogsApi.js';



export class DogsList extends React.Component {
    state = {
        dogs: []
    };

    componentDidMount() {
        this.fetchDogs();
    };

    fetchDogs = async () => {
        const dogs = await dogsApi.get();
        this.setState({ dogs });
    };

    updateDog = async (updatedDog) => {
        await dogsApi.put(updatedDog);
        this.fetchDogs();
    };

    render() {
        return (
            <div className="dogs-list">
                {this.state.dogs.map((dog) => (
                    <Dog
                        key={dog._id}
                        dog={dog}
                        updateDog={this.updateDog}
                        />
                        
                ))}
            </div>
        )
    }
}
