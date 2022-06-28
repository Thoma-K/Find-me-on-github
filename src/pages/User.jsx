import { useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { FaCodepen, FaStore, FaUserFriends, FaUsers} from "react-icons/fa"
import GithubContext from "../context/github/GithubContext"
import Spinner from "../components/layout/Spinner"


const User = () => {

  const {getUser, user, loading} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  if(loading) {
    return <Spinner />
  }

  return (
    <>
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to='/' className='btn btn-ghost'>
          Back To Search
        </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt="User's picture" />
            </figure>
            <div className="card-body justify-end p-3">
              <h2 className="card-title mb-0">
                {name}
              </h2>
              <h4>
                {login}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">
                {type}
              </div>
              {hireable && (
                <div className="mx-1 badge badge-info">
                  Hirable
                </div>
              )}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a 
              className="btn btn-outline"
              href={html_url} 
              target='_blank'
              rel='noreferrer'>
                Visit Github Profile
              </a>
            </div>
          </div>
          <div className="w-f rounded-lg shadow-md bg-base-100 stats">
            {location && (
              <div className="stats ml-2">
                <div className="stat-title text-md">
                  Location
                </div>
                <div className="text-lg stat-value">
                  {location}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default User