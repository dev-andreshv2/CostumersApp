import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({customers}) => {
    return (
        <div>
            <div className="customer-list">
                {
                    customers.map(c=>
                        <CustomerListItem
                            key={c.dni}
                            name={c.name}
                            editAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                        />
                    )
                }
            </div>            
        </div>
    );
};

CustomerList.propTypes = {
    customer:PropTypes.array.isRequired,
    urlPath:PropTypes.string.isRequired,
};

export default CustomerList;