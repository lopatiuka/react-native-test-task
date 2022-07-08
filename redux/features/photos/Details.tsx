import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    activity: {
        position: "absolute",
        top: 20
    }
})

export let DetailsComponent = ({ route }: any) => {
    const url = route.params.url;
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {

        Image.getSize(url, (width, height) => {
          const screenWidth = 300;
          const scaleFactor = width / screenWidth;
          const imageHeight = height / scaleFactor;
          setImgWidth(screenWidth);
          setImgHeight(imageHeight);
        })
      })

    return (<View style={styles.container}>
       { isLoaded ? <ActivityIndicator style={styles.activity}/> : null }
        <Image style={{width: imgWidth, height: imgHeight}} source={{uri: url}} onLoad={() => setIsLoaded(false)}/>
    </View>)
}