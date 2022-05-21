import StaggeredList from '@mindinventory/react-native-stagger-view'
import React, { useEffect } from 'react'
import { findDOMNode } from 'react-dom'
import {
    View,
    Text,
    SafeAreaView,
    Image, 
    FlatList,
    TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProduct, fetchCategories, fetchProductByCategory } from './HomeThunks'

const HomeScreen = props => {
    const dispatch = useDispatch()
    const dataProduct = useSelector(state => state.home.dataProduct)
    const dataCategories = useSelector(state => state.home.dataCategories)
    const dataProductByCategory = useSelector(state => state.home.dataProductByCategory)
    useEffect(() => {
        dispatch(fetchProduct())
        dispatch(fetchCategories())
    }, [])
    console.log(dataProductByCategory)

    const likeIcon = require('../../assets/images/like.png')
    const closeIcon = require('../../assets/images/icon_close.png')
    const tuneIcon = require('../../assets/images/icon_tune.png')

    const renderItem = (item) => (
        <View style={{  
            margin: 8, 
            padding: 16, 
            shadowColor: 'black', 
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 10 }}
        >
            <Image source={likeIcon} style={{ width: 16, height: 16, alignSelf: 'flex-end'}} />
            <Image resizeMode='contain' source={{ uri: item.image }} style={{ width: '100%', height: 100 }} />
            <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 8 }}>{item.name}</Text>
            <Text style={{ fontSize: 16, color: '#aaa', marginTop: 8 }}>{item.price}</Text>
        </View>
    )

    const renderCategoryItem = (item) => {
        return (
            <TouchableOpacity 
                style={{ margin: 8 }}
                onPress={() => dispatch(fetchProductByCategory(item.category))}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>{item.category}</Text>
            </TouchableOpacity>
        )
    }
    
    return (

        <View style={{ flex: 1 }}>
            <View style={{ height: 250, width: '100%', backgroundColor: 'black', position: 'absolute' }}></View>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                    <Image source={closeIcon} style={{ width: 24, height: 24 }} />
                    <Image source={tuneIcon} style={{ width: 24, height: 24 }} />
                </View>
                <View>
                    <FlatList
                        horizontal
                        data={dataCategories}
                        renderItem={({ item }) => renderCategoryItem(item)}
                    />
                </View>
                <StaggeredList
                    animationType={'FADE_IN_FAST'}
                    data={dataProductByCategory}
                    renderItem={({item}) => renderItem(item)}
                />
            </SafeAreaView>
        </View>
    )
}
// Branch get products by category

export default HomeScreen