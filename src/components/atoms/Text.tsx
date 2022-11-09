/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

import * as React from 'react';
import { Size } from '../types';

export interface TextProps {
  text?: string;
  color: string;
  size?: Size;
}

export const Text = ({ color = 'white', text }: TextProps) => {
  return (
    <p
      className={`text-xl tracking-wider text-${color}`}
      style={{ width: '432px', height: '143px' }}
    >
      {text && text}
    </p>
  );
};

export const HeaderText = ({ color, text }: TextProps) => {
  return (
    <p
      className={`text-4xl font-bold tracking-wider text-${color}`}
      style={{ width: '432px' }}
    >
      {text && text}
    </p>
  );
};
