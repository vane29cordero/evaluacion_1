import { StyleSheet, Text, View, Image, Pressable } from "react-native";


export default function Card({ nombre, descripcion, stock, categoria, precio, imagen, onPress }) {

    return (
        <Pressable style={styles.cardContainer} onPress={onPress}>

            <View style={styles.imagen}>
                <Image
                    source={imagen}
                    style={styles.imagen}
                />
                <View style={styles.container}>
                    <View style={styles.textCard}>
                        <Text style={styles.titleCard}>{nombre}</Text>
                        <Text style={styles.descCard}>{descripcion}</Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.textInfoCard}>Stock: </Text><Text>{stock}</Text>
                        <Text style={styles.textInfoCard}>Categoria: </Text><Text>{categoria}</Text>
                        <Text style={styles.textInfoCard}>Precio: </Text><Text>$ {precio}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 10,
        marginVertical: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: { width: 0, height: 2 },
        elevation: 2,
    },
    imagen: {
        height: 80,
        width: 80,
        borderRadius: 8,
        backgroundColor: '#E2E8F0',
    },
    container: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E293B',
    },
    descCard: {
        fontSize: 12,
        color: '#64748B',
    },
    infoCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    textInfoCard: {
        fontSize: 11,
        color: '#64748B',
    }
});