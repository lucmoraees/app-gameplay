import React from 'react';
import { TextInputProps, TextInput } from 'react-native';

import { styles } from './styles';

const Textarea = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput 
      style={styles.container}
      {...rest}
    />
  );
};

export default Textarea;
