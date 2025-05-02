import React, { useState, useEffect } from 'react'
import Pichart from './Pichart'
const Fullrepo = ({ username, reponame }) => {
    const [reposData, setReposData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUserrepos = async (username, reponame) => {
        setIsLoading(true)
        setError(null)
        try {
            const url = `https://apis2.ccbp.in/gpv/specific-repo/${username}/${reponame}?api_key=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`
            const response = await fetch(url)
            const data = await response.json()

            if (data.status_code === 400) {
                setError("Repository not found")
                setReposData(null)
            } else {
                setReposData(data)
            }
        } catch (error) {
            setError("Something went wrong")
            setReposData(null)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (username && reponame) {
            fetchUserrepos(username, reponame)
        }
    }, [username, reponame])

    if (isLoading) return <div className='mx-auto flex justify-center items-center min-h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none'><div className="text-white">Loading...</div></div>
    if (error) return <div className='mx-auto flex justify-center items-center min-h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none'><div className="text-red-500">{error}</div></div>
    if (!reposData) return <div className='mx-auto flex justify-center items-center min-h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none'><div className="text-white">No repository data available</div></div>

    return (<div className='mx-auto flex justify-center items-center min-h-[90vh] bg-[#0f172a] overflow-auto scrollbar-none p-6'>
        <div className="bg-[#0D1B2A] text-white p-8 m-4 rounded-xl max-w-4xl">
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-6">
                <img
                    src={reposData.owner.avatar_url}
                    alt={reposData.owner.login}
                    className="w-16 h-16 rounded-full"
                />
                <div>
                    <h1 className="text-2xl font-bold">{reposData.name}</h1>
                    <p className="text-gray-400">by {reposData.owner.login}</p>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6">{reposData.description}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-[#1E2A3B] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Stars</p>
                    <p className="text-xl font-bold">{reposData.stargazers_count.toLocaleString()}</p>
                </div>
                <div className="bg-[#1E2A3B] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Forks</p>
                    <p className="text-xl font-bold">{reposData.forks_count.toLocaleString()}</p>
                </div>
                <div className="bg-[#1E2A3B] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Issues</p>
                    <p className="text-xl font-bold">{reposData.open_issues_count.toLocaleString()}</p>
                </div>
                <div className="bg-[#1E2A3B] p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Watchers</p>
                    <p className="text-xl font-bold">{reposData.watchers_count.toLocaleString()}</p>
                </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Languages</h2>
                <div className="flex flex-wrap gap-2">
                    {reposData.lanuages?.map((lang) => (
                        <span
                            key={lang.name}
                            className="px-3 py-1 bg-[#1E2A3B] rounded-full text-sm"
                        >
                            {lang.name} ({((lang.value / reposData.size) * 100).toFixed(1)}%)
                        </span>
                    ))}
                </div>
            </div>

            {/* Contributors */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Top Contributors</h2>
                <div className="flex flex-wrap gap-4">
                    {reposData.contributors?.slice(0, 8).map((contributor) => (
                        <div key={contributor.id} className="flex items-center gap-2">
                            <img
                                src={contributor.avatar_url}
                                alt={contributor.login}
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-sm">{contributor.login}</p>
                                <p className="text-xs text-gray-400">{contributor.contributions} commits</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Topics */}
            {reposData.topics && reposData.topics.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Topics</h2>
                    <div className="flex flex-wrap gap-2">
                        {reposData.topics.map((topic) => (
                            <span
                                key={topic}
                                className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <Pichart data={reposData.lanuages} />


        </div></div>
    )
}

export default Fullrepo
