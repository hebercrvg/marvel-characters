import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CharacterAvatar, CharacterBio, CharacterName, Container } from './styles';
import {Character as CharacterObject} from '../Home';
import { useRoute, useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

interface RouteParams {
  character: CharacterObject;
}

const Character: React.FC = () => {
  const [character, setCharacter] = useState<CharacterObject>()
  const { params } = useRoute();
  const { setOptions } = useNavigation();

  useEffect(() => {
    const routeParams = params as RouteParams;
    
    setCharacter(routeParams.character)

    setOptions({
      title: routeParams.character.name
    })

  }, 
  [setCharacter, params]);


  return (
    <Container>
      <CharacterAvatar source={{uri: `${character?.thumbnail.path}.${character?.thumbnail.extension}`}}/>
      <CharacterName>{character?.name}</CharacterName>
      <CharacterBio>{character?.description}</CharacterBio>
    </Container>
  );
}

export default Character;