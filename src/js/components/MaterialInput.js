import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MaterialInput extends Component {
  constructor(){
    super();
    this.isValid = this.isValid.bind(this);
    this.getName = this.getName.bind(this);
  }

  isValid() {
    if (this.props.valid !== undefined) {
      return this.props.valid;
    } else if (this.props.error !== undefined) {
      return this.props.error.length == 0;
    }

    // if nothing is given, assume value as valid
    return true;
  }

  getClass() {
    return (this.isValid() ? "react-validate" : "react-validate invalid");
  }

  getName() {
    if (this.props.name.trim().length > 0) {
      return this.props.name;
    }

    return this.props.id;
  }

  render() {
    let valid = true;
    let error = this.props.error;

    if (this.props.validate) {
      let result = this.props.validate(this.props.value);
      if (typeof(result) === "boolean") {
        valid = result;
      }

      if (typeof(result) === "object") {
        if (result.hasOwnProperty('valid')) { valid = result['valid']; }
        if (result.hasOwnProperty('error')) { error = result['error']; }
      }
    }

    const outerClass = "input-field " + (this.props.className ? this.props.className : "");
    const labelClass = (this.props.value.length > 0 ? "active " : "");

    return (
      <div className={outerClass}>
        <input type="text"
               id={this.props.id}
               name={this.getName()}
               key={this.getName()}
               className={this.getClass()}
               value={this.props.value}
               onChange={this.props.onChange}
        />
        <label htmlFor={this.props.id}
               data-error={this.props.error}
               data-success=""
               className={labelClass}>
          {this.props.children}
        </label>
      </div>
    )
  }
}

export default MaterialInput;
