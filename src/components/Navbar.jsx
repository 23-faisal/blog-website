import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const pages = [
    {
      name: "Home",
      address: "/",
    },
    {
      name: "Services",
      address: "/services",
    },
    {
      name: "Information",
      address: "/information",
    },
    {
      name: "Projects",
      address: "/projects",
    },
    {
      name: "Review",
      address: "/review",
    },
    {
      name: "Blog",
      address: "/blog",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto bg-white  sticky z-50 top-5">
      <nav className="flex items-center justify-between my-5 py-6 rounded-lg px-2 shadow-md ">
        <div>
          <Link
            className="font-bold font-bodyFont text-4xl text-slate-950 shadow-[0 2px 40px 0 rgba(0,0,0,.08)]  border-white  transition duration-200 ease-in-out "
            to="/"
          >
            Samara
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-7 ">
            {pages.map((page) => (
              <li key={page.address}>
                <Link
                  className="text-md font-bodyFont font-semibold text-slate-500"
                  to={page.address}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <MdMenu className="md:hidden" />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
