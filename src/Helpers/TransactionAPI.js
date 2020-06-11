import axios from 'axios';

const TransactionAPI = axios.create(
{
    baseURL: 'http://private-3f9656-paymiuminterviews.apiary-mock.com/',
    rejectUnauthorized: false,
    crossdomain: true
});

export default TransactionAPI;