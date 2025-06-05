import React, { useState, useEffect } from "react";

const OnlineUsers = () => {
  const [userCount, setUserCount] = useState(77);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(1, prev + change);
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-6 bottom-12 z-50">
      <div className="relative group">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 text-cyan-500 font-bold shadow-lg">
          {userCount}
        </div>

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm rounded bg-cyan-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Online Users
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-cyan-500"></div>
        </div>
      </div>
    </div>
  );
};

export default OnlineUsers;
