import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

const Register = () => {
  const initialValue = {
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = object().shape({
    name: string().required("Name is required"),
    address: string().required("Address is required"),
    phone: string().required("Phone is required"),
    email: string().required("Email is required"),
    password: string()
      .min(6, "Password must be atleast 6 digits")
      .required("Password is required"),
  });

  const handleRegisterForm = async (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="mt-10 max-w-md mx-auto mb-2 shadow-lg flex flex-col items-center justify-center py-4 rounded-md w-full">
        <h1 className="text-center text-4xl font-bold mb-10">Register User</h1>

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleRegisterForm}
        >
          <Form className="w-[80%]">
            <div className="mb-6 relative w-full flex flex-col">
            <label htmlFor="name">UserName</label>
              <Field
                placeholder=""
                type="text"
                name="name"
                className="w-full border-[0.2rem]"
              ></Field>
              <ErrorMessage
                component="div"
                name="name"
                className="text-red-500 absolute text-xs bottom-[-15px]"
              />
            </div>
          
            <div className="mb-4 relative flex flex-col">
            <label htmlFor="address">Address</label>
              <Field
                placeholder=""
                type="text"
                name="city"
                className="input border-[0.2rem]"
              ></Field>
              <ErrorMessage
                component="div"
                name="address"
                className="text-red-500 absolute text-xs bottom-[-15px]"
              />
            </div>
            <div className="mb-4 relative flex flex-col">
              <label htmlFor="phone">Phone</label>
              <Field placeholder=""
               type="text"
                id="phone" 
                name="phone" 
                className="input border-[0.2rem]"></Field>
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 absolute text-xs bottom-[-15px]"
              />
            </div>
            <div className="mb-4 relative flex flex-col ">
              <label htmlFor="email">Email</label>
              <Field
                placeholder=""
                type="email"
                id="email"
                name="email"
                className=" input border-[0.2rem]"
              ></Field>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 absolute text-xs bottom-[-15px]"
              />
            </div>
            <div className="mb-4 relative flex flex-col">
              <label htmlFor="password">Password</label>
              <Field
                placeholder=""
                type="password"
                id="password"
                name="password"
                className="input border-[0.2rem]"
              ></Field>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 absolute text-xs bottom-[-19px]"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-xl text-white fw-fw-bolder w-full rounded-md text-cente my-3"
            >
              {"Register "}
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Register;
