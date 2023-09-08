import './App.css';
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Heading,
    View
} from "@aws-amplify/ui-react";
import { listTodos } from "./graphql/queries/queries";
import { API } from "aws-amplify";
import {
    createAnalytics as createAnalyticsMutation,
} from "./graphql/queries/mutations";

function Reroute() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listTodos });
        const notesFromAPI = apiData.data.listTodos.items;
        setNotes(notesFromAPI);
        saveAnalytics(notesFromAPI);
    }

    async function createAnalytics(data) {

        await API.graphql({
            query: createAnalyticsMutation,
            variables: { input: data },
        });
    }

    var requestOptions = {
        method: 'GET',
    };

    function saveAnalytics(list) {
        fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=e4d9c900ced94a5aa48f3d6564c674d1", requestOptions)
            .then(response => response.json())
            .then(result => {
                let feature = result.features[0].properties;
                console.log(feature);
                let longUrl = list.filter(n => n.description === window.location.href)

                console.log(longUrl, window.location.href)

                if (longUrl.length && longUrl[0].name) {
                    // console.log(longUrl.length , longUrl[0].name)
                    createAnalytics(
                        {
                            city: feature.city,
                            country: feature.country,
                            ip: "String",
                            long_url: longUrl[0].name,
                            short_url: window.location.href,
                            date: new Date()
                        }
                    )

                    // eslint-disable-next-line no-restricted-globals
                    location.assign(longUrl[0].name);
                }
                else
                    return <h1>wrong url</h1>
            })
            .catch(error => console.log('error', error));
    }


    return (
        <View className="App">
            <Heading level={1}>Reroute</Heading>
        </View>
    );
}

export default withAuthenticator(Reroute);
