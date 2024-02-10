import Link from "next/link";

function BlogCard() {
  return (
    <div className="bg-white shadow-sm p-8 w-[800px]">
      <Link href={"/"} className="text-5xl mb-6 group relative leading-[55px]">
        <span className="hover:border-b-4 border-red-400 duration-300 ">
          Far far away, behind the word mountains
        </span>
        {/* <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span> */}
      </Link>
      <p className="mb-8 mt-4"> August 15, 20192 Min Read 1 5603</p>

      <p className="mb-10">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden…
      </p>

      <div className="flex justify-between">
        <div className="flex gap-3">
          <p>#Music</p>
          <p>#Technology</p>
          <p>#Travel</p>
        </div>
        <div>
          <p>Jonathan Doe</p>
        </div>
      </div>

      <Link href={"/"} className="text-white bg-gray-700 p-3 absolute ">
        Continue Reading
      </Link>
    </div>
  );
}
export default BlogCard;
