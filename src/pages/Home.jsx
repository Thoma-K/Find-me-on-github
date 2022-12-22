import { useEffect } from "react"
import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

const Home = () => {
  useEffect(() => {
    document.title = "Find Me On Github | Home";  
  }, []);
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home