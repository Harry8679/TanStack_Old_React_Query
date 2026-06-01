import { useEffect, useState } from "react";
import { fetchPost, type Post } from "../api/post";
import PostCard from "../components/PostCard";

export default function WithoutQuery() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const data = await fetchPost();
                setPosts(data);
            } catch {
                setError("Erreur de chargement");
            } finally {
                setLoading(false);
            }
        }

        loadPosts();
    }, []);

    if (loading) return <p>Chargement ...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="grid gap-4">
            {posts.slice(0, 10).map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}