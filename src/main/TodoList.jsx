import Todo from "./todo/Todo"

export default function TodoList(props) {
    return (
        <div id='todos'>
            {props.texts.map((text) => {
                return <Todo text={text} removeHandler={props.removeHandler}/>
            })}
        </div>
    )
}
