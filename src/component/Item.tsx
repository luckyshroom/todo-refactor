import React, {useState} from 'react'
import {connect} from 'react-redux'
import {editItem} from '../action'

interface ItemProps {
    id: number,
    note: string,
    completed: string,
    content: string,
    deadline: string,
    importance: string,
    isCompleted: boolean,
    deleteItem: () => void,
    toggleItem: () => void,
    dispatch: (f: any) => void
}

const Item = (props: ItemProps) => {

    const [state, setState] = useState({
        content: props.content,
        importance: props.importance,
        deadline: props.deadline,
        isEdit: false
    });

    const getDeadlineInfo = () => props.deadline === '' ? 'Indefinitely' : props.deadline;

    const getStatus = () => {
        let currentDate = (new Date()).toISOString().split("T")[0];

        if (props.deadline <= currentDate && props.deadline !== '') {
            return 'Expired'
        }
        if (props.isCompleted) {
            return 'Completed on ' + props.completed;
        }
        if (!props.isCompleted || props.deadline === '') {
            return 'Active'
        }
    };

    const handleField = (e) => {
        if (e.target.id === 'content') {
            setState({...state, content: e.target.value});
        } else if (e.target.id === 'deadline') {
            setState({...state, deadline: e.target.value});
        }
    };

    const handleRadio = (e) => setState({...state, importance: e.target.value});

    const handleAccept = () => {
        toggleRow();
        props.dispatch(editItem(props.id, state.content, state.importance, state.deadline));
    };

    const toggleRow = () => setState({...state, isEdit: !state.isEdit});

    const renderEditRow = () => (
        <tr>
            <th style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}} onClick={props.toggleItem}>
                {props.note}
            </th>
            <th>
                <textarea id='content' className="input" defaultValue={props.content} style={{minHeight: 70}}
                          onChange={handleField}/>
            </th>
            <th style={{minWidth: 128}}>
                <label className="radio is-marginless">
                    <input type="radio" id="_usual" name="customRadio" value="High"
                           defaultChecked={props.importance === 'Usual'} onChange={handleRadio}/> Usual
                </label>
                <label className="radio is-marginless">
                    <input type="radio" id="_increased" name="customRadio" value="High"
                           defaultChecked={props.importance === 'Increased'} onChange={handleRadio}/> Increased
                </label>
                <label className="radio is-marginless">
                    <input type="radio" id="_high" name="customRadio" value="High"
                           defaultChecked={props.importance === 'High'} onChange={handleRadio}/> High
                </label>
            </th>
            <th>
                <input id="deadline" className="input" type="date" defaultValue={getDeadlineInfo()}
                       onChange={handleField}/>
            </th>
            <th>{getStatus()}</th>
            <th>
                <button style={{marginRight: '4px'}} onClick={handleAccept}>{state.isEdit ? 'Accept' : 'Edit'}</button>
                <button onClick={props.deleteItem}>Delete</button>
            </th>
        </tr>
    );

    const renderSimpleRow = () => (
        <tr>
            <th style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}}
                onClick={props.toggleItem}>
                {props.note}
            </th>
            <th>{props.content}</th>
            <th>{props.importance}</th>
            <th>{getDeadlineInfo()}</th>
            <th>{getStatus()}</th>
            <th>
                <button style={{marginRight: '4px'}} onClick={toggleRow}>Edit</button>
                <button onClick={props.deleteItem}>Delete</button>
            </th>
        </tr>
    );

    return state.isEdit ? renderEditRow() : renderSimpleRow()
};

export default connect()(Item)
