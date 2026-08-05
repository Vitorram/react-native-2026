import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, View, Text} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import { Link } from 'expo-router';

export default function HomeScreen() {
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
            ビクター
          </Text>
        </View>
        <Link href="/contact" asChild>
          {/* Pressable permite centralizar o conteúdo do Link com Flexbox. */}
          <Pressable style={styles.buttonContainer}>
            <AntDesign name="user-add" size={24} color="black" />
          </Pressable>
        </Link>
      </View>
      {/* Segunda View: entra depois do header no fluxo normal da coluna. */}
      <View style={styles.bloco}>
        <View style={styles.fotoBloco}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/1200x/f5/f5/7f/f5f57f5a5c6cbe59671f5e6781f5b049.jpg',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textBloco}>
          <Text style={styles.txtBloco}>
            ビクター
          </Text>
          <Text style={styles.categoryText}>
            エキソ
          </Text>
        </View>
        {/* O texto usa flex: 1 e empurra a lixeira para o lado direito. */}
        <Octicons style={styles.headerIcon} name="trash" size={20} color="#b42318" />
      </View>
      <View style={styles.bloco}>
        <View style={styles.fotoBloco}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/68/b2/68/68b26825ef920247915f07066043fbbb.jpg',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textBloco}>
          <Text style={styles.txtBloco}>
            ビクター
          </Text>
          <Text style={styles.categoryText}>
            愛染
          </Text>
        </View>
        <Octicons style={styles.headerIcon} name="trash" size={20} color="#b42318" />
      </View>
      <View style={styles.bloco}>
        <View style={styles.fotoBloco}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/bc/2c/36/bc2c36e3aebb6e066d2e97c6036d9a2d.jpg',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textBloco}>
          <Text style={styles.txtBloco}>
            ビクター 
          </Text>
          <Text style={styles.categoryText}>
            一般
          </Text>
        </View>
        <Octicons style={styles.headerIcon} name="trash" size={20} color="#b42318" />
      </View>
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

  iconContainer: {
    //icone
  },
  headerIcon: {
    // Evita que o ícone encoste na borda direita do header.
    marginRight: 20,
  },

  textBloco: {
    // Ocupa o espaço entre a foto e o ícone de lixeira.
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },

  categoryText: {
    color: '#555555',
    fontSize: 14,
    marginTop: 4,
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
    gap: 20,
    borderRadius: 10,
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
