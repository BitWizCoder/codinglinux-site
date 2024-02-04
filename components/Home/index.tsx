import BlogCard from "../Blog/BlogCard";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="flex justify-center gap-56">
      <section className="">
        <BlogCard />
      </section>
      <section className="">
        <Sidebar />
      </section>
    </div>
  );
}
export default Home;
