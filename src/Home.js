import './App.css';
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  withAuthenticator,
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View
} from "@aws-amplify/ui-react";
import { listTodos } from "./graphql/queries";
import {
  createTodo as createNoteMutation,
  deleteTodo as deleteNoteMutation,
} from "./graphql/mutations";

function Home({ signOut }) {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listTodos });
    const notesFromAPI = apiData.data.listTodos.items;
    setNotes(notesFromAPI);
  }
  const idToShortURL = () => {
    let n = Math.floor(Math.random() * (10000 - 1 + 1) + 1)
    let map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let shorturl = [];
    while (n) {
      shorturl.push(map[n % 62]);
      n = Math.floor(n / 62);
    }
    shorturl.reverse();

    return shorturl.join("");
  }
  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: window.location.href + 'reroute/' + idToShortURL(),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>AdV</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Url"
            label="URL"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Post
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Posts</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
            <a target="_blank" href={note.description}>  {note.description}</a>
            </Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete post
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(Home);
