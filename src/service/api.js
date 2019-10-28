import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const urlBase = 'https://boacao.herokuapp.com'
axios.defaults.baseURL = urlBase;


axios.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    config.headers.Authorization = `Barear ${token}`
  }
  return config;
},
  error => {
    console.log('ffffffff')
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(async function (response) {
// Qualquer código de status que esteja dentro do intervalo de 2xx faz com que esta função seja acionada
// Faça algo com dados de resposta
  if(response.config.url === `${urlBase}/autenticar` && response.status === 200) {
    const { token } = response.data;

    if(token) {
      await AsyncStorage.setItem('token', token);
    }

  }

  return response;
}, function (error) {
// Qualquer código de status que esteja fora do intervalo de 2xx faz com que esta função seja acionada
// Faça algo com erro de resposta
  return Promise.reject(error.response);
});


 export const autenticar = async (email, password) => {
   try {
    const response = await axios({
      method: 'post',
      url: '/autenticar',
      data: {
        email,
        password
      }
    })
    const {token, entidade} =  response.data;
    return Promise.resolve({
      token,
      entidade
    });
   } catch (error) {
   return Promise.reject(error);
   }
 }
