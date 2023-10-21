import { View, StyleSheet, Image, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import IconMenu from '../assets/menu.png';
import IconHome from '../assets/home.png';
import IconBack from '../assets/back.png';
import Image1 from '../assets/ca_nau_lau.png';
import Image2 from '../assets/do_choi_dang_mo_hinh.png';
import Image3 from '../assets/ga_bo_toi.png';
import Image4 from '../assets/hieu_long_con_tre.png';
import Image5 from '../assets/xa_can_cau.png';
import Image6 from '../assets/lanh_dao_gian_don.png';
import Image7 from '../assets/trump 1.png';

function Chat({ navigation }) {
    const data = [
        {
            id: 1,
            image: Image1,
            title: 'Ca nấu lẩu, nấu mì mini',
            shop: 'Shop Devang',
        },
        {
            id: 2,
            image: Image2,
            title: '1KG KHÔ GÀ BƠ TỎI',
            shop: 'Shop LTD Food',
        },
        {
            id: 3,
            image: Image3,
            title: 'Xe cần cẩu đa năng',
            shop: 'Shop Thế giới đồ chơi',
        },
        {
            id: 4,
            image: Image4,
            title: 'Đồ chơi dạng mô hình',
            shop: 'Shop Thế giới đồ chơi',
        },
        {
            id: 5,
            image: Image5,
            title: 'Lãnh đạo đơn giản',
            shop: 'Shop Minh Long Book',
        },
        {
            id: 6,
            image: Image6,
            title: 'Hiểu lòng trẻ con',
            shop: 'Shop Minh Long Book',
        },
        {
            id: 7,
            image: Image7,
            title: 'Donal Trump thiên tài lãnh đạo',
            shop: 'Shop Minh Long Book',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.recommend}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</View>

            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.content}>
                            <Image style={styles.imgContent} source={item.image} />
                            <View style={styles.infContent}>
                                <Text style={styles.titleContent}>{item.title}</Text>
                                <Text style={styles.shopContent}>{item.shop}</Text>
                            </View>

                            <TouchableOpacity style={styles.btnChat}>
                                <Text style={styles.txtChat}>Chat</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    );
                }}
            />

            <View style={styles.footer}>
                <Image style={styles.iconFooter} source={IconMenu} />
                <Image style={styles.iconFooter} source={IconHome} />
                <TouchableOpacity onPress={() => navigation.navigate('Product')}>
                    <Image style={styles.iconFooter} source={IconBack} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#e5e5e5',
    },
    recommend: {
        width: 294,
        height: 28.54,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 'auto',
        paddingTop: 30,
        paddingBottom: 30,
        borderStyle: 'solid',
    },
    content: {
        width: '100%',
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderStyle: 'solid',
        borderTopWidth: 1,
        marginBottom: 2,
    },

    imgContent: {
        width: 74,
        height: 74,
        resizeMode: 'cover',
    },
    infContent: {
        width: 142,
    },

    shopContent: {
        marginTop: 5,
        color: 'red',
    },

    btnChat: {
        width: 88,
        height: 38,
        backgroundColor: 'rgba(243, 17, 17, 1)',
        marginRight: 20,
    },
    txtChat: {
        color: 'white',
        margin: 'auto',
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
