import { Button } from "@/components/ui/button";
import { getUsers } from "@/api/gitApi";
import { useContext, useEffect, useState } from "react";
import UserCard from "./UserCard";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from "@/context/UserContext";

const SearchBar = () => {
  const { users, setUsers} = useContext(userContext);
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(false);

  const handleGo = async () => {
    if (!userName) {
      setError(true);

      // Auto-hide error after 3 seconds
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    const fetchedUsers = await getUsers({userName});

    if (fetchedUsers) {
      setUsers(fetchedUsers);
      toast.success("Users fetched successfully");
      setUserName("");
    } else {
      toast.error("Failed loading users");
    }
  };

  const handleClear = () => {
    setUsers([]);
  };

  return (
    <>
      {error && (
        <div role="alert" className="alert alert-error w-1/5 ml-5 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Please search a name</span>
        </div>
      )}

      <div className="items-center ml-5">
        <label className="input bg-white w-[400px] rounded-r-none">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input 
            type="search" 
            value={userName}
            onChange={ (e) => setUserName(e.target.value)}
            required 
            placeholder="Search" 
          />
        </label>
        <Button
          onClick={() => handleGo()}
          className="bg-slate-950 px-7 py-5 rounded-l-none active:scale-95 active:translate-y-[1px] transition"
        >
          Go
        </Button>

        {users.length > 0 && (
          <div onClick={handleClear} className="btn btn-ghost text-white ml-4">
            Clear
          </div>
        )}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
