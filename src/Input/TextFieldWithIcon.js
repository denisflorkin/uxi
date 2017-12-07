import React, { Component } from 'react';
import TextField from './TextField';
import styled from 'styled-components';
import { IconButton, Button } from 'uxi/Button';
import { Merge } from 'uxi/Icons';
import { InputGroup } from 'uxi/Input';

const TextFieldWithIconUI = styled.div`
  disaply: flex;
  align-items: center;
`;

class TextFieldWithIcon extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { value, defaultValue } = this.props;
    const valueToInitStoreWith = value || defaultValue || '';
    this.setState({ value: valueToInitStoreWith });
  }

  handleChange(event) {
    const { value } = event.target;
    const { onChange } = this.props;

    this.setState({ value });

    if (onChange) { onChange(event); }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const value = event.target.querySelector('input').value;
    console.log('handleSubmit');
    const { onClick, onSubmit, onEnter } = this.props;
    // const { value } = this.state;
    if (onClick) { onClick(value); }
    if (onSubmit) { onSubmit(value); }
    if (onEnter) { onEnter(value); }
  }

  render() {
    const {
      icon,
      // onClick,
      onChange,
      // value,
      ...otherProps
    } = this.props;

    const inputProps = {
      ...otherProps,
      // ...{ onChange: this.handleChange },
    };

    return (
      <InputGroup>
        <form onSubmit={this.handleSubmit}>
          <TextField {...inputProps} />
          <Button
            type="primary"
            style={{ height: '100%' }}
            icon={icon}
          />
        </form>
      </InputGroup>
    );
  }
}

TextFieldWithIcon.displayName = 'TextFieldWithIcon';

export default TextFieldWithIcon;