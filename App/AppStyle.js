import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    red: {
        color: '#f00',
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
