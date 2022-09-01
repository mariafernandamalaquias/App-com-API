import React from "react";
import { View, Text, Button, StyleSheet, Image} from "react-native";
import api from "../utils/api";
import { TouchableOpacity } from "react-native-gesture-handler";


const Cliente = (props) => {
    const Deletar = (id) => {
        api.delete('usuarios/' + id).then(() => props.navigation.push('Clientes'));
    }

    return (
        <View style={styles.card}>
            <View style={styles.clienteBox}>
                <Text style={{textTransform: 'uppercase', color: '#fff', fontWeight: 'bold'}}>{props.inicial}</Text>
            </View>
            <TouchableOpacity onPress={() => { props.navigation.push('Saldos', { id: props.id, nome: props.nome }) }}>
                <Text>{props.nome}</Text>
                <Text style={{color: '#F56A4D', fontWeight: 'bold', fontSize: '18px'}}>R$ {props.valorTotal}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {Deletar(props.id)}}>
                <Image style={styles.lixeira} source={{uri: 'https://www.kindpng.com/picc/m/200-2009551_full-trash-icon-hd-png-download.png'}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '12px',
        marginVertical: '10px',
        paddingVertical: '20px',
        //Property of shadow 
        shadowColor: '#3F3D46',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    clienteBox: {
        backgroundColor: '#F56A4D',
        paddingHorizontal: '20px',
        paddingVertical: '20px',
        borderRadius: '12px',
    },
    lixeira:{
        width: 20,
        height: 20,
    }
})

export default Cliente;