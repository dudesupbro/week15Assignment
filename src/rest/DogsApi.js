const API_ENDPOINT = ' https://crudcrud.com/api/14eb085952ea4bbba1ff1f2e1219f209';
const DOGS_ENDPOINT = API_ENDPOINT + '/dogs';

class DogsApi {
    get = async () => {
        try {
            const resp = await fetch(DOGS_ENDPOINT);
            const data = await resp.json();
            return data;
        }catch(e) {
            console.log("Not working. fetchDogs has an issue", e)
        }
    }

    put = async (dog) => {
        try {
            const resp = await fetch(`${DOGS_ENDPOINT}/${dog._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(dog)
            });
            return await resp.json();
        }catch(e) {
            console.log('Not working. Updating Dogs has an issue', e);
        }
    }
}

export const dogsApi = new DogsApi();