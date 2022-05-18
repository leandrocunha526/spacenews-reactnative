import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import api from "./../../services/api";
import moment from "moment";
import Fab from "./../../components/Fab";
import DateRangePicker from "rn-select-date-range";
import { Picker } from "@react-native-picker/picker";

export default function FilterByDate() {
  const [data, setData] = useState([]);
  const [selectedRange, setRange] = useState({});
  const [limit, setLimit] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    try {
      api
        .get(
          `/articles/?_limit=${limit}&publishedAt_gte=${selectedRange.firstDate}&publishedAt_lte=${selectedRange.secondDate}`
        )
        .then((res) => {
          const { data } = res;
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [selectedRange]);

  const renderItem = ({ item }) => (
    <Card>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{moment(item.publishedAt).format("LLLL")}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("Details", {
              id: item.id,
            })
          }
          mode="contained"
        >
          Details
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat="YYYY-MM-DD"
          maxDate={moment()}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
        />
        <Picker
        selectedValue={limit}
        style={{ height: 50, width: 100 }}
        onValueChange={(value, index) => setLimit(value)}
      >
        <Picker.Item label="10" value="10" />
        <Picker.Item label="25" value="25" />
        <Picker.Item label="50" value="50" />
        <Picker.Item label="100" value="100" />
      </Picker>
        <Text>Showing articles from {moment(selectedRange.firstDate).format("LLLL")} to {moment(selectedRange.secondDate).format("LLLL")}
        </Text>
        <FlatList data={data} renderItem={renderItem} />
      </ScrollView>
      <Fab></Fab>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
});
