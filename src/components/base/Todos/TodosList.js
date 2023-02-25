export const TodosList = (props) => {

    const todos = props.todos.map(it => {
        return (
            <li key={it.id} className="list-group-item d-flex justify-content-between align-items-center">
                {it.title}
                {it.completed && <span className="badge text-bg-success">Completed</span>}
                {!it.completed && <span className="badge text-bg-warning">In Progress</span>}
            </li>
        );
    });

    return (
        <ul className="list-group">
            <button className="list-group-item list-group-item-action active" aria-current="true">
                TODOS
            </button>
            {todos}
        </ul>
    );

};
