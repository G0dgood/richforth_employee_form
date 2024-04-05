
const InputField = ({ placeholder, style, label, value, type, onChange, max, disable, bold, showError, errors, values }: any) => {
  return (
    <div className={"input-payroll"}>
      <label className={"input__label"} style={bold}>
        {label}
        <input
          id="input2"
          className={"input__field-view"}
          type={type}
          autoComplete="off"
          placeholder={placeholder}
          style={style}
          value={values}
          max={max}
          onChange={onChange}
          disabled={disable ? true : false}

        />
      </label>
    </div>
  );
};



export {
  InputField,
};
