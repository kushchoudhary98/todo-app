import './submitform.css'
import React from 'react';

class SubmitForm extends React.Component {

    state = { text: "" };

    add = (e) => {
        e.preventDefault();
        if (this.state.text == "") {
            alert("Please type the task.");
            return;
        }
        console.log(this.state);
        this.props.submitHandler(this.state.text);
        this.setState({ text: "" })
    }

    render() {
        return (
            <form onSubmit={this.add}>
                <button type="submit" class="btn btn-secondary submit-btn">+</button>
                <div class="mb-3">
                    <input
                        type="input"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={this.state.text}
                        onChange={(e) => { this.setState({ text: e.target.value }) }}
                    ></input>
                </div>
            </form>
        )
    }
}

export default SubmitForm;
