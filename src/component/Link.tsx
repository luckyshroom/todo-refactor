import React from 'react'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../action'

const Link = ({active, children, onClick}) => (
    <button style={{marginLeft: '4px'}} disabled={active} onClick={onClick}>
        {children}
    </button>
);

export default connect(
    (state: any, ownProps: any) => ({
        active: ownProps.filter === state.visibilityFilter
    }),
    (dispatch, ownProps) => ({
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    })
)(Link)
