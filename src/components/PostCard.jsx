import { Link } from "react-router-dom";
import dbService from "../appwrite/config";
import parse from "html-react-parser";

function PostCard({$id,title,content,featuredImage}) {
  return (
    <Link to={`/post/${$id}`} title={title}>
      <div className="max-w-sm h-full rounded overflow-hidden shadow-lg shadow-gray-300">
        <img className="w-full" src={dbService.getFilePreview(featuredImage)} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {parse(content.substr(0,255))}
          </p>
        </div>
      </div>    
    </Link>
  )
}

export default PostCard;