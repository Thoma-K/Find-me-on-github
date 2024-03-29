import {useEffect} from 'react'

const About = () => {
  useEffect(() => {
    document.title = "Find Me On Github | About Us";
  }, []);
  return (
    <div>
      <h1 className="text-6xl mb4">Find Me On Github</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
    </div>
  )
}

export default About