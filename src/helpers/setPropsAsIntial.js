import React,{ Component } from "react";

export const setPropsAsInitial=WrappedComponent=>(
    class extends Component {
        render(){
            console.log("propiedades -->",this.props);
            return <WrappedComponent {...this.props} 
                    initialValues={this.props} 
                    enableReinitialize
                    ></WrappedComponent>
        }
    }
)