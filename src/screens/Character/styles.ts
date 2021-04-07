import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;

export const CharacterAvatar = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const CharacterName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;

export const CharacterBio = styled.Text`
  font-size: 18px;
  text-align: center;
`;