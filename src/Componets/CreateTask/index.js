import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text,
    View, 
    TextInput, 
    TouchableOpacity, 
    ScrollView,
    Modal
} from 'react-native';

export default function CreateTask() {

    const [tabColor, setTabColor] = useState(['#0CFAF6','#42FA19','#FAD419','#FA0CC2'])
    const [a, setA] = useState(0)
    
    return (
            <View style={styles.container}>
                <View style={styles.viewBox}>
                    <View style={{width: '90%'}}>
                        {/* View para o botao de fechar */}
                        <View style={{height: 100}}>

                        </View>

                        {/* View para o Input e escolha de cor */}
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{backgroundColor: tabColor[a], width: 10}}/>
                                <TextInput
                                multiline={true}
                                placeholder="Digite uma tarefa..."
                                style={styles.textInput}
                                />
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[0]}]} onPress={()=>{setA(0)}}/>       
                                <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[1]}]} onPress={()=>{setA(1)}}/>            
                                <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[2]}]} onPress={()=>{setA(2)}}/>
                                <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[3]}]} onPress={()=>{setA(3)}}/>                
                            </View>
                        </View>
                    </View>


                    <View style={styles.viewButtonCreate}>
                        <TouchableOpacity style={styles.buttonCreate} onPress={()=>setIsVisible(false)}>
                            <Text style={styles.buttonCreateText}>Criar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        
    
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-end', 
        backgroundColor: '#9100FA'
    },
    viewBox:{
        height: '80%', 
        alignItems: 'center',
        backgroundColor: '#FFF', 
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40, 
    },
    textInput:{
        flex: 1,
        height: 100, 
        borderColor: '#F0F0F0',
        borderLeftColor: '#FFF',
        borderWidth: 1, 
        padding: 5, 
        fontSize: 20,
    },
    buttonColor:{
        width: 40, 
        height: 40, 
        borderRadius: 30, 
        elevation: 2,
        marginRight: 10
    },
    viewButtonCreate:{
        flex: 1,
        position: 'absolute', 
        bottom: 50, 
        justifyContent: 'center'
    },
    buttonCreate:{
        width: 100, 
        height: 60, 
        backgroundColor: '#9100FA', 
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        elevation: 5
    },
    buttonCreateText:{
        color: '#FFF' , 
        fontSize: 20, 
        marginTop: -3, 
        fontWeight: 'bold'
    }
});
