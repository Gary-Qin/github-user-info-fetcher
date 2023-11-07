const app = document.getElementById('app');

function MyForm() {
    const [curName, setCurName] = React.useState("");
    const [curLogin, setCurLogin] = React.useState("");
    const [curFollowers, setCurFollowers] = React.useState("");
    const [curAvatar, setCurAvatar] = React.useState("");
    const [saved, setSaved] = React.useState([])

    function handleSubmit(e) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        fetch(`https://api.github.com/users/${formJson.githubUsername}`)
            .then(res => res.json())
            .then(data => {
                setCurName(data.name)
                setCurLogin(data.login)
                setCurFollowers(data.followers)
                setCurAvatar(data.avatar_url);
            })
    }

    function handleSave() {
        // if(!saved.includes(username) && username != null && saved.length < 3) {
        //     setSaved(oldArray => [...oldArray, {name: username,}]);
        // }
        let exists = 0;
        for(const i of saved) {
            if(i.name == curName) {
                exists = 1;
            }
        }
        if(!exists && saved.length < 3) {
            setSaved(oldArray => [...oldArray, {name: curName, login: curLogin, followers: curFollowers, avatar: curAvatar}]);
        }
        console.log(saved);
    }

    function handleRemove(value) {
        setSaved(saved.filter(a => a.name !== saved[value].name));
        console.log(saved);
    }

    // function SavedUser({ value }) {
    //     if(!saved[value]) { 
    //         return (
    //             <div>
    //                 {saved[value].name}
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div>
    //                 {saved[value].name}
    //                 <button onClick={() => handleRemove(value)}>Remove</button>
    //             </div>
    //         );
    //     }
    // }

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
                <p>Name: {curName}</p>
                <p>Followers: {curFollowers}</p>
            </div>
            {/* <div>
                <h2>Saved:</h2>
                <SavedUser value={0}/>
                <SavedUser value={1}/>
                <SavedUser value={2}/>
            </div> */}
        </div>
    )
}

ReactDOM.render(<MyForm />, app);