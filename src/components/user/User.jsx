import { userContext } from "@/context/UserContext";
import { useContext } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useNavigate } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

const User = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  // Handle case where user hasn't been loaded yet
  if (!user) {
    return (
      <div className="flex justify-center py-60 text-white">
        <Spinner className="size-28" />
      </div>
    );
  }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center py-14 gap-x-10">
        <div>
          <div
            onClick={handleClick}
            className="text-white btn btn-ghost mb-5 text-lg"
          >
            Back To Search
          </div>
          {/* Image Card */}
          <div className="card bg-base-100 image-full w-96">
            <figure>
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
            </figure>
            <div className="card-body justify-end">
              <div className="card-actions flex flex-col">
                <p className="">{user.name || user.login}</p>
                <p className="text-sm text-gray-400">@{user.login}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="text-white flex text-center">
            <p className="font-bold text-xl pr-2">{user.name || user.login}</p>
            <p className="text-sm badge badge-info mr-2">{user.type}</p>
            {user.hireable && (
              <p className="text-sm badge badge-success">hireable</p>
            )}
          </div>

          <div className="max-w-lg whitespace-normal break-words text-white pt-3">
            {user.bio || "No bio available."}
          </div>

          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <div className="btn bg-transparent border mt-6">
              VISIT GITHUB PROFILE
            </div>
          </a>

          {/* Last body */}
          <div className="w-full rounded-lg shadow-lg bg-base-100 stats mt-14">
            {user.location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="text-lg stat-value text-gray-300">
                  {user.location}
                </div>
              </div>
            )}
            {user.blog && (
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="text-lg stat-value text-gray-300">
                  <a
                    href={
                      user.blog.startsWith("http")
                        ? user.blog
                        : `https://${user.blog}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.blog}
                  </a>
                </div>
              </div>
            )}
            {user.twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="text-lg stat-value text-gray-300">
                  <a
                    href={`https://twitter.com/${user.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{user.twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 justify-evenly justify-self-center w-full rounded-lg shadow-lg bg-base-100 stats mt-10 text-white max-w-4xl">
        <div className="flex gap-x-6 p-3">
            <div className=" gap-x-9">
                <p className="text-sm text-gray-400">Followers</p>
                <p className="text-3xl font-bold">{user.followers}</p>
            </div>  
            <FaUsers className="text-5xl text-pink-600"/>
        </div>

        <div className="flex gap-x-6 p-3">
            <div className=" gap-x-9">
                <p className="text-sm text-gray-400">Following</p>
                <p className="text-3xl font-bold">{user.followers}</p>
            </div>  
            <FaUserFriends className="text-5xl text-pink-600"/>
        </div>

        <div className="flex gap-x-6 p-3">
            <div className=" gap-x-9">
                <p className="text-sm text-gray-400">Public Repos</p>
                <p className="text-3xl font-bold">{user.public_repos}</p>
            </div>  
            <FaCodepen className="text-5xl text-pink-600"/>
        </div>

        <div className="flex gap-x-6 p-3">
            <div className=" gap-x-9">
                <p className="text-sm text-gray-400">Public Gists</p>
                <p className="text-3xl font-bold">{user.public_gists}</p>
            </div>  
            <FaStore className="text-5xl text-pink-600"/>
        </div>
      </div>
    </>
  );
};

export default User;
