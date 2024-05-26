import { Link } from "react-router-dom";

function Header () {

   return (
    <div className="w-full py-2 px-4 border-0 border-b flex justify-between mb-7">
        <Link style={{textDecoration: 'none', color: 'cadetblue'}} to="/">Podcaster</Link>
    </div>
  );
}

export default Header;