import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoadingContext } from "../../context/loading";

function Header () {


  const {isLoading} = useContext(LoadingContext);

 
   return (

   
    <div className="w-full py-2 px-4 border-0 border-b flex justify-between mb-7">
        <Link style={{textDecoration: 'none', color: 'cadetblue'}} to="/">Podcaster</Link>

        {
          isLoading && (<div>Loading ...</div>)
        }

    </div>
  );
}

export default Header;