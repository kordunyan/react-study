export const TodosList = (props) => {

    const todos = props.todos.map(it => {
        return (
            <li key={it.id} className="list-group-item">{it.title}</li>
        );
    });

    return (
        <ul className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                TODOS
            </a>
            {todos}
        </ul>
    );

};
