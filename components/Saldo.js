import React from "react";
import { View, Text, Button, Image, StyleSheet} from "react-native";
import api from "../utils/api";
import { TouchableOpacity } from "react-native-gesture-handler";


const Saldo = (props) =>{
    const Deletar = (id) =>{
        api.delete('usuarios/' + props.idCliente + '/saldos/' + id).then(() => props.navigation.push('Saldos', {id: props.idCliente, nome: props.nome}));
    }

    return(
        <View style={styles.card}>
            <Text style={styles.valor}>{props.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
            <TouchableOpacity onPress={() => Deletar(props.id)}>
                <Image style={styles.lixeira} source={{uri: 'https://www.kindpng.com/picc/m/200-2009551_full-trash-icon-hd-png-download.png' }}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '12px',
        marginVertical: '12px',
        paddingVertical: '10px',
        
        //Property of shadow 
        shadowColor: '#3F3D46',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    valor:{
        color: '5A5765',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    lixeira:{
        width: 20,
        height: 20,
    }
})

export default Saldo;