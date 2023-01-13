import {View,FlatList, ImageBackground} from 'react-native';

const DATA=[
    {
        id:1,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    {
        id:1,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    {
        id:1,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    {
        id:1,
        image:"https://images.meesho.com/images/products/59140357/z4dej_256.webp",
        price:'164',
        rating:'3.7',
    },
    

]

const Product=()=>{
    return (
        <View>
        <FlatList
        data={DATA}
        
        renderItem={()=><View>
            <ImageBackground  source={{uri:'https://images.meesho.com/images/products/59140357/z4dej_256.webp'}}  >

            </ImageBackground>
            </View>}
        />
        </View>
    )
}

export default Product;