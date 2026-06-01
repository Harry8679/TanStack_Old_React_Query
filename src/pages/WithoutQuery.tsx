import { useEffect, useState } from "react";
import { fetchPost, type Post } from "../api/post";

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
}