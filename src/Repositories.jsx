import React, {useState, useEffect} from 'react'
import Repo from './components/Repo'
import { Link } from 'react-router-dom'

const Repositories = ({username, setusername}) => {
    const [userRepos, setUserRepos] = useState([]) // Changed initial state to empty array
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUserrepos = async (username) => {
      setIsLoading(true)
      setError(null)
      try {
        const url = `https://apis2.ccbp.in/gpv/profile-details/${search}?api_key=${process.env.GITHUB_API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        if (data.status_code === 400) {
          setError("User not found")
          setUserRepos([])
        } else {
          setUserRepos(data) // Ensure we get the repositories array
        }
      } catch (error) {
        setError("Something went wrong")
        setUserRepos([])
      } finally {
        setIsLoading(false)
      }
    }
    
    useEffect(() => {
      if (username) {
        fetchUserrepos(username)
      }
    }, [username])

    return (
      <div className='flex flex-col justify-center items-center min-h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none'>
        {isLoading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : userRepos.length > 0 ? (
          userRepos.map((repo) => (
            <Link to={`/repositories/${repo.name}`} key={repo.id}>
              <Repo key={repo.id} details={repo} username={username} />
            </Link>
          ))
        ) : (
          <p className="text-white">No repositories found</p>
        )}
      </div>
    )
}

export default Repositories
