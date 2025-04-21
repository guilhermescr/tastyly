import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  email: string;
  setEmail: (value: string) => void;
};

export default function EmailInput({ email, setEmail }: Props) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Email</Text>
      <View style={styles.wrapper}>
        <Feather name="mail" size={22} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="name@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
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
  wrapper: {
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
    paddingVertical: 10,
    fontSize: 16,
  },
});
