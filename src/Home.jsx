// import React from 'react'
// import Navbar from './components/Navbar'
// import Profile from './components/Profile'
// import homepageImage from './assets/Homepage.png'
// import usernotfound from './assets/usernotfound.png'
// import { useState, useEffect } from 'react'
// // https://apis2.ccbp.in/gpv/profile-details/Ganeshvoora?api_key=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

// const Home = ({reponame, setreponame}) => {

//   const [search, setsearch] = useState("")

//   const [userData, setUserData] = useState({})

//   useEffect(() => {
//     console.log( search)
//     let url=`https://apis2.ccbp.in/gpv/profile-details/${search}?api_key=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`
//     fetch(url)
//       .then(response => response.json())
//       .then(json => {
//         setUserData(json);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   },[search]);



//     return (
//       <div className="flex flex-col justify-center items-center h-[90vh] bg-[#0f172a]">
//           <div>
//             <input type="text" className='p-1.5 bg-[#1d2537] mb-12 text-emerald-200' placeholder='Enter github username' value={search} onChange={(e)=>setsearch(e.target.value)}/>
//             <button className="bg-green-700 text-white p-2 rounded" onClick={() => { 
//               setreponame(search) 
//             }}>Search</button>
//             <p className='text-red-800 text-md'>{search.status_code === 400 && "Enter the valid github username"}</p>
//           </div>
//           {(reponame === "") && (<img src={homepageImage} className='w-[25vw]' alt="homepage" />) }
//           {search.status_code && (<img src={usernotfound} className='w-[25vw]' alt="homepage" />)}
//           {(search.login===search && <Profile search={search}/>)}
//       </div>
//     )


// }




// export default Home




// import React from 'react'
// import Profile from './components/Profile'
// import homepageImage from './assets/Homepage.png'
// import usernotfound from './assets/usernotfound.png'
// import { useState } from 'react'

// const Home = ({reponame, setreponame}) => {
//   // State for input field
//   const [search, setSearch] = useState("")
//   // State for API response data
//   const [userData, setUserData] = useState(null)
//   // State for loading and error handling
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)

//   // Function to fetch GitHub user data
//   const fetchUserData = async () => {
//     setIsLoading(true)
//     setError(null)
//     try {
//       const url = `https://apis2.ccbp.in/gpv/profile-details/${search!==""?search:reponame}?api_key=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`
//       const response = await fetch(url)
//       const data = await response.json()
      
//       if (data.status_code === 400) {
//         setError("User not found")
//       } else {
//         setUserData(data)
//         setreponame(search)
//       }
//     } catch (error) {
//       setError("Something went wrong")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="flex flex-col justify-center items-center h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none">
//       <div>
//         <input 
//           type="text" 
//           className='p-1.5 bg-[#1d2537] mb-12 text-emerald-200' 
//           placeholder='Enter github username' 
//           value={search} 
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button 
//           className="bg-green-700 text-white p-2 rounded" 
//           onClick={fetchUserData}
//           disabled={isLoading || !search}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </button>
        
//         {error && <p className='text-red-800 text-md mt-2'>{error}</p>}
//       </div>

//       {/* Show homepage image when no search has been made */}
//       {!reponame && !error && (
//         <img src={homepageImage} className='w-[25vw]' alt="homepage" />
//       )}

//       {/* Show error image when user not found */}
//       {error && (
//         <img src={usernotfound} className='w-[25vw]' alt="user not found" />
//       )}
      
//       {/* Show profile when user data is available */}
//       {userData && !error && (
//         <Profile userData={userData} />
//       )}
//     </div>
//   )
// }

// export default Home


// import React, { useEffect , useState ,useRef} from 'react'
// import Profile from './components/Profile'
// import homepageImage from './assets/Homepage.png'
// import usernotfound from './assets/usernotfound.png'


// const Home = ({reponame, setreponame}) => {
//   const [search, setSearch] = useState("")
//   const [userData, setUserData] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const homeimgRef = useRef(null);

//   // Function to fetch GitHub user data
//   const fetchUserData = async (username) => {
//     setIsLoading(true)
//     setError(null)
//     try {
//       const url = `https://apis2.ccbp.in/gpv/profile-details/${username}?api_key=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`
//       const response = await fetch(url)
//       const data = await response.json()
      
//       if (data.status_code === 400) {
//         setError("User not found")
//         setUserData(null)
//       } else {
//         setUserData(data)
//       }
//     } catch (error) {
//       setError("Something went wrong")
//       setUserData(null)
//     } finally {
//       setIsLoading(false)
//     }
//   }
  
//   // Effect to fetch data when reponame changes
//   useEffect(() => {
//     if (reponame) {
//       fetchUserData(reponame)
//       homeimgRef.current.style.display = "none"; 
//     }
//   }, [reponame,search])

//   // Handle search button click
//   const handleSearch = () => {
//     if (search) {
//       setreponame(search)
//       fetchUserData(search)
//     }
//   }

//   return (
//     <div className="flex flex-col justify-center items-center h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none">
//       <div>
//         <input 
//           type="text" 
//           className='p-1.5 bg-[#1d2537] mb-12 text-emerald-200' 
//           placeholder='Enter github username' 
//           value={search} 
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button 
//           className="bg-green-700 text-white p-2 rounded" 
//           onClick={handleSearch}
//           // disabled={isLoading || !search}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </button>
        
//         {error && <p className='text-red-800 text-md mt-2'>{error}</p>}
//       </div>

//       {!reponame && !error && !isLoading && (
//         <img src={homepageImage} ref={homeimgRef} className='w-[25vw]' alt="homepage" />
//       )}

//       {error && (
//         <img src={usernotfound} className='w-[25vw]' alt="user not found" />
//       )}

//       {userData && !error && (
//         <Profile userData={userData} />
//       )}
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import Profile from './components/Profile'
import homepageImage from './assets/Homepage.png'
import usernotfound from './assets/usernotfound.png'

const Home = ({username, setusername}) => {
  const [search, setSearch] = useState("")
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [initialRender, setInitialRender] = useState(true)

  // Function to fetch GitHub user data
  const fetchUserData = async (username) => {
    setIsLoading(true)
    setError(null)
    try {
      const url = `https://apis2.ccbp.in/gpv/profile-details/${username}?api_key=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`
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.status_code === 400) {
        setError("User not found")
        setUserData(null)
      } else {
        setUserData(data)
        setInitialRender(false)
      }
    } catch (error) {
      setError("Something went wrong")
      setUserData(null)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    if (username) {
      setInitialRender(false)
      fetchUserData(username)
    }
  }, [username])

  const handleSearch = () => {
    if (search) {
      setInitialRender(false)
      setusername(search)
      fetchUserData(search)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none">
      <div>
        <input 
          type="text" 
          className='p-1.5 bg-[#1d2537] mb-12 text-emerald-200' 
          placeholder='Enter github username' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          className="bg-green-700 text-white p-2 rounded" 
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
        
        {error && <p className='text-red-800 text-md mt-2'>{error}</p>}
      </div>

      {initialRender && (
        <img src={homepageImage} className='w-[25vw]' alt="homepage" />
      )}

      {error && !initialRender && (
        <img src={usernotfound} className='w-[25vw]' alt="user not found" />
      )}

      {userData && !error && !initialRender && (
        <Profile userData={userData} />
      )}
    </div>
  )
}

export default Home
