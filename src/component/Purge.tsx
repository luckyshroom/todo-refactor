import React from 'react'
import {persistor} from '../store/configureStore'

const Purge = () => (
    <button style={{marginLeft: '4px'}} className="btn btn-primary" onClick={() => persistor.purge()}>PURGE</button>
);

export default Purge