import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoadingContext } from "../../context/loading";

function Header () {

  const {isLoading} = useContext(LoadingContext);
 
   return (
    <div className="w-full py-2 px-4 border-0 border-b flex justify-between mb-7">
        <Link className='text-xl text-slate-400 font-semibold text-blue-700 no-underline' to="/">Podcaster</Link>
        {
          isLoading &&  
           (<div className='mr-3'><svg className='absolute right-2 top-1' width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#124BFF" stroke="#124BFF" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#124BFF" stroke="#124BFF" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#124BFF" stroke="#124BFF" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg></div>)
        }
    </div>
  );
}

export default Header;