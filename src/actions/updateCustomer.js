
import {UPDATE_CUSTOMER} from '../constants';
import {createAction} from 'redux-actions';
import {apiPut} from '../api'
import {urlCustomers} from '../api/url'


//const apiFetchCustomers = () =>(apiGet(urlCustomers));
export const updateCustomer = createAction(UPDATE_CUSTOMER, 
    (id, customer)=>apiPut(urlCustomers, id,customer)()
); 