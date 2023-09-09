"use client";
import { usePathname } from "next/navigation";
import LeftMessagesBar from '@/components/messagebar/leftmessagesBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPage = usePathname();
  return (
    <div className='h-[85vh] max-h-[90vh] shadow-lg overflow-hidden rounded-lg grid grid-cols-12'>
    <div className='col-span-3'><LeftMessagesBar /></div>
    <div className='col-span-9'>{children}</div>
</div>
  );
}
