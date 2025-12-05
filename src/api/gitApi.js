const users_url = import.meta.env.VITE_GITHUB_URL;

//Api call function for getting all users that match the name search
export const getUsers = async ({userName}) => {

    try {
        const res = await fetch(`${users_url}/search/users?q=${userName}`);

        if(!res.ok){
            console.error("Could not fetch users");
            return null;
        }
        const data = await res.json();
        return data.items;
    } catch(error) {
        console.log("GET USERS - 400");
        console.error("Failed getting users:", error)
    }
}

//Api call function for fetching a specific user
export const getUser = async ({userName}) => {
    
    try {

        const res = await fetch(`${users_url}/users/${userName}`);

        if(!res.ok){
            console.error("Trouble fetching user");
            return null;
        }

        const data = await res.json();
        return data;
    } catch(error) {
        console.log("Get USER - 400");
        console.error("Failed fetching user");
    }
}