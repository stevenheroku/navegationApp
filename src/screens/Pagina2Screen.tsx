import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'

export const Pagina2Screen = ({navigation}:any) => {

  const navigator = useNavigation();

  useEffect(() => {
   navigator.setOptions({
      titlle:'Hola Mundo',
      headerBackTitle:'Atras'
   })
  }, [])
  
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina2Screen</Text>

         <Button title='Ir Pagina 3'
        onPress={() => navigation.navigate('Pagina3Screen')}
        />
    </View>
  )
}
