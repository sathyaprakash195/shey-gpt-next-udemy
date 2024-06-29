"use client";

import Sidebar from "./_components/sidebar";
import ChatArea from "./_components/chat-area";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
      <div className="flex-1 h-full">
        <ChatArea />
      </div>
    </div>
  );
}
