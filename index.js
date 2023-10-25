const app = document.getElementById('app');

// Creating components
// {title} is a prop: a custom attribute
// {} denotes "js land"; passes a ternary operator in following
function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}


// Nesting components & using prop
function HomePage() {
    const names = ['Adam', 'David', "James"];
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    // using arrow function to map out names from an array to list elements
    // requires key props to identify items in an array 
    return (
        <div>
            <Header />
            <Header title="Custom Title"/>

            <ul>
                {names.map((name) => (<li key={name}>{name}</li>))}
            </ul>

            <button onClick={handleClick}>Like: {likes}</button>
        </div>
    )
}

// Rendering components
ReactDOM.render(<HomePage />, app);