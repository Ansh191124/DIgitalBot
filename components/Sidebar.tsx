'use client';

import { CalendarCheck, LayoutDashboard, LogOut, PhoneCall, Users } from "lucide-react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/calls", label: "Call Logs", icon: PhoneCall },
  { href: "/dashboard/leads", label: "Leads", icon: Users },
  { href: "/dashboard/appointments", label: "Appointments", icon: CalendarCheck }
];

interface User {
  id: string;
  email: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          const user: User = JSON.parse(userStr);
          setUserEmail(user.email);
          const username = user.email.split('@')[0];
          setUserName(username);
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    }
  }, []);

  const handleSignOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    router.push('/');
  };

  const avatarLetter = userName ? userName.charAt(0).toUpperCase() : 'U';

  if (!isClient) {
    return (
      <aside className="h-screen w-60 bg-slate-50 border-r border-gray-200 flex flex-col fixed top-0 left-0 z-10 shadow-sm font-sans">
        <div className="px-4 py-5 border-b border-gray-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white text-base font-bold">DB</span>
            </div>
            <div>
              <div className="text-base font-semibold text-gray-900">DigitalBot</div>
              <div className="text-xs text-gray-500">Voice Agent Services</div>
            </div>
          </div>
        </div>
        <nav className="px-4 mt-4 space-y-1 flex-1">
          {items.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link 
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
                {active && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></div>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="px-4 py-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className="size-9 rounded-full bg-blue-600 grid place-items-center text-white text-sm font-semibold">
                U
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
            </div>
            <div className="leading-tight flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-900 truncate">
                Loading...
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="h-screen w-60 bg-slate-50 border-r border-gray-200 flex flex-col fixed top-0 left-0 z-10 shadow-sm font-sans">
      
      <div className="px-4 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-base font-bold">DB</span>
          </div>
          <div>
            <div className="text-base font-semibold text-gray-900">DigitalBot</div>
            <div className="text-xs text-gray-500">Voice Agent Services</div>
          </div>
        </div>
      </div>
      
      <nav className="px-4 mt-4 space-y-1 flex-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link 
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
              {active && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></div>
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="size-9 rounded-full bg-blue-600 grid place-items-center text-white text-sm font-semibold">
              {avatarLetter}
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
          </div>
          <div className="leading-tight flex-1 min-w-0">
            <div className="text-sm font-semibold text-gray-900 truncate">
              {userName || 'User'}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {userEmail || 'user@example.com'}
            </div>
          </div>
          <button 
            onClick={handleSignOut}
            className="flex-shrink-0 p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}