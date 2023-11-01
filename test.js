const app = document.getElementById('app');

function MyForm() {
    const [username, setUsername] = React.useState("");
    const [followers, setFollowers] = React.useState("");
    const [saved, setSaved] = React.useState([])

    function handleSubmit(e) {
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

    function handleSave() {
        if(!saved.includes(username) && username != null) {
            setSaved(oldArray => [...oldArray, username]);
        }      
        console.log(saved)  
    }

    function handleRemove(value) {
        setSaved(saved.filter(a => a !== saved[value]));
        console.log(saved);
    }

    function SavedUser({ value }) {
        if(!saved[value]) { 
            return (
                <div>
                    {saved[value]}
                </div>
            );
        } else {
            return (
                <div>
                    {saved[value]}
                    <button onClick={() => handleRemove(value)}>Remove</button>
                </div>
            );
        }
        
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        GitHub Username: <br></br>
                        <input name="githubUsername"/>
                    </label><br></br>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={handleSave}>Save</button>
                <p>Name: {username}</p>
                <p>Followers: {followers}</p>
            </div>
            <div>
                <h2>Saved:</h2>
                <SavedUser value={0}/>
                <SavedUser value={1}/>
                <SavedUser value={2}/>
            </div>
        </div>
    )
}

ReactDOM.render(<MyForm />, app);