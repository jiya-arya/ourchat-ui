import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";

function ChatApp() {
  return (
    <div className="chat-app">

      <Sidebar />

      <div className="chat-main">
        <ChatWindow />
        <MessageInput />
      </div>

    </div>
  );
}

export default ChatApp;