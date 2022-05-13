import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import api from "./../../services/api";
import { Button, Card, Title, Paragraph, Searchbar } from 'react-native-paper';
import moment from "moment";
import Fab from '../../components/Fab';
import { Picker } from '@react-native-picker/picker';

function FilterByTitle () {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const [limit, selectedAmount] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    try{
       api.get(`/articles/?_limit=${limit}&title_contains=${searchQuery}`).then(res => {
        const { data } = res;
        setData(data);
    })
    } catch(error) {
      console.log(error);
    };
}, [data]);

  const renderItem = ({item}) => (
    <Card>
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>{moment(item.publishedAt).format('LLLL')}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
       onPress={() => navigation.navigate('Details', {
         id: item.id
       })}
       mode="contained"
      >Details</Button>
    </Card.Actions>
  </Card>
  );

  return (
     <SafeAreaView>
      <ScrollView>
      <Picker
        selectedValue={selectedAmount}
        style={{ height: 50, width: 100 }}
        onValueChange={async (itemValue, itemIndex) => await selectedAmount(itemValue)}
      >
        <Picker.Item label="10" value="10" />
        <Picker.Item label="25" value="25" />
        <Picker.Item label="50" value="50" />
        <Picker.Item label="100" value="100" />
      </Picker>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      />
       <FlatList
         data={data}
         renderItem={renderItem}
       />
      </ScrollView>
      <Fab></Fab>
     </SafeAreaView>
  )
}

export default FilterByTitle;
