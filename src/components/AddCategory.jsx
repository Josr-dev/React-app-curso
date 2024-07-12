
import React, { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setinputValue] = useState('')

    const onInputCange = ( {target}) =>{
        console.log(target.value);
        setinputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text"
            placeholder='Buscar gif'
            value={ inputValue }
            onChange={ onInputCange }
        />
        </form>
    )
}
