import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
  } from 'react-native';
  import { LogBox } from 'react-native';
  import React,{useEffect} from 'react';


  
  const numCol = 2;
  
  const WIDTH = Dimensions.get('window').width;
  
  const data = [
    {
      id: 1,
      pic: require('../images/jeans1.webp'),
      name: 'Jeans',
      bgColor:'rgba(83, 177, 117, 0.1)',
      bdrgColor: '#53B175',
      screen : 'Jeans',
    },
    {
      id: 2,
      pic: require('../images/jacket1.webp'),
      name: 'Jacketss',
      bgColor:'rgba(248, 164, 76, 0.1)',
      bdrgColor: '#F8A44C',
      screen : 'Jackets'
    },
    {
      id: 3,
      pic: require('../images/shirt1.webp'),
      name: 'Shirtss',
      bgColor:'rgba(247, 165, 147, 0.25)',
      bdrgColor: '#F7A593',
      screen : 'Shirts',
    },
    {
      id: 4,
      pic: require('../images/shoes1.jpeg'),
      name: 'Shoes & Sneakers',
      bgColor:'rgba(211, 176, 224, 0.25)',
      bdrgColor:'#D3B0E0',
      screen : 'Shoes',
    },
    {
      id: 5,
      pic: require('../images/slipper1.webp'),
      name: 'Slippers',
      bgColor:'rgba(253, 229, 152, 0.25)',
      bdrgColor: 'rgba(253, 229, 152, 1.00)',
      screen : 'Slippers',
    },
    {
      id: 6,
      pic: require('../images/trouser1.jpg'),
      name: 'Trousers',
      bgColor:'rgba(183, 223, 245, 0.25)',
      bdrgColor: '#B7DFF5',
      screen : 'Trousers',
    },
    {
      id: 7,
      pic: require('../images/tshirt1.jpg'),
      name: 'T-shirts',
      bgColor:'rgba(131, 106, 246, 0.15)',
      bdrgColor: '#836AF6',
      screen : 'Tshirts',
    },
  ];
  
  const renderItem = ({item},navigation) => {
    console.log(navigation,"ghgbfcbd")
  
    return (
      <View style={[styles.stuff,{backgroundColor:item.bgColor,borderColor:item.bdrgColor}]}>
        <TouchableOpacity
          onPress={() => {
           navigation.navigate(item.screen)
          }}>
          <View>
            <Image source={item.pic} style={styles.Img} />
          </View>
          <View style={{justifyContent:'center', alignItems:'center',marginTop:5}}> 
  
          <Text style={{fontWeight: '500',fontSize:13,color:'#000'}}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  const ExploreDyn = ({navigation}) => {

    useEffect(() => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
    
    return (
  
      <FlatList
        nestedScrollEnabled
        data={data}
        renderItem={item=>(renderItem(item,navigation))}
  
        numColumns={numCol}
        showsHorizontalScrollIndicator={false}
        
      />
  
    );
  };
  
  export default ExploreDyn;
  
  const styles = StyleSheet.create({
    stuff: {
      borderRadius: 20,
      borderWidth: 1,
    //   borderColor: '#53B175',
      marginVertical: 10,
      marginHorizontal:10,
      backgroundColor: data.bg,
      height: WIDTH / numCol,
      width:'45%',
      padding:10,
    },
    Img:{
      marginTop:10,
      height:'80%',
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center'
    },
  });