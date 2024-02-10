function RecentPosts() {
  return (
    <div className="w-[300px]">
      {/* Title */}
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-xl font-medium text-nowrap">Recent Posts</h1>
        <div className="bg-red-500 h-[2px] w-[100%]"></div>
      </div>
    </div>
  );
}
export default RecentPosts;
