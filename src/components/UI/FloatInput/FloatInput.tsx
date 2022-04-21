import React, {useState} from 'react';
import './floatInput.scss';

type Input = {
  label: string,
  type?: string,
}
type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const FloatInput: React.FC<Input> = ({label, type = "text"}) => {
    
    const [data, setData] = useState<string>("");
    const changeHandler: InputChangeHandler = (e) => setData(e.target.value);

  return (
    <div className='container'>
        <label htmlFor={`${label}_float_input`} className={data ? "active" : ""}>{label}</label>
        <input id={`${label}_float_input`} value={data} onChange={changeHandler} type={type} />
    </div>
  );
}

export default FloatInput;