import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserTable from "./UserTable";
import "./AllUsers.css";

const AllUsers = () => {
  const {
    data: allusers,
    isLoading,
    refetch,
  } = useQuery("allusers", () =>
    fetch("https://secure-bayou-16364.herokuapp.com/user").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>Here are all users: {allusers.length} </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Admin Select</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((user) => (
              <UserTable
                key={user._id}
                user={user}
                refetch={refetch}
              ></UserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
