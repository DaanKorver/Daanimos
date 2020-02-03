import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        backgroundColor: 'rgba(0,0,0,.2)'
    },
    red: {
        color: '#ff0',
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#ddd'
    },
    button: {
        textTransform: 'uppercase',
        color: 'red',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#ff0"
    }
});

export {styles};
