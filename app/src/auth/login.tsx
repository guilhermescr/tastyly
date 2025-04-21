import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Added FontAwesome for icons
import EmailInput from '@/components/emailInput/EmailInput';
import PasswordInput from '@/components/passwordInput/PasswordInput';
import PrimaryButton from '@/components/primaryButton/PrimaryButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Tastyly</Text>

      <View style={styles.formContainer}>
        <View style={{ alignItems: 'center', gap: 10 }}>
          <Text style={styles.formTitle}>Welcome back</Text>
          <Text style={styles.formSubtitle}>
            Sign in to access your favorite recipes
          </Text>
        </View>

        <EmailInput email={email} setEmail={setEmail} />

        <PasswordInput password={password} setPassword={setPassword} />

        <PrimaryButton
          label="Sign in"
          onPress={() => console.log('Sign in')}
          icon={
            <View style={{ paddingTop: 2 }}>
              <AntDesign name="right" size={14} color="#fff" />
            </View>
          }
        />

        <View style={styles.orWrapper}>
          <View style={styles.orBar} />
          <View style={styles.orTextWrapper}>
            <Text style={styles.orText}>OR</Text>
          </View>
        </View>

        <View style={styles.authButtons}>
          <TouchableOpacity style={styles.authButton}>
            <AntDesign
              name="google"
              size={20}
              color="#DB4437"
              style={styles.authIcon}
            />
            <Text style={styles.authButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.authButton}>
            <FontAwesome
              name="windows"
              size={20}
              color="#00A4EF"
              style={styles.authIcon}
            />
            <Text style={styles.authButtonText}>Microsoft</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpWrapper}>
          <Text style={styles.signupText}>Don't have an account?</Text>

          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    gap: 15,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  appTitle: {
    color: '#FF6F61',
    fontSize: 20,
    fontWeight: '800',
    padding: 20,
    textAlign: 'center',
  },
  formTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  formSubtitle: {
    color: '#666',
  },
  orWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  orBar: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
    height: 1,
  },
  orTextWrapper: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  orText: {
    color: '#666',
  },
  authButtons: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#7B7B7B',
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  authIcon: {
    marginRight: 10,
  },
  authButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  signUpWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginInline: 'auto',
  },
  signupText: {
    color: '#666',
    textAlign: 'center',
  },
  signupLink: {
    color: '#4CAF50',
    fontWeight: '500',
  },
});
