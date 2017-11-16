import React from 'react';
import { TextField, Radio, RadioGroup, Checkbox } from '../../../../../src/Input';

const ExampleSimple = () => (
  <ul>
    <li>
      <h3>Email :</h3>
      <TextField type="email" defaultValue={'fooobar'} />
    </li>
    <li>
      <h3>file :</h3>
      <TextField type="file" />
    </li>
    <li>
      <h3>Checkbox :</h3>
      <Checkbox />
    </li>
    <li>
      <h3>Radio :</h3>
      <Radio />
    </li>
    <li>
      <h3>RadioGroup :</h3>
      <RadioGroup name="zevzeg" value="val A" onChange={() => { window.alert('radio changed'); }}>
        <Radio value="val A" />
        <Radio value="val B" />
      </RadioGroup>
    </li>
  </ul>
);

export default ExampleSimple;
