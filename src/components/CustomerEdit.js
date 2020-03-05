import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsIntial';
import CustomerActions from './CustomerActions';


const MyField =({input,meta,type,label, name}) =>(
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type?"text":type} />
        {
            meta.touched&& meta.error && <span>{meta.error}</span>
        }
    </div>
);

const isRequired =value =>(
    !value&&"Este campo es requerido"
)

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);


const validate = values =>{
    const error = {};
    if(!values.name){
        error.name="Campo nombre debe ser requerido";
    }

    if(!values.dni){
        error.dni="Campo dni debe ser obligatorio";
    }

    return error;
}


//const toNumber=(value)=> value&&Number(value) ;
const toNumber=(value)=> ( value&&Number(value) );

const toUpper =(value) => value && value.toUpperCase();

const toLower =(value) => value && value.toLowerCase();
    //isNaN(Number(value)) && "el campo debe ser un numero"
//const onlyGrow = (value, previusValue, values )=>value && previusValue && (value >previusValue?value:previusValue)

const onlyGrow = (value, previusValue, values )=>(
    ( value && previusValue && (value >previusValue?value:previusValue))
);


const CustomerEdit = ({name,dni,age, handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <form onSubmit={handleSubmit}>
                
                    
                    <Field 
                        name="name" 
                        component={MyField} 
                        type="text"
                        //validate={isRequired}
                        label="Nombre"
                        parse={toUpper}
                        format={toLower}
                    />
    
                    
                    <Field 
                        name="dni" 
                        component={MyField} 
                        type="text"
                        validate={[isNumber]}
                        label="Dni"
                     />
            
                   
                    <Field 
                        name="age" 
                        component={MyField} 
                        type="number"
                        validate={isNumber}
                        label="Edad"
                        parse={toNumber}
                        normalize={onlyGrow}
                    />
                
                    <CustomerActions>
                        <button type="submit" disabled={submitting}>Aceptar</button>
                        
                        <button onClick={onBack}>Cancelar</button>
                    </CustomerActions>
            </form>

        </div>
    );
};

CustomerEdit.propTypes = {
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
};


//const mapStateToProps =;
const CustomerEditForm =  reduxForm(
    {
        form:'CustomerEdit',
        validate
    }
    )
    (CustomerEdit);
export default setPropsAsInitial(CustomerEditForm);
//export default CustomerEditForm;
/*export default  connect(  
    (state, props) =>(
        { initialValues : props }
    ))(CustomerEditForm);  */      