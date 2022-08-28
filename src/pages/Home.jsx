import { useEffect } from React;
import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

const Home = () => {
  useEffect(() => {
    document.title = "Find Me On Github | Home";  
  }, []);
  return (
  <>
    {/* <script>
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'virtualPageview',
        pageURL: window.location.href,
        pageTitle: document.title
      })
    </script> */}
    <div>
      <UserSearch />
      <UserResults />
    </div>
  </>
  )
}

export default Home