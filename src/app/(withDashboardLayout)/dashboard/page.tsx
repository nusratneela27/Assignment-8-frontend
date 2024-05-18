import { UserSidebarWrapper } from "../components/DashboardSidebar/UserSidebar";

export const metadata = {
  title: "Dashboard",
};

const DashBoardHomePage = () => {
  return (
    <div>
      <UserSidebarWrapper></UserSidebarWrapper>
    </div>
  );
};

export default DashBoardHomePage;
