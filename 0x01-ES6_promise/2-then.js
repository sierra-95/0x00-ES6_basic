export default function handleResponseFromAPI(promise) {
    /*  const promesa = new Promise((resolve, reject) => {
        if (promise) {
          resolve({status: 200, body: 'success'});
        } else {
          reject(Error())
        }
      })
      promesa.then(res => {
        console.log(res)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(info => {
        console.log('Got a response from the API')
      })
    } */
    
      return new Promise((resolve, reject) => {
        if (promise) {
          resolve({ status: 200, body: 'success' });
        } else {
          reject(Error());
        }
        console.log('Got a response from the API');
      });
    }