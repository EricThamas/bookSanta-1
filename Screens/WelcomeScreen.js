import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  A,
  Alert,
} from "react-native";
import db from "../config";
import firebase from "firebase";

export default class WelcomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }

  userlogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return Alert.alert("succesfully Log in");
      })
      .catch((error) => {
        var errorcode = error.code;
        var errormessage = error.message;
        return Alert.alert(errormessage);
      });
  };

  usersignup = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then((response) => {
        return Alert.alert(" user added");
      })
      .catch(function(error) {
        var errorcode = error.code;
        var errormessage = error.message;
        return Alert.alert(errormessage);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          {" "}
          style={styles.profileContainer}
          <Text style={styles.title}>BookSanta</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder={"abcd@gmail.com"}
            keyboardType={"email-address"}
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
          ></TextInput>

          <TextInput
            style={styles.loginBox}
            placeholder={"EnterPassword"}
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
          ></TextInput>
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userlogin(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.usersignup(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8BE85",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 65,
    fontWeight: "300",
    paddingBottom: 30,
    color: "#ff3d00",
    textAlign: "center",
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#ff8a65",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#ff9800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "200",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
});
