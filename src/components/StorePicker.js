import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    storeInput = React.createRef();

    gotoStore = (event) => {
        event.preventDefault();
        const storeId = this.storeInput.current.value;
        this.props.history.push(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.gotoStore}>
                <h2>Enter a store</h2>
                <input
                    type="text"
                    ref={this.storeInput}
                    required 
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker