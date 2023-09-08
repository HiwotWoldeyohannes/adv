import './App.css';
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Heading,
  Flex,
  Text,
  View,
  Button
} from "@aws-amplify/ui-react";
import { listAnalytics } from "./graphql/queries/queries";
import {
    deleteAnalytics as deleteAnalyticsMutation,
  } from "./graphql/queries/mutations";
import { API } from "aws-amplify";


function Analytics() {
    const [analytics, setAnalytics] = useState([]);


    useEffect(() => {
        fetchAnalytics();
    }, []);
  
    async function fetchAnalytics() {
      const apiData = await API.graphql({ query: listAnalytics });
      const analyticsFromAPI = apiData.data.listAnalytics.items;
      setAnalytics(analyticsFromAPI);
    }

    async function deleteAnalytics({ id }) {
        const newAnalytics = analytics.filter((a) => a.id !== id);
        setAnalytics(newAnalytics);
        await API.graphql({
          query: deleteAnalyticsMutation,
          variables: { input: { id } },
        });
      }

 
  return (
    <View className="App">
      <Heading level={1}>Analytics</Heading>
      <View margin="3rem 0">
      <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
             Long URL
            </Text>
            <Text as="strong" fontWeight={700}>
             City
            </Text>
            <Text as="strong" fontWeight={700}>
             Country
            </Text>
            <Text as="strong" fontWeight={700}>
             Short URL
            </Text>
            <Text as="strong" fontWeight={700}>
              Date
            </Text>
            <Text as="strong" fontWeight={700}>
             IP
            </Text>
            <Text as="strong" fontWeight={700}>
             Action
            </Text>
    
          </Flex>
        {analytics.map((analytic) => (
          <Flex
            key={analytic.id}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" >
              {analytic.long_url}
            </Text>
            <Text as="strong">
              {analytic.city}
            </Text>
            <Text as="strong">
              {analytic.country}
            </Text>
            <Text as="strong">
              {analytic.short_url}
            </Text>
            <Text as="strong">
              {analytic.date}
            </Text>
            <Text as="strong">
              {analytic.ip}
            </Text>
            <Button variation="link" onClick={() => deleteAnalytics(analytic)}>
              Delete
            </Button>
          </Flex>
        ))}
      </View>
    </View>
  );
}

export default withAuthenticator(Analytics);
