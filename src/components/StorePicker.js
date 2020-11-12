import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Enter a store</h2>
                <input type="text" required placeholder= { getFunName() } />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker