import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({user: {avatar_url, login}}) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className="flex-row items-center space-x-4 card-body">
        <div className='avatar'>
          <div className="rounded-full shadow width-14 h-14">
            <img src={avatar_url} alt="User's picture" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link 
          className='text-base-content text-opacity-40' 
          to={`/user/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem