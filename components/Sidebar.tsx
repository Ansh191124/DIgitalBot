"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, PhoneCall, Users, CalendarCheck, LogOut } from "lucide-react";

// In your Sidebar component
const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/calls", label: "Call Logs", icon: PhoneCall },
  { href: "/dashboard/leads", label: "Leads", icon: Users },    // Changed to /dashboard/lead 
];

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="h-screen w-60 bg-white border-r border-gray-200 flex flex-col fixed top-0 left-0 z-10 shadow-lg font-sans">
      
      {/* Dashboard Title Section */}
      <div className="px-4 py-4 border-b border-gray-100">
        <div className="text-base font-semibold text-gray-800">DigitalBot</div>
        <div className="text-sm text-gray-500">Voice Agent Services</div>
      </div>

      {/* User Info Section */}
      <div className="px-4 py-4 flex items-center gap-3 border-b border-gray-100">
        <div className="size-9 rounded-full bg-indigo-100 grid place-items-center text-indigo-600 text-sm font-bold shadow-inner">
          D
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-gray-800">Ansh</div>
          <div className="text-xs text-gray-500 truncate w-32">anshjaiswal00786@gmail.com</div>
        </div>
        {/* Online Status Indicator */}
        <span className="ml-auto size-2.5 rounded-full bg-green-500 ring-2 ring-white flex-shrink-0" />
      </div>

      {/* Navigation Links */}
      <nav className="px-3 mt-4 flex-1 space-y-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link 
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group
                ${active
                  ? "bg-indigo-50 text-indigo-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
            >
              <Icon 
                className={`w-4 h-4 transition-colors duration-200 ${
                  active ? "text-indigo-700" : "text-gray-500 group-hover:text-gray-800"
                }`} 
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Sign Out Section */}
      <div className="mt-auto px-4 py-4 border-t border-gray-100">
        <button 
          onClick={() => console.log("Signing out...")} 
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800 w-full text-left transition-colors duration-200"
        >
          <LogOut className="w-4 h-4 text-gray-500" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}