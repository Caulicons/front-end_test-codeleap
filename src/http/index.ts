import axios from 'axios';

const codeleapHTTP = axios.create({
   baseURL: 'https://dev.codeleap.co.uk/careers/',
});

export default codeleapHTTP;
