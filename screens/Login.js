import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Button, Block, Text, Input, theme, Icon } from "galio-framework";
import { materialTheme, products, Images } from "../constants/";
// import { Icon } from "../components/";
// import { Button } from "react-native-elements";
// import FormInput from "../components/FormInput";
//import FormButton from "../components/FormButton";

export default class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  onLogin = () => {
    const { email, password } = this.state;
    alert(email);
    try {
      if (this.state.email.length > 0 && this.state.password.length > 0) {
        this.props.navigation.navigate("App");
      }
    } catch (error) {
      alert(error);
    }
  };

  // goToSignup = () => this.props.navigation.navigate("Signup");
  render() {
    const { email, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            color={theme.COLORS.BLACK}
            //   placeholder="icon right"
            placeholderTextColor={materialTheme.COLORS.DEFAULT}
            style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
            //  iconContent={<Icon name="email" family="Galio" color={theme.COLORS.ICON} size={10} />}
            // iconContent={<Icon size={16} color={theme.COLORS.ICON} name="camera-18" family="GalioExtra" />}
            name="email"
            value={email}
            placeholder="Enter email"
            onChangeText={email => this.handleEmailChange(email)}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            color={theme.COLORS.BLACK}
            //placeholder="icon right"
            placeholderTextColor={materialTheme.COLORS.DEFAULT}
            style={{ borderRadius: 3, borderColor: materialTheme.COLORS.INPUT }}
            name="password"
            value={password}
            placeholder="Password"
            password
            viewPass
            onChangeText={password => this.handlePasswordChange(password)}
          />
        </Block>
        <Block center>
          <Button shadowless color="success" style={[styles.button, styles.shadow]} onPress={() => this.onLogin()}>
            Login
          </Button>
        </Block>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonContainer: {
    margin: 25
  }
});
