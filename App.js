import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, TextInput, View, Image } from 'react-native';

import Chat from './Component/Chat';
import Product from './Component/Product';

import IconArrow from './assets/arrow.png';
import IconShoppingCart from './assets/shopping-cart.png';
import IconEllipsis from './assets/ellipsis.png';
import IconSearch from './assets/search.png';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'rgba(27, 169, 255, 1)',
                    },
                }}
            >
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        title: 'Chat',
                        headerTitleAlign: 'center',
                        headerTintColor: 'white',
                        headerLeft: () => (
                            <Image
                                style={{ width: 24, height: 24, tintColor: 'white', marginLeft: 20 }}
                                source={IconArrow}
                            />
                        ),
                        headerRight: () => (
                            <Image
                                style={{ width: 24, height: 24, tintColor: 'white', marginRight: 20 }}
                                source={IconShoppingCart}
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{
                        title: '',
                        headerLeft: () => (
                            <View style={styles.headerProduct}>
                                <Image style={styles.iconArrow} source={IconArrow} />
                                <TouchableOpacity style={styles.boxSearch}>
                                    <Image style={styles.iconSearch} source={IconSearch} />
                                    <TextInput placeholder="Dây cáp USB" style={styles.inpSearch} />
                                </TouchableOpacity>
                                <View style={styles.iconRight}>
                                    <TouchableOpacity>
                                        <Image style={styles.iconShoppingCart} source={IconShoppingCart} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={styles.iconEllipsis} source={IconEllipsis} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    iconShoppingCart: {
        width: 17,
        height: 17,
        tintColor: 'white',
    },
    iconEllipsis: {
        width: 18,
        height: 4,
        tintColor: 'white',
    },

    // Product

    headerProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconArrow: {
        width: 24,
        height: 24,
        tintColor: 'white',
        marginLeft: 25,
    },
    boxSearch: {
        width: 192,
        height: 35,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row',
        marginLeft: 25,
    },
    iconSearch: {
        width: 24,
        height: 24,
        margin: 5,
    },
    inpSearch: {},

    iconRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconShoppingCart: {
        width: 24,
        height: 24,
        tintColor: 'white',
        marginLeft: 35,
    },
    iconEllipsis: {
        width: 18,
        height: 4,
        tintColor: 'white',
        marginLeft: 35,
    },
});
