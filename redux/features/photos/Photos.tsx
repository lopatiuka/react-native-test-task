import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IPhotos, selectPhotos } from './photosSlice';
import { getPhotos } from "./services";

const styles = StyleSheet.create ({
  main_container: {
    flex: 1,
    padding: 10
  },
  container: {
    alignItems: "center"
  },
  image_wrapper: {
    maxWidth: 300,
    marginBottom: 20, 
    paddingBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderStyle: "solid"
  },
  image: {
    width: 300,
    height: 300
  }, 
  image_description: {
    marginTop: 10,
    fontSize: 20,
  },
  author_name: {
    marginTop: 10,
    fontSize: 15,
    color: "grey"
  }
})

export function PhotosComponent({ navigation }: any) {
    const dispatch = useDispatch();
    const photos = useSelector(selectPhotos);

    useEffect(() => {
      dispatch(getPhotos());
    }, [])

    return (<ScrollView style={styles.main_container}>
      <View style={styles.container}>
        {
          photos.map( (item: IPhotos ) => {
            return <TouchableOpacity key={ item.id } style={ styles.image_wrapper } onPress={() => navigation.navigate('Details', { url: item.urls.full })}>
              <Image style={styles.image} source={{uri: item.urls.full}} />
              {item.alt_description ? <Text style={ styles.image_description }>{ item.alt_description }</Text> : null}
              <Text style={ styles.author_name }>{ item.user.name }</Text>
            </TouchableOpacity>
          })
        }
      </View>
    </ScrollView>)
}