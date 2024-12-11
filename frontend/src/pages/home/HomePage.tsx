import { Button } from "@/components/ui/button";
import LeftSection from "./partials/LeftSection";
import RightSection from "./partials/RightSection";
import PopularProjects from "@/components/card/PopularProjectsCard";
import RecentBlogsCard from "@/components/card/RecentBlogsCard";
import RightBlogSidebar from "./sidebar/RightBlogSidebar";
import SidebarTitle from "@/components/ui/title/SidebarTitle";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold font-body mt-4 border-b border-b-gray-200">
        Latest Blog
      </h1>
      <div className="grid grid-cols-3 gap-6 mt-8 max-w-[1024px] mx-auto">
        {/* Sol Taraf: Tam Ekran Görsel */}
        <LeftSection />

        {/* Sağ Taraf: Üç Bölümlü Liste */}
        <RightSection />
      </div>

      {/* Section Popular Project */}
      <div className="bg-[#1F2024] w-full h-full mt-8 rounded-lg">
        <Button variant={"destructive"}>Popular Projects</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <PopularProjects />
        <PopularProjects />
        <PopularProjects />
        <PopularProjects />
      </div>

      {/* Section Popular Blogs */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-[#1F2024] col-span-2 h-full mt-8 rounded-lg flex items-center justify-between px-4">
          <Button variant={"destructive"}>Recent Blogs</Button>
          <Button size={"sm"} variant={"destructive"}>
            Show More
          </Button>
        </div>
        <SidebarTitle title="Social Plugin" />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {/* Left:Blogs List*/}
        <div className="col-span-2 mt-12">
          <RecentBlogsCard />
        </div>

        {/* Right:Sidebar */}
        <div className="mt-12">
          <RightBlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
