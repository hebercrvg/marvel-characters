
import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native'
import api from '../../config/api';
import { Button, ButtonText, CharacterAvatar,
   CharacterContainer, CharacterName, Container,
   Form, Input, ListContainer } from './styles'
import { useNavigation } from '@react-navigation/native'

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: {
    type: 'detail' | 'wiki' | 'comiclink'
  }[]
  avatar_url: string;
}

export default function Home() {
    const [characterName, setCharacterName] = useState<string>("");
    const [characters, setCharacters] = useState<Character[]>([]);
    const { navigate } = useNavigation();

    const getCharacters = useCallback(
      async () => {
        if (!characterName)
          return;

        const response = await api.get('/characters', {
          params: {
            nameStartsWith: characterName
          }
        });
        
        const charactersResponse = response.data.data.results as Character[]
        
        if (charactersResponse){
          charactersResponse.forEach(character => {
            character.avatar_url = `${character.thumbnail.path}.${character.thumbnail.extension}`;
          })
        }
        
        setCharacters(charactersResponse || [])
      },
      [characterName]
    );

    return (
     <Container>
       <Form>
         <Input 
         placeholder="Enter a character name"
         onChangeText={setCharacterName}/>
         <Button onPress={getCharacters}>
           <ButtonText>SEARCH</ButtonText>
         </Button>
       </Form>
       <ListContainer>
         {characters.map(character => (
           <CharacterContainer key={character.id} onPress={() => navigate('Character', { character })}>
            <CharacterAvatar source={{uri: character.avatar_url}}/>
            <CharacterName>{character.name}</CharacterName>
          </CharacterContainer>
         ))}
       </ListContainer>

     </Container>
    )
}