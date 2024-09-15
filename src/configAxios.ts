// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import API_URL from './utils/api';
// import toast from './utils/toast';

// const getAxios = async (timeout = 5000) => {
//     try {
//         const token = await AsyncStorage.getItem('@admin_Token');

//         const instance = axios.create({
//             baseURL: API_URL,
//             timeout: timeout,
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             }
//         });

//         return instance
//     } catch (error) {
//         toast("Erro na configuração com o servidor", "error")
//     }
// }

// export default getAxios;