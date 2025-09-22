import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  BarChart3, 
  MessageSquare, 
  Settings,
  UserCheck,
  FileText,
  Clock,
  Calendar,
  ChevronDown
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import structuraLogo from "@/assets/structura-logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Workers", url: "/workers", icon: Users },
  { title: "Projects", url: "/projects", icon: ClipboardList },
  { title: "Attendance", url: "/attendance", icon: UserCheck },
  { title: "Reports", url: "/reports", icon: BarChart3 },
];

const managementItems = [
  { title: "Schedule", url: "/schedule", icon: Calendar },
  { title: "Timesheets", url: "/timesheets", icon: Clock },
  { title: "Documents", url: "/documents", icon: FileText },
  { title: "Messages", url: "/messages", icon: MessageSquare },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  
  const [isMainOpen, setIsMainOpen] = useState(true);
  const [isManagementOpen, setIsManagementOpen] = useState(true);

  const isActive = (path: string) => currentPath === path;
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `w-full justify-start transition-smooth ${
      isActive 
        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium" 
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    }`;

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} transition-smooth border-r border-sidebar-border bg-sidebar-background`}>
      <SidebarContent className="p-0">
        {/* Logo Section */}
        <div className="p-4 border-b border-sidebar-border">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-1">
                <img 
                  src={structuraLogo} 
                  alt="Structura Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-sidebar-foreground">Structura</h2>
                <p className="text-xs text-sidebar-foreground/60">Management Suite</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-1">
                <img 
                  src={structuraLogo} 
                  alt="Structura Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel 
              className="text-sidebar-foreground/80 font-medium px-4 py-2 cursor-pointer flex items-center justify-between"
              onClick={() => setIsMainOpen(!isMainOpen)}
            >
              Main Menu
              <ChevronDown className={`w-4 h-4 transition-transform ${isMainOpen ? 'rotate-0' : '-rotate-90'}`} />
            </SidebarGroupLabel>
          )}
          
          {(isMainOpen || collapsed) && (
            <SidebarGroupContent className="px-2">
              <SidebarMenu>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="mb-1">
                      <NavLink to={item.url} className={getNavCls}>
                        <item.icon className={`${collapsed ? 'w-5 h-5' : 'w-5 h-5 mr-3'}`} />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        {/* Management Section */}
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel 
              className="text-sidebar-foreground/80 font-medium px-4 py-2 cursor-pointer flex items-center justify-between"
              onClick={() => setIsManagementOpen(!isManagementOpen)}
            >
              Management
              <ChevronDown className={`w-4 h-4 transition-transform ${isManagementOpen ? 'rotate-0' : '-rotate-90'}`} />
            </SidebarGroupLabel>
          )}
          
          {(isManagementOpen || collapsed) && (
            <SidebarGroupContent className="px-2">
              <SidebarMenu>
                {managementItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="mb-1">
                      <NavLink to={item.url} className={getNavCls}>
                        <item.icon className={`${collapsed ? 'w-5 h-5' : 'w-5 h-5 mr-3'}`} />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>

        {/* Settings at bottom */}
        <div className="mt-auto p-2 border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/settings" className={getNavCls}>
                  <Settings className={`${collapsed ? 'w-5 h-5' : 'w-5 h-5 mr-3'}`} />
                  {!collapsed && <span>Settings</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}