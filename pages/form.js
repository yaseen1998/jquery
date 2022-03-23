// // npm install react-hook-form
// // https://react-hook-form.com/get-started
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input className = 'border-2 bg-red-500' defaultValue="test" {...register("example")} />
      
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//   );
// }

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) =>{ 
//       console.log(data);
//   }
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }

// import React from "react";
// import { useForm } from "react-hook-form";

// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

// const App = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="First Name" register={register} required />
//       <Select label="Age" {...register("Age")} />
//       <input type="submit" />
//     </form>
//   );
// };

// export default App

// import React from "react";
// import Select from "react-select";
// import { useForm, Controller } from "react-hook-form";
// import Input from "@material-ui/core/Input";

// const App = () => {
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       firstName: '',
//       select: {}
//     }
//   });
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="firstName"
//         control={control}
//         render={({ field }) => <Input {...field} />}
//       />
//       <Controller
//         name="select"
//         control={control}
//         render={({ field }) => <Select 
//           {...field} 
//           options={[
//             { value: "chocolate", label: "Chocolate" },
//             { value: "strawberry", label: "Strawberry" },
//             { value: "vanilla", label: "Vanilla" }
//           ]} 
//         />}
//       />
//       <input type="submit" />
//     </form>
//   );
// };

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { TextField, Checkbox } from "@material-ui/core";

// function App() {
//   const { handleSubmit, control, reset } = useForm({
//     defaultValues: {
//       checkbox: false,
//     }
//   });
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="checkbox"
//         control={control}
//         rules={{ required: true }}
//         render={({ field }) => <Checkbox {...field} />}
//       />
//       <input type="submit" />
//     </form>
//   );
// }
import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";


let renderCount = 0;

const Input = ({ name, control, register, index }) => {
  const value = useWatch({
    control,
    name
  });
  return <input {...register(`test.${index}.age`)} defaultValue={value} />;
};

function App() {
  const [show, setShow] = React.useState(true);
  const { register, control, getValues, handleSubmit } = useForm({
    defaultValues: {
      test: [{ firstName: "Bill", lastName: "Luo", age: "2" }]
    }
  });
  const { fields, remove } = useFieldArray({
    control,
    name: "test"
  });

  const onSubmit = (data) => console.log("data", data);

  renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
      <span className="counter">Render Count: {renderCount}</span>
      {show && (
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <input
                  defaultValue={getValues(`test.${index}.firstName`)}
                  {...register(`test.${index}.firstName`)}
                />

                <Controller
                  render={({ field }) => <input {...field} />}
                  control={control}
                  name={`test.${index}.lastName`}
                  defaultValue={getValues(`test.${index}.lastName`)}
                />

                <Input
                  register={register}
                  control={control}
                  index={index}
                  name={`test.${index}.age`}
                />

                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <section>
        <button
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          Hide
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}


export default App