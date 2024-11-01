// src/app/page.tsx
"use client";
import { SidebarProvider } from "./context/sideBarContext";
import Index from "./pages"; 

export default function Home() {
  return (
    <SidebarProvider>
       <Index />
    </SidebarProvider>
  );
}
