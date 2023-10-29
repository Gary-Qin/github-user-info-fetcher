const app = document.getElementById('app');

function MyForm() {
    const [username, setUsername] = React.useState("");
    const [followers, setFollowers] = React.useState("");

    // function getUser(u) {
    //     return fetch(`https://api.github.com/users/${u}`)
    //     .then(response => response.json())
    //     .then(response => {return response;})
    // }

    function handleClick(e) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        fetch(`https://api.github.com/users/${formJson.githubUsername}`)
            .then(res => res.json())
            .then(data => {
                setUsername(data.name)
                setFollowers(data.followers)
            })
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
            <p>Name: {username}</p>
            <p>Followers: {followers}</p>
        </div>
    )
}

ReactDOM.render(<MyForm />, app);