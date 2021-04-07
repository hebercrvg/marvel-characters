import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Form = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: ${colors.grey};
  border-radius: 4px;
  padding: 0 12px;
  height: 40px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 4px;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.green};
`;

export const ButtonText = styled.Text`
  color: ${colors.black};
  font-size: 14px;
  font-weight: bold;
`;

export const ListContainer = styled.ScrollView`
  padding: 10px;
  flex: 1;
`;

export const CharacterContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
  padding: 12px;
  border-radius: 4px;
  background-color: ${colors.grey};
`;

export const CharacterAvatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const CharacterName = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;