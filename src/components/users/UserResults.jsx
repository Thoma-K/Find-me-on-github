import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);
  const itemsArray = users.map(({ id, login }) => ({
    item_id: id,
    item_name: login,
  }));
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event: 'view_item_list',
    item_list_name: 'Search Results',
    ecommerce: {
      items: itemsArray,
    },
  });

  if (!loading) {
    return (
      <>
        <div id="space"></div>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
