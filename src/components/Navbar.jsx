import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/reviews"}>All Reviews</NavLink>
      <NavLink to={"/add-review"}>Add Review</NavLink>
      <NavLink to={"/my-reviews"}>My Reviews</NavLink>
      <NavLink to={"/game-watchList"}>Game WatchList</NavLink>
    </>
  );

  return (
    <div className="">
      <div className="navbar container mx-auto py-6">
        <div className="navbar-start flex gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-warning bg-transparent lg:hidden text-warning hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </div>
          </div>
          <Link className="text-3xl text-white font-bold">
            <span className="bg-gradient-to-r from-[#FFC536] to-black text-transparent bg-clip-text">
              Chill
            </span>
            Gamer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-6 text-white">
            {links}
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;