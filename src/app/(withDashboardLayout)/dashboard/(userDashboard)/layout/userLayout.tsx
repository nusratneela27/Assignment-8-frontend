import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/DashboardNavbar/dashboardNavbar";
import { UserSidebarWrapper } from "@/app/(withDashboardLayout)/components/DashboardSidebar/UserSidebar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <UserSidebarWrapper></UserSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
