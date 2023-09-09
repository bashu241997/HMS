import React from "react";
import MessageContainer from "@/components/messagebar/messagecontainer";

const Page = ({ params }: { params: { id: string } }) => {
  return <MessageContainer param={params.id} />;
};
export default Page;
