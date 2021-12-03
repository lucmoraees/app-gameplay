import React from 'react';
import { TextInputProps, TextInput } from 'react-native';

import { styles } from './styles';

const BoxInput = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput 
      style={styles.container}
      keyboardType="numeric"
      returnKeyType="done"
      {...rest}
    />
  );
};

export default BoxInput;
