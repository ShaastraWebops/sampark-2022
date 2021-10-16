import fileDownload from "js-file-download";
import React from "react";
import {
  useGetUsersDataCsvQuery,
  useGetUsersCountQuery,
} from "../../generated/graphql";
import "../../Styles/Admin.css";

interface Props {}

const Admin = (props: Props) => {
  const { data: count, loading: countLoading } = useGetUsersCountQuery();
  const { data: csv, loading: csvLoading } = useGetUsersDataCsvQuery();
  if (countLoading || csvLoading)
    return <div className="sampark-one-line">Loading...</div>;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        marginTop: "10px",
      }}
    >
      <div className="sampark-one-line" style={{width: "unset"}}>
        Total Registration: {count?.getUsersCount}
      </div>
      <button
        className="home-register"
        onClick={() => {
          fileDownload(csv?.getUsersDataCSV!, `sampark_participants.csv`);
        }}
        style={{ marginLeft: "20px", marginTop: "0px" }}
      >
        DOWNLOAD CSV
      </button>
    </div>
  );
};

export default Admin;
