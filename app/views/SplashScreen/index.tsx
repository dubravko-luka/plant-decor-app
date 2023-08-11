import * as React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function SplashScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <FastImage
                    source={{ uri: 'https://vuontrongnha.demo-website.click/images/page-home/png/logo.png' }}
                    style={styles.logo}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,100,0,0.5)'
    },
    logo: {
        width: 163,
        height: 168.2
    }
});
