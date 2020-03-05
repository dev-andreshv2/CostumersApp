import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { getCustomerByDni } from '../selectors/customers';
import {Route, withRouter} from 'react-router-dom';
import { dispatch } from '../../../../../Users/Andres-ZL/AppData/Local/Microsoft/TypeScript/3.4/node_modules/rxjs/internal/observable/pairs';
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';

class CustomerContainer extends Component {
    
    /*renderBody =() =>(
        <Route path="/customers/:dni/edit" children={
            ({match}) =>(
                match?
                 <CustomerEdit {...this.props.customer}/>:
                 <CustomerData {...this.props.customer}/>
            )
        }></Route>
    );*/
    
    componentDidMount() {
       if(!this.props.customer){
            this.props.fetchCustomers();
       } 
    }
    


    handleSubmit=(values)=>{
        
        console.log(JSON.stringify(values));
        const {id} = values;
        return this.props.updateCustomer(id, values);

    }

    handleObBack =() =>{
        this.props.history.goBack();
    }

    handleOnSubmitSuccess =() =>{
        this.props.history.goBack();     
    }

    renderBody =() =>(
        <Route path="/customers/:dni/edit" children={
            ({match}) =>{
                const CustomerControl = match?CustomerEdit:CustomerData;
                return <CustomerControl 
                            {...this.props.customer}
                            onSubmit={this.handleSubmit}
                            onBack={this.handleObBack}
                            onSubmitSuccess={this.handleOnSubmitSuccess}
                        />
                 //<CustomerData {...this.props.customer}/>
            }
        }></Route>
    );
    
    render() {
        return (
            <div>

               <AppFrame
                header ={`Cliente ${this.props.dni}`}
                body={
                    //<p>Datos del cliente {this.props.customer.name}</p>
                    this.renderBody()

                }
               ></AppFrame> 

            </div>
        );
    }
}


CustomerContainer.propTypes = {
    dni:PropTypes.string.isRequired,
    customer:PropTypes.object,
    fetchCustomers:PropTypes.func.isRequired,
    updateCustomer:PropTypes.func.isRequired,
}



const mapStateToProps =(state, props ) =>({
    customer: getCustomerByDni(state, props)
})




export default  withRouter(connect(mapStateToProps, {fetchCustomers,updateCustomer}   )(CustomerContainer));