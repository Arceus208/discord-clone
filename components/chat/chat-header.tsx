import { Hash, Menu } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";
import { UserAvatar } from "../user-avatar";
import { SocketIndicator } from "../socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

type ChatHeaderProps = {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
};

export const ChatHeader = ({
  name,
  serverId,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle
        serverId={serverId}
      ></MobileToggle>
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2"></Hash>
      )}
      {type === "conversation" && (
        <UserAvatar
          src={imageUrl}
          className="h-8 w-8 md:h-8 md:w-8 mr-2"
        ></UserAvatar>
      )}
      <p className="font-semibold text-md text-black dark:text-white">
        {name}
      </p>
      <div className="ml-auto flex items-center">
        {type === "conversation" && (
          <ChatVideoButton></ChatVideoButton>
        )}
        <SocketIndicator></SocketIndicator>
      </div>
    </div>
  );
};
