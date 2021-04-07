import axios from 'axios';
import md5 from 'js-md5';

const publicKey = "9a0d4b68cb70c78a274a281e5addc52b";
const privateKey = "aba8e6236d4000577e2f3c6cfe8d0492ca765c42";
const timeStamp = Number(new Date())

const hash = md5.create().update(timeStamp + privateKey + publicKey);

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    ts: timeStamp,
    apikey: publicKey,
    hash: hash.hex(),
  }
});

export default api;