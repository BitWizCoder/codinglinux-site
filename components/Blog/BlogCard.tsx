import Link from "next/link";

function BlogCard() {
  return (
    <div className="bg-white shadow-sm p-8 w-[800px] relative">
      <h1 className="text-5xl mb-3">Far far away, behind the word mountains</h1>
      <p className="mb-8"> August 15, 20192 Min Read 1 5603</p>

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
