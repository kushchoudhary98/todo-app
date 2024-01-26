import './main.css'
import logo from './to-do-list.png'
import TodoList from './TodoList';
import SubmitForm from './submit-form/SubmitForm'
import { useState } from 'react';
import EmptyTodo from './EmptyTodo';

export default function Main() {
    const [texts, setTexts] = useState([]);

    const submitHandler = (data) => {
        setTexts([data, ...texts]);
        console.log(texts)
    }

    const removeHandler = (data) => {
        const newTexts = texts.filter((text) => {
            return (text != data);
        });
        
        setTexts(newTexts);
    }

  return (
    <div className="container">
        <div id="intro">
            <img src={logo} className='logo'></img>
            to do list
        </div>
        <div id="content">
            <div id='input-box'>
                <SubmitForm submitHandler = {submitHandler}/>
            </div>
            {texts.length == 0?<EmptyTodo/>:<TodoList texts = {texts} removeHandler={removeHandler}></TodoList>}
        </div>
    </div>
  )
}
