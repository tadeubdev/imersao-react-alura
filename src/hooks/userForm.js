import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValue(key, value) {
    setValores({
      ...valores,
      [key]: value,
    });
  }

  function handleChange({ target }) {
    setValue(
      target.getAttribute('name'),
      target.value,
    );
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    handleChange,
    clearForm,
    valores,
  };
}

export default useForm;
