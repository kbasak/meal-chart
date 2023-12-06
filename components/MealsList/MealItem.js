import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "../MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function mealDetailHandler() {
        navigation.navigate('MealDetails', {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }}
            onPress={mealDetailHandler} >
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability} />
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: 'hidden',
        elevation: 4
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 8
    }
})