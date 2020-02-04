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
    red: {
        color: '#000',
        fontWeight: 'bold'
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
        padding: 10
    },
    mainButton: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#fff",
        borderRadius: widthPercentageToDP("25") / 2,
        width: widthPercentageToDP("25"),
        height: widthPercentageToDP("25"),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    button: {
        width: widthPercentageToDP("25"),
        padding: 10,
        borderWidth: 2,
        borderColor: "crimson",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
    }
});

export {styles};
