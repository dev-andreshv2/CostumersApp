import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCustomers} from '../actions/fetchCustomers';
import {PropTypes} from 'prop-types';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {


     componentDidMount(){
         this.props.fetchCustomers();
     }


    handleAddNew=() =>{
        this.props.history.push("/customers/new");

    }


    renderBody = (customers)=>(
        <div>
            <CustomerList
                customers={customers}
                urlPath={'customers/'}
            ></CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
                <button onClick={this.handleAddNew}>Editar Clientes</button>
            </CustomerActions>
        </div>
    );


    render() {
        return (
            <div>
                <AppFrame 
                    header ={'Listado de Clientes'}
                    body ={this.renderBody(this.props.customers)}
                ></AppFrame>
            </div>
        );
    }
}


/*const mapDispatchToProps = (dispatch)=>({
    fetchCustomers: () =>dispatch(fetchCustomers())
})*/
const mapDispatchToProps = {fetchCustomers}; //simplificado

CustomersContainer.propTypes={
    fetchCustomers:PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,
    
}


CustomersContainer.defaultProps={
    customers :[
        /*{
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
        }*/
    ]
}




const mapStateToProps =(state) => ({
    customers:getCustomers(state)
});


export default withRouter(  connect(mapStateToProps,mapDispatchToProps)(CustomersContainer));


