import React,{Component} from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import{
    Text,
    View,
    ScrollView,
    Button,
    StyleSheet,
    Alert,
    Image,
    Picker,
} from 'react-native';

import{
    getDimensionWitdh,
    getDimensionHeight
}from '../../../src/common/common';

import{TabNavigator} from'react-navigation';
var children = [];
var pickerItems = []
export default class OrderPage extends React.Component{
    
    constructor(props) {    
        super(props);
        this.state = { 
            movies : null,
            providers : [],
            selectProvide:null,
            didUpdate : true
        };
    }
    
    getProduct(){
        var that = this;
        fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json')
            .then((response) => response.json())
            .then((responseJson)=>  {
                that.setState({ movies: responseJson.movies, providers:[
                    { title: 'Select', value: '0' },
                    { title: 'Apo', value: '1' },
                    { title: 'Nisa ', value: '2' },
              ]});
            })
            .catch((error) => {
                console.error(error);
            })
            .done();
    }

    componentDidMount(){
        this.getProduct();
    }
    
    // componentWillReceiveProps(){
    //     debugger
    // };

    // shouldComponentUpdate(nextProps, nextState){
    //     debugger
    //     return nextState.selectProvide != "0";
    // };

    // componentWillUpdate(){
    //     debugger
    //     this.getProduct();
    // };
    
    componentDidUpdate() {
        if(!this.state.movies)
            this.getProduct();
    }

    handleChangeOption(val) {
        debugger
        if (val !== this.state.selectProvide) {
            this.setState({selectProvide: val});
            if(val !== "0")
                this.setState({movies:null});
        }
    }
    fillProviders(){
        if(this.state.providers){
            pickerItems = this.state.providers.map(function(provider){
                return (
                    <Picker.Item key={provider.value} value={provider.value} label={provider.title} />
                );
            })
        }
    }
    fillProducts(){
        if(this.state.movies){
            children = this.state.movies.map(function(movie, i){
                return( 
                    <ChildComponent key={i} movie={movie}/>
                );
            });
        }
    }
    render(){
        const{navigate} = this.props.navigation;
        if(!this.state.movies){
            return this.renderLoadingView();
        }
        this.fillProducts();
        this.fillProviders();
        return (
            <View style={styles.mainContainer}>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.picker}
                        mode={'dialog'}
                        selectedValue={this.state.selectProvide}
                        onValueChange={this.handleChangeOption.bind(this)}>
                        {pickerItems}
                    </Picker>
                </View>
                <ParentComponent>
                    {children}
                </ParentComponent>
            </View>
        );
    }

    renderLoadingView() {
        return (
          <View style={styles.container}>
            <Text>
              Loading products...
            </Text>
          </View>
        );
    }
}

const ParentComponent = props=>(
    <ScrollView style={styles.contentContainer} removeClippedSubviews={false}>
        {props.children}
    </ScrollView>
);
const ChildComponent = props=>(
    <View idx={props.movie.id} style={styles.container}>
    <Image
      source={{uri: props.movie.posters.thumbnail}}
      style={styles.image}
    />
    <View>
      <Text ellipsizeMode={'tail'} numberOfLines={50} style={styles.title}>{props.movie.title}</Text>
      <Text style={styles.year}>{props.movie.year}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
    picker:{
        
    },
    pickerContainer:{
        marginTop:0,
        marginBottom:-20,
        margin:20,
        // borderWidth:1,
        // borderColor:'#A9A9A9',
    },
    itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        margin:10,
        marginBottom:20,
        borderWidth:1,
        borderColor:'#A9A9A9',
    },
    mainContainer:{
        width:getDimensionWitdh(0)
    },
    title:{
        textAlign :'center'
    },
    year:{
        textAlign :'center',
        fontWeight:'bold'
    },
    contentContainer: {
        paddingVertical:10,
    },
    image:{
        width:50,
        height:50,
        marginTop:5,
        marginBottom:5,
        borderWidth:1,
        borderColor:'#A9A9A9'
    }
  });