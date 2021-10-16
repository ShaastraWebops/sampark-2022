import fileDownload from "js-file-download";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useExportCsvQuery } from "../../generated/graphql";

interface Props {
  title: string;
}

const AdminWorkshop = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { data } = useExportCsvQuery({
    variables: { exportCsvWorkshopId: id },
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <button
        className="register-button"
        onClick={() => history.push(`/edit-workshop/${id}`)}
      >
        EDIT WORKSHOP
      </button>
      {/* <button className="register-button">DELETE WORKSHOP</button> */}
      <button
        className="register-button"
        onClick={() =>
          fileDownload(data?.exportCSV!, `${props.title}_participants.csv`)
        }
      >
        DOWNLOAD PARTICIPANTS
      </button>
    </div>
  );
};

export default AdminWorkshop;
