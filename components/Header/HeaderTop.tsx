import Link from "next/link";
import {
  FaFacebookF,
  FaMagnifyingGlass,
  FaRss,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function HeaderTop() {
  return (
    <div className="flex mt-16 justify-between items-center py-8">
      <div className="flex gap-3 w-32">
        <FaFacebookF />
        <FaXTwitter />
        <FaYoutube />
        <FaRss />
      </div>
      <Link
        href={"/"}
        className="text-3xl font-semibold transition-transform duration-300 hover:translate-y-[-3px]"
      >
        CL Blog
      </Link>
      <div className="w-32">
        <FaMagnifyingGlass />
      </div>
    </div>
  );
}
export default HeaderTop;
