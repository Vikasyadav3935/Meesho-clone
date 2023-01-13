import {View,FlatList, Image,Text} from 'react-native'


const FlatList1=()=>{
    
    const DATA=[
        {
            image:'https://images.meesho.com/images/marketing/1649688366308_100.webp',
            title:'Categories'
        },
        {
            image:'https://images.meesho.com/images/marketing/1649688502928_100.webp',
            title:'Kurti & Suit'
        },
        {
            image:'https://images.meesho.com/images/marketing/1649690440106_100.webp',
            title:'Westernwear'
        },
        {
            image:'https://images.meesho.com/images/marketing/1649688585249_100.webp',
            title:'Men'
        },
        {
            image:'https://images.meesho.com/images/marketing/1649689217815_100.webp',
            title:'Kids'
        },
        {
            image:'https://images.meesho.com/images/marketing/1628672353857_100.webp',
            title:'Saree'
        },
        {
            image:'https://images.meesho.com/images/marketing/1649689036546_100.webp',
            title:'Accessories'
        },
        {
            image:'https://images.meesho.com/images/marketing/1649689138272_100.webp',
            title:'Jewellery'
        },
    ]

    console.log(DATA)

    return (
        <FlatList
         data={DATA}
      
         renderItem={({items})=><View>
            {/* <Image source={{uri:items.image}}  style={{width:40,height:40}} /> */}
            <Text>{items.title}</Text>
         </View>}

        
        />
    )
}

export default FlatList1