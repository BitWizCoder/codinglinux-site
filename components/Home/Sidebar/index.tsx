import RecentPosts from "./RecentPosts";
import Social from "./Social";
import Tags from "./Tags";

function Sidebar() {
  return (
    <div className="flex flex-col items-start">
      <RecentPosts />
      <Tags />
      <Social />
    </div>
  );
}
export default Sidebar;
