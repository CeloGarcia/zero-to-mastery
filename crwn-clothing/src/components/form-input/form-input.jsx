import React from 'react';

import './form-input.scss';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      label ?
        (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {capitalizeFirstLetter(label)}
        </label>)
        : null
    }
  </div>
)

export default FormInput;