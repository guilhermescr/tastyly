import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  password: string;
  setPassword: (value: string) => void;
  onChangeText?: (value: string) => void;
};

export default function PasswordInput({
  password,
  setPassword,
  onChangeText,
}: Props) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordWrapper}>
        <Feather name="lock" size={22} color="gray" style={styles.icon} />

        <TextInput
          style={styles.input}
          placeholder="••••••••"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={(value) => {
            setPassword(value);

            if (onChangeText) {
              onChangeText(value);
            }
          }}
        />

        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Feather
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {},
  label: {
    marginBottom: 8,
    fontWeight: '500',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7B7B7B',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
});
