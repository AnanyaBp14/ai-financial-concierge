import React, { useState } from "react";
import Onboarding from "./Onboarding";
import Chat from "./Chat";

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 flex items-center justify-center">
      {!userId ? (
        <Onboarding setUserId={setUserId} />
      ) : (
        <Chat userId={userId} />
      )}
    </div>
  );
}

export default App;