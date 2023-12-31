import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

const Login = () => {
    // step 1
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = object().shape({
    email: string().required("Email field is required"),
    password: string()
      .min(6, "password must be of 6 digit")
      .required("Password field is required"),
  });


  return (
    <div className="max-w-md mx-auto mb-2 bg-white shadow-lg  flex flex-col items-center justify-center mt-[5%] py-6
    6">
        <h1 className='text-center text-4xl font-bold mb-10'>Login User</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="text-[20px] font-semibold">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border px-4 py-2"
                ></Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="text-[20px] font-semibold">
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border px-4 py-2"
                ></Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 p-3 text-xl text-white fw-fw-bolder w-full rounded-md text-center "
              >
                {isSubmitting ? "Logging in...." : "Login"}
              </button>
              <div className="my-3">
                
             
              </div>
            </Form>
          );
        }}
      </Formik>
      <div>
          {/* <Link to='/signup' className='text-xl mt-20'>Dont  have an account? Signup</Link> */}
        </div>
    </div>
  );
};

export default Login;