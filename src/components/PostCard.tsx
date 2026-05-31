import type { Post } from "../api/post";

interface Props {
    post: Post
}

export default function PostCard({ post }: Props) {
    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-bold mb-2">{post.title}</h2>

            <p className="text-gray-600">{post.body}</p>
        </div>
    );
}