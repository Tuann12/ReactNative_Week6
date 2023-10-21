import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Product3 from '../assets/product3.jpg';
import Product4 from '../assets/product5.webp';
import Product5 from '../assets/product6.jpg';
import IconStar from '../assets/star.png';
import IconMenu from '../assets/menu.png';
import IconHome from '../assets/home.png';
import IconBack from '../assets/back.png';

function Product({ navigation }) {
    const data = [
        {
            image: Product3,
            name: 'Cáp chuyển từ cổng usb sang PS2...',
            price: '69.900 đ',
            percent: '-39%',
        },
        {
            image: Product4,
            name: 'Cáp chuyển từ cổng usb sang PS2...',
            price: '69.900 đ',
            percent: '-39%',
        },
        {
            image: Product5,
            name: 'Cáp chuyển từ cổng usb sang PS2...',
            price: '69.900 đ',
            percent: '-39%',
        },
        {
            image: Product3,
            name: 'Cáp chuyển từ cổng usb sang PS2...',
            price: '69.900 đ',
            percent: '-39%',
        },
        {
            image: Product4,
            name: 'Cáp chuyển từ cổng usb sang PS2...',
            price: '69.900 đ',
            percent: '-39%',
        },
        {
            image: Product5,
            name: 'Cáp chuyển từ cổng usb sang PS2...',
            price: '69.900 đ',
            percent: '-39%',
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'column' }}>
                            <TouchableOpacity style={styles.boxProduct}>
                                <Image style={styles.imgProduct} source={item.image} />
                                <Text style={styles.titleProduct}>{item.name}</Text>
                                <View style={styles.wrapIconStar}>
                                    <Image style={styles.iconStar} source={IconStar} />
                                    <Image style={styles.iconStar} source={IconStar} />
                                    <Image style={styles.iconStar} source={IconStar} />
                                    <Image style={styles.iconStar} source={IconStar} />
                                    <Image style={styles.iconStar} source={IconStar} />
                                </View>
                                <View style={styles.boxPrice}>
                                    <Text style={styles.txtPrice}>{item.price}</Text>
                                    <Text style={styles.txtPercent}>{item.percent}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />

            <View style={styles.footer}>
                <Image style={styles.iconFooter} source={IconMenu} />
                <Image style={styles.iconFooter} source={IconHome} />
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <Image style={styles.iconFooter} source={IconBack} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Product;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#e5e5e5',
    },

    boxProduct: {
        marginTop: 10,
        marginLeft: 10,
        width: 155,
        height: 170,
        alignItems: 'center',
    },
    imgProduct: {
        width: 155,
        height: 90,
        resizeMode: 'cover',
    },
    titleProduct: {
        fontSize: 12,
        fontWeight: 400,
        width: 111,
        height: 28,
    },
    wrapIconStar: {
        flexDirection: 'row',
        marginRight: 40,
        paddingTop: 7,
    },
    iconStar: {
        marginLeft: 3,
        width: 13,
        height: 13,
    },
    boxPrice: {
        flexDirection: 'row',
        alignContent: 'center',
        marginRight: 38,
        paddingTop: 5,
    },
    txtPrice: {
        fontSize: 12,
        fontWeight: 700,
    },
    txtPercent: {
        fontSize: 12,
        fontWeight: 400,
        color: 'rgba(150, 157, 170, 1)',
    },

    footer: {
        marginBottom: 0,
        backgroundColor: 'rgba(27, 169, 255, 1)',
        width: '100%',
        height: 49,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconFooter: {
        width: 24,
        height: 24,
        marginLeft: 20,
        marginRight: 20,
    },
});
