import React, { ChangeEvent } from "react";

type RegexInputProps = {
  setRegex: Function;
};

function RegexInput({ setRegex }: RegexInputProps) {
  const handleInputChange = (e: ChangeEvent) => {
    const value = (e as ChangeEvent<HTMLInputElement>).target.value;
    try {
      const regex = new RegExp(value);
      setRegex(regex);
    } catch {}
  };

  return (
    <div>
      <form>
        <label>Your regex:</label>
        <input onChange={handleInputChange}></input>
      </form>
    </div>
  );
}

export default RegexInput;