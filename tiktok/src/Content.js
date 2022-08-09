import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [posts, setPosts] = useState([])

    const [type, setType] = useState('posts')

    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
        // Cleanup function
        return () => {
            console.log('Unmounted...');
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>
                ))}
            </ul>
            {showGoToTop && (
            <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                }}
            >Go to Top</button>)}
        </div>
    )
}

export default Content