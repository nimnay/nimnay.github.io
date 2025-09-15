"use client";

export default function Sidebar() {
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-50 z-20 px-6 bg-transparent flex items-center">
      <div className="flex flex-col space-y-5 w-full items-end text-right">
        {/* Navigation items */}
        <nav className="flex flex-col space-y-3 font-mono-custom text-[14px] text-gray-600 items-end text-right">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-medium tracking-wide uppercase transition-colors duration-200 hover:text-black`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Divider line, half height, right-aligned */}
        <div className="w-px h-1/2 bg-gray-300 absolute right-0 top-1/4"></div>
      </div>
    </div>
  );
}
