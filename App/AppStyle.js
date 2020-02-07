import { StyleSheet } from 'react-native';
import { Dimensions, PixelRatio } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = widthPercent => {
    const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
    const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        backgroundColor: 'dodgerblue',
    },
    Headline: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 50,
        paddingLeft: widthPercentageToDP("2"),
        marginBottom: heightPercentageToDP("5"),
    },
    home: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    homeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercentageToDP("90"),
        height: heightPercentageToDP("90"),
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        position: 'relative',
    },
    mainButton: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#fff",
        borderRadius: widthPercentageToDP("20") / 2,
        width: widthPercentageToDP("20"),
        height: widthPercentageToDP("20"),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    homeImage: {
        width: widthPercentageToDP("10"),
        height: widthPercentageToDP("10"),
        resizeMode: 'contain',
    },
    button: {
        width: widthPercentageToDP("25"),
        padding: 10,
        backgroundColor: "crimson",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    buttonTxt: {
        color: "#fff",
    },
    total: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "flex-end"
    },
    productContainer: {
        width: widthPercentageToDP("100") - 46,
        height: heightPercentageToDP("80"),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    product: {
        width: widthPercentageToDP("100") - 46,
        height: heightPercentageToDP("20"),
        borderBottomWidth: 2,
        display: "flex",
        flexDirection: "row",
    },
    productImageContainer: {
        height: heightPercentageToDP("20") - 4,
        width: widthPercentageToDP("7"),
        display: "flex",
    },
    productImage: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'contain',
    },
    priceContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: widthPercentageToDP("3.5")
    },
    pizzaName: {
        fontSize: widthPercentageToDP("3.5"),
        fontWeight: "bold",
        marginBottom: 15
    },
    pizzaPrice: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 15
    },
    pizzaButtonContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    pizzaButton: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "crimson",
        width: widthPercentageToDP("15"),
        padding: heightPercentageToDP("2"),
    },
    cartContainer: {
        width: widthPercentageToDP("100") - 46,
        height: heightPercentageToDP("30"),
        padding: 24,
        borderBottomWidth: 2,
    },
    cartProduct: {
        fontSize: 24,
        fontWeight: "bold"
    },
    cartPrice: {
        fontSize: 16,
        fontStyle: "italic",
        marginBottom: 12
    },
    cartAmount: {
        display: "flex",
        flexDirection: "row"
    },
    increment: {
        fontSize: 25,
        fontWeight: "bold",
    },
    count: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10
    },
    countContainer: {
        position: "absolute",
        top: 5,
        right: 15
    },
    totalPrice: {
        fontWeight: "bold",
        fontSize: 24
    }
});

export {styles};
