import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "../../Styles/WorkshopForm.css";

interface Probs {
  initialValues: any;
  onSubmit: any;
}

export const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const WorkshopForm = (probs: Probs) => {
  //Markdown State Values
  const [value, setValue] = React.useState(probs.initialValues.description);
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write"
  );

  //Image State Values
  const [image, setImage] = React.useState<any | null>();
  const [url, setUrl] = React.useState<any | null>(probs.initialValues.picUrl);
  const [uploadedError, setUploadedError] = React.useState(false);
  const [spinner, setSpinner] = React.useState(false);

  const uploadImage = () => {
    if (!image) {
      window.alert("Select the image to upload");
      return;
    }
    setSpinner(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "wdkfttly");
    data.append("cloud_name", "janithsampark");
    fetch(" https://api.cloudinary.com/v1_1/janithsampark/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        setSpinner(false);
      })
      .catch((err) => {
        setUploadedError(err);
        setSpinner(false);
        console.log(err);
      });
  };

  return (
    <div>
      <Formik
        initialValues={probs.initialValues}
        onSubmit={async (values, actions) => {
          if (!url) {
            window.alert(
              "Upload the image by pressing the upload image button"
            );
          }
          let contactsStringArray: string[] = [];
          values.contacts.forEach((contact: any) =>
            contactsStringArray.push(JSON.stringify(contact))
          );
          await probs.onSubmit({
            title: !!values.title ? values.title : null,
            description: !!value ? value : null,
            pic: !!url ? url : null,
            workshopDate: !!values.workshopDate ? values.workshopDate : null,
            contact: !!contactsStringArray
              ? contactsStringArray.join(" AND ")
              : null,
            registrationCloseTime: !!values.registrationCloseTime
              ? new Date(values.registrationCloseTime!).toISOString()
              : null,
          });

          setUrl("");
          actions.resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <div className="form">
              <div className="form-input">
                <label htmlFor="title">Workshop Title</label>
                <Field
                  id="title"
                  name="title"
                  placeholder="Workshop Title"
                  required={true}
                />
              </div>
              <div className="form-input">
                <label htmlFor="description">Description</label>
                <Field name="description" required={true}>
                  {({ field }: { field: any }) => (
                    <ReactMde
                      {...field}
                      id="description"
                      borderColor={"#244f3b"}
                      width={"80vw"}
                      color={"#244f3b"}
                      value={value}
                      onChange={setValue}
                      selectedTab={selectedTab}
                      onTabChange={setSelectedTab}
                      generateMarkdownPreview={(markdown) =>
                        Promise.resolve(converter.makeHtml(markdown))
                      }
                    />
                  )}
                </Field>
              </div>
              <div className="form-input">
                <label htmlFor="workshopDate">Workshop Date</label>
                <Field
                  id="workshopDate"
                  name="workshopDate"
                  placeholder='Workshop Date(use this "1. 31st OCTBER" format)'
                  required={true}
                />
              </div>
              <div className="form-input">
                <label htmlFor="registrationCloseTime">
                  Registration Deadline
                </label>
                <Field
                  id="registrationCloseTime"
                  name="registrationCloseTime"
                  required={true}
                  type="datetime-local"
                />
              </div>
              <div>
                <Field name="pic">
                  {({ field }: { field: any }) => (
                    <input
                      {...field}
                      required={!url}
                      type="file"
                      id="pic"
                      onChange={(e) => setImage(e.target.files![0])}
                    />
                  )}
                </Field>
                <button onClick={uploadImage}>Upload Image</button>
                {spinner && <div>Loading...</div>}
                {url && (
                  <div>
                    <a href={url} target="_blank" rel="noreferrer">
                      {url}
                    </a>
                  </div>
                )}
                {uploadedError && <div>{uploadedError}</div>}
              </div>
              <div>Contacts</div>
              <FieldArray name="contacts">
                {({ insert, remove, push }) => (
                  <div className="form-contact">
                    {values.contacts.length > 0 &&
                      values.contacts.map((contact: any, index: number) => (
                        <div key={index} className="form-contact">
                          <div className="form-contact-input">
                            <label htmlFor={`contacts.${index}.name`}>
                              Name
                            </label>
                            <Field
                              name={`contacts.${index}.name`}
                              placeholder="Name"
                              type="text"
                              required={true}
                            />
                          </div>
                          <div className="form-contact-input">
                            <label htmlFor={`contacts.${index}.email`}>
                              Email
                            </label>
                            <Field
                              name={`contacts.${index}.email`}
                              placeholder="Email"
                              type="email"
                              // required={true}
                            />
                          </div>
                          <div className="form-contact-input">
                            <label htmlFor={`contacts.${index}.number`}>
                              Number
                            </label>
                            <Field
                              name={`contacts.${index}.number`}
                              placeholder="Number"
                              type="number"
                              // required={true}
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="form-btn"
                              onClick={() => remove(index)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="form-btn"
                      onClick={() =>
                        push({ name: null, email: null, number: null })
                      }
                    >
                      Add More Contacts
                    </button>
                  </div>
                )}
              </FieldArray>
              <button type="submit" className="form-btn">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkshopForm;
