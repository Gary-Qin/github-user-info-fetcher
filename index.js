const app = document.getElementById('app');

// Creating components
function Header() {
    return <h1>Hello</h1>;
}

// Nesting components
function HomePage() {
    return (
        <div>
            <Header />
        </div>
    )
}

// Rendering components
ReactDOM.render(<HomePage />, app);