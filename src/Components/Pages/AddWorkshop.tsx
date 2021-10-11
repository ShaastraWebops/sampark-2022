import { useHistory } from "react-router-dom";
import {
  CreateWorkshopInput,
  refetchGetWorkshopsQuery,
  useCreateWorkshopMutation,
} from "../../generated/graphql";
import WorkshopForm from "../Form/WorkshopForm";
import Loader from "../Shared/Loader";
import Navbar from "../Shared/Navbar";
import Title from "../Shared/Title";

interface Probs {}

const AddWorkshop = (probs: Probs) => {
  const [addWorkshop, { data, loading, error }] = useCreateWorkshopMutation();
  const history = useHistory();

  const submitWorkshopHandler = async (data: CreateWorkshopInput) => {
    try {
      await addWorkshop({
        variables: {
          createWorkshopData: data,
        },
        refetchQueries: [refetchGetWorkshopsQuery()],
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (data?.createWorkshop) {
    window.alert("Workshop added");
    history.push(`/workshop/${data.createWorkshop.id}`);
  }

  if (loading) return <Loader/>;

  if (error) return <p>{error.message}</p>;

  return (
    <div
      style={{
        backgroundColor: "#acbcf7",
        paddingTop: "72px",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Title title="ADD WORKSHOP" isHomePage={false} />
      <WorkshopForm
        initialValues={{
          title: null,
          description: null,
          pic: null,
          workshopDate: null,
          registrationCloseTime: null,
          contacts: [
            {
              name: null,
              email: null,
              number: null,
            },
          ],
        }}
        onSubmit={submitWorkshopHandler}
      />
    </div>
  );
};

export default AddWorkshop;
