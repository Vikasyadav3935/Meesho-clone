import {View,FlatList, Text, Image } from 'react-native';


const DATA=[
    {
        id:1,
        image:'https://images.meesho.com/images/widgets/ND730/rdpef_150.webp',
        title:'Under Rs300'
    },
    {
        id:2,
        image:'https://images.meesho.com/images/widgets/ZU0A4/v7exh_150.webp',
        title:'Under Rs350'
    },
    {
        id:3,
        image:'https://images.meesho.com/images/widgets/XMA3F/yjnkr_150.webp',
        title:'Under Rs300'
    },
    {
        id:4,
        image:'https://images.meesho.com/images/widgets/638K1/6vagk_150.webp',
        title:'Under Rs350'
    },
    {
        id:5,
        image:'https://images.meesho.com/images/widgets/IWUH0/in1bd_150.webp',
        title:'Under Rs350'
    },
    {
        id:6,
        image:'https://images.meesho.com/images/widgets/LW5AY/4fqkp_150.webp',
        title:'Under Rs400'
    },
]


const Bachat=()=>{
    return (
        <View style={{backgroundColor:'#00000000'}}>
            <View >
            <Text style={{marginHorizontal:10,fontSize:18,marginTop:5}}>Bachat Bazaar</Text>
            </View>
            <FlatList   
              data={DATA}
             horizontal
              renderItem={({item})=><View style={{alignItems:'center'}}>
                <Image  source={{uri:item.image}}  style={{width:90,height:90,margin:10,}} />
                <Text style={{fontSize:12}}>{item.title}</Text>
              </View>
            }
            keyExtractor={item => item.id}

            />

            <View style={{backgroundColor:'#00000011',}}>
                <Text style={{marginTop:5,backgroundColor:'white',fontSize:18,paddingHorizontal:14,width:'100%',paddingTop:10, fontWeight:'600'}}>Product For You</Text>
            </View>
            <View style={{flexDirection:'row',height:40,marginTop:10}}>
                <View style={{alignItems:'center',justifyContent:'center',width:'25%',borderWidth:.4,borderColor:'#b5b5b5'}}>
                    <Text >Sort</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',width:'25%',borderWidth:.4,borderColor:'#b5b5b5'}}>
                    <Text  >Category</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',width:'25%',borderWidth:.4,borderColor:'#b5b5b5'}}>
                    <Text >
                        Gender
                    </Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',width:'25%',borderWidth:.4,borderColor:'#b5b5b5'}}>
                    <Text >
                        Filters
                    </Text>
                </View>
            </View>
            <View>
                
            </View>


       
        </View>
    )
}

export default Bachat