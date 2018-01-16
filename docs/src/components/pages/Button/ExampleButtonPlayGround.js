import React from 'react';
import { Button } from 'uxi/Button';
import Ul from './Ul';
import { Upload } from 'uxi/Icons';

const ExampleButtonPlayGround = () => (
  <Ul>
    <Button disabled={true} link="http://google.com" text="send" />
    <Button disabled={true} icon={<Upload />} />
    <br />
    <Button disabled={false} link="http://google.com" text="send" />
    <Button disabled={false} icon={<Upload />}  />
  </Ul>
);

export default ExampleButtonPlayGround;
