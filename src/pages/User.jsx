import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaNetworkWired,
  FaStore,
  FaUserFriends,
  FaUsers,
} from 'react-icons/fa';
import ReposList from '../components/repos/ReposList';
import GithubContext from '../context/github/GithubContext';
import Spinner from '../components/layout/Spinner';
import { getUser, getUserRepos } from '../context/github/GithubActions';
import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';

const User = () => {
  useEffect(() => {
    document.title = 'Find Me On Github | User Page';
  }, []);
  const { dispatch, repos, user, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const userData = await getUser(params.login);
      dispatch({ type: 'GET_USER', payload: userData });

      const userReposData = await getUserRepos(params.login);
      dispatch({ type: 'GET_REPOS', payload: userReposData });
    };

    getUserData();
  }, [dispatch, params.login]);

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
  } = user;
  console.log('I see you');
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: 'view_item',
    ecommerce: {
      items: [
        {
          item_id: user.id,
          item_name: user.login,
          item_list_name: 'Search Results',
        },
      ],
    },
  });
  window.dataLayer.push({
    event: 'test_conversion',
    originalValue: 'Thomas Kara',
    hashedValue:
      '6e2c9ab2b66314a18de3320ffbc22123cf879ff0cb10d797aeaaf95bc6a02406',
  });
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="User" />
              </figure>
              <div className="card-body justify-end p-3">
                <h2 className="card-title mb-0">{name}</h2>
                <h4>{login}</h4>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hirable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  className="btn btn-outline"
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-f rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stats border-none">
                  <div className="stat-title text-md px-1 mx-1">Location</div>
                  <div className="text-lg stat-value px-1 mx-1 border-none">
                    {location}
                  </div>
                </div>
              )}
              {blog && (
                <div className="stats border-none">
                  <div className="stat-title text-md px-1 mx-1">Website</div>
                  <div className="text-lg stat-value px-1 mx-1 border-none">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stats border-none">
                  <div className="stat-title text-md px-1 mx-1">Twitter</div>
                  <div className="text-lg stat-value px-1 mx-1 border-none">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaNetworkWired className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        <ReposList repos={repos} />
      </div>
    </>
  );
};

export default User;
