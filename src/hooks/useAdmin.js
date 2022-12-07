import { useEffect, useState } from "react";

const useAdmin = (aduser) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = aduser?.email;
    if (email) {
      fetch(`https://manufacture-website.onrender.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [aduser]);
  return [admin, adminLoading];
};
export default useAdmin;
