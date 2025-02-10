import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native"
import React, { useState } from "react"
import { useRouter } from "expo-router"

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/onboarding/tabs/")
    }, 500)
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.imageContainer}>
          <Image
          source={require("../../assets/images/loadingImg.png")}
          style={styles.loadingImage}
          resizeMode="contain"
        />
        </View>
      ) : (
        <View style={styles.content}>
          <Image source={require('../../assets/images/loginScreen.png')} style={styles.loginImg}/>
          <Text style={styles.title}>Welcome Back!</Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => router.push("/onboarding/register")}
              >
                <Text style={styles.registerLink}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.registerContainer}>
              <TouchableOpacity activeOpacity={0.9} onPress={handleLogin}>
                <Text
                  style={[
                    styles.registerText,
                    { fontSize: 18, color: "green", fontWeight: "bold" },
                  ]}
                >
                  Login as Guest
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer :{
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingImage: {
    width: 150,
    height: 150,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  loginImg: {
    width: 250,
    height: 250,
    marginBottom: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: "green",
    fontSize: 14,
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    color: "#666",
    fontSize: 14,
  },
  registerLink: {
    color: "green",
    fontSize: 14,
    fontWeight: "600",
  },
})
