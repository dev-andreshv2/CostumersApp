import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { getCustomerByDni } from '../selectors/customers';
import {Route} from 'react-router-dom';

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
    
    renderBody =() =>(
        <Route path="/customers/:dni/edit" children={
            ({match}) =>{
                const CustomerControl = match?CustomerEdit:CustomerData;
                return <CustomerControl {...this.props.customer}/>
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
    customer:PropTypes.object.isRequired,
}



const mapStateToProps =(state, props ) =>({
    customer: getCustomerByDni(state, props)
})

export default connect(mapStateToProps,null)(CustomerContainer);