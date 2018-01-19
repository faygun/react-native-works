import React,{Component} from 'react';
import{
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import{TabNavigator} from'react-navigation';
export default class ProfilePage extends React.Component{
    static navigatiorOptions = {
      title: 'Welcome Profile Page',
    };
  
    render(){
      const{navigate} = this.props.navigation;
      return(
        <View style={styles.container}>
          <Text>
          Profile Page
        </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    firstContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    secondContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });