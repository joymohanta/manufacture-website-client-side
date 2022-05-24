import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <h2 className="font-bold flex justify-end mr-4">
        <i
          title={user?.email}
          className="fa-solid fa-user mt-4 pr-3 fa-xl text-secondary"
        ></i>
      </h2>
      <h3>This is Dashboard page</h3>
    </div>
  );
};

export default Dashboard;
