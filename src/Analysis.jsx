import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Analysisdetails from './components/Analysisdetails'

const Analysis = ({username, setusername}) => {
  const params = useParams()
  const urlUsername = params.username // Get username from URL if present

  useEffect(() => {
    if (urlUsername) {
      setusername(urlUsername)
    }
  }, [urlUsername, setusername])

  const [userAnalysis, setUserAnalysis] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUserAnalysis = async (username) => {
    setIsLoading(true)
    setError(null)
    try {
      const url = `https://apis2.ccbp.in/gpv/profile-details/${search}?api_key=${process.env.GITHUB_API_KEY}`
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.status_code === 400) {
        setError("User not found")
        setUserAnalysis(null)
      } else {
        setUserAnalysis(data)
      }
    } catch (error) {
      setError("Something went wrong")
      setUserAnalysis(null)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    if (username) {
      fetchUserAnalysis(username)
    }
  }, [username])

  return (
    <div className=' flex flex-col justify-center items-center min-h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none'>
      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : userAnalysis ? (
        <Analysisdetails details={userAnalysis} />
      ) : (
        <p className="text-white">No analysis data available</p>
      )}
    </div>
  )
}

export default Analysis
