import { useForm } from "react-hook-form";
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  extraError?: string;
}
function SignUp() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log(data.email, data.firstName, data.lastName, data.password);
    setValue("email", "");
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("password", "");
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(handleValid)}
      >
        <input placeholder="Email" {...register("email")}></input>
        <input placeholder="FirstName" {...register("firstName")}></input>
        <input placeholder="LastName" {...register("lastName")}></input>
        <input placeholder="Password" {...register("password")}></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
