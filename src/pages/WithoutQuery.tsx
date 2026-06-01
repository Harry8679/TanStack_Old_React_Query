import { useState } from "react";
import type { Post } from "../api/post";

export default function WithoutQuery() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
}