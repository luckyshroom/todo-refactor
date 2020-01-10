import React from 'react'
import Link from '../component/Link'
import Purge from '../component/Purge'
import {VisibilityFilters} from '../action'

const Footer = () => (
    <div className="column">
        <span>Show: </span>
        <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
        <Link filter={VisibilityFilters.SHOW_USUAL}>Usual</Link>
        <Link filter={VisibilityFilters.SHOW_INCREASED}>Increased</Link>
        <Link filter={VisibilityFilters.SHOW_HIGH}>High</Link>
        <Purge/>
    </div>
);

export default Footer
