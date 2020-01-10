/* global chrome */
import React from 'react'
import AddItem from '../component/AddItem'
import Footer from './Footer'
import VisibleItemList from '../component/VisibleItemList';

const App = () => {

    /*useEffect(() => {
        chrome.tabs.executeScript({code: ASIN_EXTRACTOR})
        chrome.runtime.onMessage.addListener((request, sender) => {
            if (request.action == "GET_ASIN") {
               console.log(request.result)
            }
        });
    }, []);*/

    return (
        <div className="column content" style={{marginTop: 16}}>
            <h2 className="has-text-centered is-marginless">Amazon Scout</h2>
            <AddItem/>
            <VisibleItemList/>
            <Footer/>
        </div>
    )
};

export default App
