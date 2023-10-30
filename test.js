const app = document.getElementById('app');

function MyForm() {
    const [username, setUsername] = React.useState("");
    const [followers, setFollowers] = React.useState("");
    const [saved, setSaved] = React.useState([])

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

    function saveUser() {
        console.log(saved)
        if(!saved.includes(username) && username != null) {
            setSaved(oldArray => [...oldArray, username]);
        }        
    }

    function SavedUser({ value }) {
        return (
            <div>
                {value}
            </div>
        );
    }

    return (
        <div>
            <div>
                <form onSubmit={handleClick}>
                    <label>
                        GitHub Username: <br></br>
                        <input name="githubUsername"/>
                    </label><br></br>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={saveUser}>Save</button>
                <p>Name: {username}</p>
                <p>Followers: {followers}</p>
            </div>
            <div>
                <h2>Saved:</h2>
                <SavedUser value={saved[0]}/>
                <SavedUser value={saved[1]}/>
                <SavedUser value={saved[2]}/>
            </div>
        </div>
    )
}

ReactDOM.render(<MyForm />, app);