import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoriteScreen() {

    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealids = useSelector((state) => state.favoriteMeals.ids);

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    const favoriteMeals = MEALS.filter(meal => favoriteMealids.includes(meal.id));
    

    if(favoriteMeals.length===0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>No Favorite Meals Added Yet...</Text>
        </View>
    }

    return <MealsList items={favoriteMeals}/>
}

export default FavoriteScreen;

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#ffbca5',
        fontSize:24,
        fontWeight:'bold'
    }
})