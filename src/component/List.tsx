import React from 'react'
import Item from './Item'
import {ConnectedProps} from 'react-redux';
import {connector} from './VisibleItemList';

type ReduxProps = ConnectedProps<typeof connector>

const List = (props: ReduxProps) => (
    <div className="column table-container">
        <table className="table">
            <thead>
            <tr>
                <th>Note</th>
                <th>Description</th>
                <th>Importance</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Edit/Delete</th>
            </tr>
            </thead>
            <tbody>
            {props.itemList.map(item =>
                <Item key={item.id}{...item}
                      deleteItem={() => props.deleteItem(item.id)}
                      toggleItem={() => props.toggleItem(item.id)}/>)}
            </tbody>
        </table>
    </div>
);

export default List
