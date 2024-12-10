
import { useFormContext } from "react-hook-form";

type TTextArea = {
  label: string;
  name: string;
  defaultValue?:string
};

const THTextArea = ({ label, name ,defaultValue}: TTextArea) => {
  const { register } = useFormContext();
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <textarea
        placeholder={`${label}`}
        className="input input-bordered"
        {...register(name)}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default THTextArea;
