import React, { useEffect, useState } from 'react'
import './GithubFinder.css'
import axios from 'axios'
import Swal from 'sweetalert2'

const GithubFinder = () => {
    const [data, setData] = useState(null)
    const [value, setValue] = useState("")
    const [username, setUsername] = useState(null)
    const [loading, setLoading] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (!username) return

        async function getGitHubUser() {
            setLoading(true)
            try {
                const res = await axios.get(`https://api.github.com/users/${username}`)
                setData(res.data)
            } catch (err) {
                setData(null)
                Swal.fire({
                    icon: 'error',
                    title: 'User Not Found',
                    text: `GitHub user "${username}" doesn't exist.`,
                    confirmButtonColor: '#e74c3c',
                })
            } finally {
                setLoading(false)
                setValue("")
            }
        }

        getGitHubUser()
    }, [username])

    return (
        <div className={`github-container ${darkMode ? 'dark' : ''}`}>
            <div className="header">
                <h1>GitHub Profile Finder</h1>
                <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter GitHub Username"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={() => setUsername(value)}>Search</button>
            </div>

            {loading && <div className="loader"></div>}

            {data && !loading && (
                <div className="card">
                    <img src={data.avatar_url} alt={data.login} />
                    <h2>{data.name || data.login}</h2>
                    <p><strong>Bio:</strong> {data.bio || "No bio available"}</p>
                    <div className="follow-info">
                        <span>👥 {data.followers} Followers</span>
                        <span>👤 Following {data.following}</span>
                    </div>
                    <a href={data.html_url} target="_blank" rel="noreferrer">View Profile</a>
                </div>
            )}
        </div>
    )
}

export default GithubFinder
