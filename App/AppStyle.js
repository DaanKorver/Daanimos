import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '800px',
        backgroundColor: '#EEE'
    },
    red: {
        color: '#f00',
        fontSize: 50,
    },
    shadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: 50,
        color: '#fff',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 0
    },
});

export {styles};
