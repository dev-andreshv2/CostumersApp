

import {FETCH_CUSTOMERS} from '../constants';
import {createAction} from 'redux-actions';
import {apiGet} from '../api'
import {urlCustomers} from '../api/url'


/*export const fetchCustomers = () =>({
    type:FETCH_CUSTOMERS, payload:null
});*/
/*
const customers =[
    {
        "dni":"270000",
        "name":"Juan Perez",
        "age":15
    },

    {
        "dni":"350000",
        "name":"Zaida Villamizar",
        "age":17
    },

    {
        "dni":"470000",
        "name":"Andres Vera",
        "age":20
    }
];*/


//const url ='https://my-json-server.typicode.com/dev-andreshv2/datacustomer/customers';
//export const fetchCustomers = createAction(FETCH_CUSTOMERS, ()=>customers); sin midldeware
const apiFetchCustomers = () =>(apiGet(urlCustomers));


export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFetchCustomers); 