import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

class HomeContainer extends Component {
    
    
    handleOnClick =() =>{
        console.log("handleOnClick==", this.props.history);
        this.props.history.push("/customers");
    }


    render() {
        return (
            <div>
                <AppFrame 
                header="Home"
                body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomerActions>
                            <button onClick={this.handleOnClick}>Listado de clientes </button>
                        </CustomerActions>    
                    </div>
                }
                ></AppFrame>
            </div>
        );
    }



}

export default withRouter(HomeContainer);