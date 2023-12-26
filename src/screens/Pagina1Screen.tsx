import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Button
        title="Ir a Personas"
        onPress={() =>
          navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Jefferson',
          })
        }
      />
      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity
        style={{...styles.botonGrande,backgroundColor:'orange'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Jefferson',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Jefferson</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{...styles.botonGrande,backgroundColor:'green'}}
        onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Luis',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Luis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
