import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Pressable, Modal, TextInput } from 'react-native';
import { useState } from 'react';
import Card from './components/Card';

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  const [productos, setProductos] = useState([
    {
      id: '1',
      nombre: 'Crema facial',
      descripcion: 'Textura ligera y de rápida absorción, ideal para todo tipo de pieles.',
      stock: '32',
      categoria: 'Cuidado de la piel',
      precio: '25000',
    },
    {
      id: '2',
      nombre: 'Shampoo hidratante',
      descripcion: 'Formulado con ingredientes naturales que nutren y fortalecen el cabello.',
      stock: '15',
      categoria: 'Cuidado del cabello',
      precio: '18000',
    }
  ]);

  const saveProducts = () => {
    setProductos([
      ...productos,
      {
        id: 1,
        nombre: nombre,
        descripcion: descripcion,
        stock: stock,
        categoria: categoria,
        precio: precio
      }
    ]);

    setNombre('');
    setDescripcion('');
    setStock('');
    setCategoria('');
    setPrecio('');

    setVisibleModal(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tittleListClients}>
        <Text style={styles.tittleListClient}>Listado de productos</Text>
      </View>

      <View style={styles.containerBusqueda}>
        <TextInput
          style={styles.inputBusqueda}
          placeholder='Buscar'
        />
      </View>

      <View style={styles.containerList}>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ListEmptyComponent={() => <Text>No tienes datos</Text>}
          renderItem={({ item }) => (
            <Card
              nombre={item.nombre}
              descripcion={item.descripcion}
              stock={item.stock}
              categoria={item.categoria}
              precio={item.precio}
            />
          )}
        />
      </View>

      <Pressable 
      onPress={() => setVisibleModal(true)} 
      style={styles.newRegister}>
        <Text style={styles.textnewRegister}>+</Text>
      </Pressable>

      <Modal visible={visibleModal} animationType='slide'>
        <View style={styles.modalContainer}>
          <View style={styles.headerModal}>
            <Text style={styles.TextoModal}>Nuevo Producto</Text>
            <Pressable 
            onPress={() => setVisibleModal(false)} 
            style={styles.btnCerrarModal}>
              <Text style={styles.textnewRegister}>-</Text>
            </Pressable>
          </View>

          <View style={styles.bodyFormClients}>
            <View style={styles.formControl}>
              <Text>Nombre: </Text>
              <TextInput style={styles.inputText}
                placeholder='Nombre'
                keyboardType='default'
                value={nombre}
                onChangeText={setNombre}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Descripcion: </Text>
              <TextInput style={styles.inputText}
                placeholder='Descripcion'
                keyboardType='default'
                value={descripcion}
                onChangeText={setDescripcion}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Stock: </Text>
              <TextInput style={styles.inputText}
                placeholder='Stock'
                keyboardType='numeric'
                value={stock}
                onChangeText={setStock}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Categoria: </Text>
              <TextInput style={styles.inputText}
                placeholder='Categoria'
                keyboardType='default'
                value={categoria}
                onChangeText={setCategoria}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Precio: </Text>
              <TextInput style={styles.inputText}
                placeholder='Precio'
                keyboardType='numeric'
                value={precio}
                onChangeText={setPrecio}
              />
            </View>
            <Pressable onPress={saveProducts} style={styles.btnSaveData}>
              <Text style={{ fontWeight: 'bold' }}>GUARDAR DATOS</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  containerList: {
    flex: 1,
    padding: 10,
  },
  tittleListClients: {
    height: 65,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#77bcf8',
  },
  tittleListClient: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  containerBusqueda: {
    padding: 15,
    backgroundColor: '#77bcf8',
  },
  inputBusqueda: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  newRegister: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#77bcf8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textnewRegister: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  TextoModal: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  btnCerrarModal: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    marginBottom: 15,
  },
  inputText: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  btnSaveData: {
    marginTop: 20,
    height: 45,
    backgroundColor: '#77bcf8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});