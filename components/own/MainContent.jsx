import { useState } from "react";
import MainHeader from "./MainHeader";
import MainSidebar from "./MainSidebar";
import MainPage from "./MainPage";
import EventDetails from "./EventDetails";

export default function MainContent() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-screen h-screen box-content">
      <MainHeader />
      <div className="flex px-2 gap-4 bg-transparent">
        <MainSidebar />
        {showDetails ? (
          <EventDetails onBack={() => setShowDetails(false)} />
        ) : (
          <MainPage onEyeClick={() => setShowDetails(true)} />
        )}
      </div>
    </div>
  );
}
