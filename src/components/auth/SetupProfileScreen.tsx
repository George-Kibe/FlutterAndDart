import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from '../Themed'
import { gql, useMutation } from '@apollo/client';
import { useUserContext } from '../../context/UserContext';

const createProfileMutation = gql`
  mutation CreateProfile($about: String, $name: String, $authid: String) {
    insertProfile(about: $about, name: $name, authid: $authid) {
      id
      name
      authid
      about
    }
  }
`;

const SetupProfileScreen = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const { authUser, reloadDbUser } = useUserContext();
  const [handleMutation, { loading }] = useMutation(createProfileMutation);

  const saveProfile = async () => {
    if (!name || !about){
        // Add toast message
        return
    }
    
    try {
        await handleMutation({
          variables: {
            name,
            about,
            authid: authUser.id,
          },
        });
        reloadDbUser();
      } catch (error) {
        console.warn(error)
      }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Setup Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={3}
        textAlignVertical='top'
        placeholder="e.g. I am a web developer..."
        value={about}
        onChangeText={setAbout}
      />
      <TouchableOpacity style={styles.button} onPress={saveProfile}>
        <Text>{loading ? 'Saving...' : 'Save'}</Text>      
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SetupProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 20,
        alignSelf: 'flex-start'
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        width:"100%",
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
    backgroundColor: "royalblue",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    marginBottom: 10,
    alignItems: "center",
    },
})