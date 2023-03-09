import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import productData from './src/data/product-data.json';
import Card from './src/components/Card/Card';
import SearchBar from  './src/components/Search/SearchBar';

export default function App() {
  const renderProducts = ({ item }) => <Card products={item} />

  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}> PATİKA STORE </Text>
      <FlatList
        data={productData}
        renderItem={renderProducts}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={() => (<SearchBar />)}
      />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'rebeccapurple'
  }
});
