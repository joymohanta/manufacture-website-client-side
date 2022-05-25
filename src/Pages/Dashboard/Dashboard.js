import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <h2 className="font-bold flex justify-end mr-4">
        <i
          title={user?.email}
          className="fa-solid fa-user mt-4 pr-3 fa-xl text-secondary"
        ></i>
      </h2>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h2 className="text-2xl font-bold text-secondary">
            USER'S DASHBOARD
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {!admin && (
              <li>
                <Link to="/dashboard/myorder">My Order</Link>
              </li>
            )}
            {!admin && (
              <li>
                <Link to="/dashboard/addreview">Add review</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/allusers">All Users</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/addproduct">Add Product</Link>
              </li>
            )}
            {admin && (
              <li>
                <Link to="/dashboard/manageallorders">Manage All Orders</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
