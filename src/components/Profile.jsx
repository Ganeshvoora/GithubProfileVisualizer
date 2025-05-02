import React from 'react'


const Profile = ({ userData }) => {
  return (
    <div className="text-white p-8 max-w-sm w-full">
      <div className="flex flex-col items-center">
        <img 
          src={userData.avatar_url} 
          alt={userData.name} 
          className="w-24 h-24 rounded-full mb-4" 
        />
        <h1 className="text-2xl font-bold">{userData.name}</h1>
        <p className="text-gray-400">{userData.login}</p>
        <p className="text-center text-gray-300 text-sm mt-4">
          {userData.bio}
        </p>
      </div>
      
      <div className="flex justify-around text-center mt-6">
        <div>
          <p className="text-xl font-bold">{userData.followers}</p>
          <p className="text-gray-400 text-sm">Followers</p>
        </div>
        <div>
          <p className="text-xl font-bold">{userData.following}</p>
          <p className="text-gray-400 text-sm">Following</p>
        </div>
        <div>
          <p className="text-xl font-bold">{userData.public_repos}</p>
          <p className="text-gray-400 text-sm">Public Repos</p>
        </div>
      </div>
      <div className="flex justify-around text-center mt-6">
        <div>
          <p className="text-gray-400 text-sm">Company</p>
          <p className="text-xl font-bold">{userData.company?userData.company:"Not Given"}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Company Url</p>
          <p className="text-xl font-bold">{userData.company_url?userData.company_url:"Not Given"}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Locatlon</p>
          <p className="text-xl font-bold">{userData.locatlon?userData.locatlon:"Not Given"}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile