const app = document.getElementById('app');

function MyForm() {
    const [username, setUsername] = React.useState("");

    function handleClick(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        setUsername(formData.get("githubUsername"));
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <label>
                    GitHub Username: <br></br>
                    <input name="githubUsername"/>
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>https://api.github.com/users/{username}</p>
        </div>
    )
}

ReactDOM.render(<MyForm />, app);