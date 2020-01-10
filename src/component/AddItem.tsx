import React, {useState} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {addItem} from '../action'

const connector = connect(
    (state: any) => ({
        counter: state.counter
    })
);

type ReduxProps = ConnectedProps<typeof connector>

const AddItem = (props: ReduxProps) => {

    const [state, setState] = useState({
        note: '',
        content: '',
        importance: '',
        deadline: ''
    });

    const isEnabled = state.note !== '' && state.content !== '' && state.importance !== '';

    const handleField = (e) => {
        if (e.target.id === 'note') {
            setState({...state, note: e.target.value});
        } else if (e.target.id === 'content') {
            setState({...state, content: e.target.value});
        } else if (e.target.id === 'deadline') {
            setState({...state, deadline: e.target.value});
        }
    };

    const handleRadio = (e) => setState({...state, importance: e.target.value});

    const handleSubmit = () => {
        props.dispatch({type: 'INCREMENT'});
        props.dispatch(addItem(props.counter, state.note, state.content, state.importance, state.deadline));
    };

    return (
        <div className="column">

            <div className="field">
                <label className="label">Note</label>
                <div className="control">
                    <input id='note' className="input" onChange={handleField}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea id='content' className="input" placeholder="Description" style={{minHeight: 70}}
                              onChange={handleField}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Importance</label>
                <div className="control">
                    <label className="radio">
                        <input type="radio" id="usual" name="customRadio" value="Usual"
                               onChange={handleRadio}/> Usual
                    </label>
                    <label className="radio">
                        <input type="radio" id="increased" name="customRadio" value="Increased"
                               onChange={handleRadio}/> Increased
                    </label>
                    <label className="radio">
                        <input type="radio" id="high" name="customRadio" value="High"
                               onChange={handleRadio}/> High
                    </label>
                </div>
            </div>

            <div className="field">
                <label className="label">Deadline</label>
                <div className="control">
                    <input id='deadline' className="input" type="date" onChange={handleField}/>
                </div>
            </div>

            <button disabled={!isEnabled} onClick={handleSubmit}>Submit</button>
        </div>
    )
};

export default connector(AddItem)
