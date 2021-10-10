import { useHistory, useParams } from "react-router-dom";
import {
  CreateWorkshopInput,
  refetchGetWorkshopQuery,
  refetchGetWorkshopsQuery,
  useEditWorkshopMutation,
  useGetWorkshopQuery,
} from "../../generated/graphql";
import WorkshopForm from "../Form/WorkshopForm";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";

interface ContactJSON {
  name: string;
  email: string;
  number: string;
}

interface Probs {}

const EditWorkshop = (probs: Probs) => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [editWorkshop, { data, loading, error }] = useEditWorkshopMutation();
  const {
    data: workshopData,
    loading: queryLoading,
    error: queryError,
  } = useGetWorkshopQuery({
    variables: {
      workshopId: id,
    },
  });

  const submitWorkshopHandler = async (data: CreateWorkshopInput) => {
    try {
      await editWorkshop({
        variables: {
          editWorkshopWorkshopId: id,
          data: data,
        },
        refetchQueries: [
          refetchGetWorkshopsQuery(),
          refetchGetWorkshopQuery({ workshopId: id }),
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (data?.editWorkshop) {
    window.alert("Workshop added");
    history.push(`/workshop/${id}`);
  }

  if (loading || queryLoading) return <p>Loading...</p>;

  if (error || queryError) return <p>Error Occured</p>;

  if (workshopData) {
    const {
      title,
      description,
      pic,
      registrationCloseTime,
      workshopDate,
      contact,
    } = workshopData?.getWorkshop;

    let contacts: ContactJSON[] = [];
    contact
      .split(" AND ")
      .forEach((con: string) => contacts.push(JSON.parse(con)));
    console.log(contacts);
    return (
      <div
        style={{
          backgroundColor: "#acbcf7",
          paddingTop: "72px",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Title title="EDIT WORKSHOP" isHomePage={false} />
        <WorkshopForm
          initialValues={{
            title: title,
            description: description,
            pic: null,
            workshopDate: workshopDate,
            registrationCloseTime: registrationCloseTime,
            contacts: contacts,
            picUrl: pic,
          }}
          onSubmit={submitWorkshopHandler}
        />
      </div>
    );
  } else return <p>Error Occured</p>;
};

export default EditWorkshop;
