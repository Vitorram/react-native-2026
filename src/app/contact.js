import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, View, Text} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
export default function ContactScreen() {

  const router = useRouter(); 


  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Primeira View: header com altura fixa de 100 pontos. */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/1a/fc/37/1afc37ca7777eb71a9925b6066415e80.jpg',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.title}>
          <Text style={styles.textTitle}>
            接触
          </Text>
        </View>
        {/* O Pressable inteiro vira o botão e centraliza o ícone com Flexbox. */}
        <Pressable
          style={styles.buttonContainer}
          onPress={() => router.push('/')}
          accessibilityRole="button"
          accessibilityLabel="Voltar para a página inicial"
        >
          <AntDesign name="home" size={24} color="black" />
        </Pressable>
      </View>
      {/* Segunda View: entra depois do header no fluxo normal da coluna. */}
      
    </View>
  );
}



const styles = StyleSheet.create({
  buttonContainer: {
    // fundo do icone, para que fique visível sobre o header.
    backgroundColor: '#fff',
    marginRight: 20,
    borderRadius: 20,
    width: 40,
    height: 40,
    // Centraliza o ícone nos eixos horizontal e vertical.
    alignItems: 'center',
    justifyContent: 'center',

  },

  textBloco: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },

  fotoBloco:{
    width:50,
    height:50,
  },
  txtBloco: {
    // "color" muda a cor das letras dentro de um componente Text.
    color: '#000',
    fontSize: 20
  },

  bloco: {
    // backgroundColor pinta o fundo da View para conseguirmos enxergá-la.
    backgroundColor: '#ffffff',
    width: '70%',
    height: 100,
    marginHorizontal: 'auto',
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },

  container: {
    // flex: 1 faz o container ocupar todo o espaço disponível da tela.
    flex: 1,
    // O padding cria espaço no topo e empurra header e bloco juntos.
    paddingTop: 70,
    backgroundColor: '#cdd7e0',
  },

  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#040c14',
    // Por padrão os filhos ficam em coluna; "row" coloca logo e título lado a lado.
    flexDirection: 'row',
    // Como a direção é "row", alignItems centraliza no eixo vertical.
    alignItems: 'center',
  },

  logo:{
    width: 70,
    height: 70,
  },

  title:{
    // A logo usa 80 pontos; o título ocupa todo o espaço horizontal restante.
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },

  textTitle:{
    color: '#d3d2d2',
    fontSize: 30
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: '100%'
  },
});
