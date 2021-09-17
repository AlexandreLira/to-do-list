import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { 
StyleSheet, 
Text,
View, 
TextInput, 
TouchableOpacity, 
ScrollView,
Modal,
FlatList
} from 'react-native';

import ListTasks from './src/Componets/ListTasks';
import Icon from 'react-native-vector-icons/Ionicons';




export default function App() {

    const [isVisible, setIsVisible] = useState(false)
    const [tabColor, setTabColor] = useState(['#0CFAF6','#42FA19','#FAD419','#FA0C38'])
    const [a, setA] = useState(0)
    const [priority]= useState(['Nenhum', 'Baixa', 'Média', 'Alta'])


    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])

    


    function checkInputTask(){
        if(newTask !== '') {
            createNewTask()
        } else {
            alert('input is empty')
        }
    }

    async function createNewTask(){
        
        let myTasks = tasks
        tasks.push({
            task: newTask,
            color: a,
            isDO: false
        })

        setTasks(myTasks)

        setIsVisible(false)
        setNewTask('')
        setA(0)
    }




    return (
        <View style={styles.container}>
        
            <View style={{height: 60, backgroundColor: '#9100FA', justifyContent: 'center', alignItems: 'center'}}> 
                <Text style={{color: '#FFF', fontSize: 20, fontStyle: 'italic', fontWeight: 'bold'}}>Lista de Tarefas</Text>
            </View>

            <View style={{flex: 1}}>
                
                <FlatList showsVerticalScrollIndicator={false}
                    data={tasks}
                    keyExtractor={item => item.key}
                    renderItem={({item}) => (
                        <ListTasks data={item} color={tabColor} setTasks={setTasks} tasks={tasks}/>
                    )}
                    />
            
            </View>  

            

            <View style={{flex: 1,position: 'absolute', bottom: 50, right: 30}}>
                <TouchableOpacity onPress={()=> setIsVisible(!isVisible)} style={{width: 60, height: 60, backgroundColor: '#9100FA', borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 5}}>
                    <Text style={{color: '#FFF' , fontSize: 30, marginTop: -3}}>+</Text>
                </TouchableOpacity>
            </View>
            
            <Modal visible={isVisible} transparent={true}>
                <View style={styles.containerBox}>
                    <View style={styles.viewBox}>
                        <View style={{width: '90%'}}>
                            {/* View para o botao de fechar */}
                            <View style={{height: 100, justifyContent: 'center', alignItems: 'flex-end'}}>
                            <TouchableOpacity onPress={()=> setIsVisible(!isVisible)} style={{width: 50, height: 50, marginRight: -10,marginTop: -30,backgroundColor: '#FA0C38', borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 5}}>
                                <Text style={{color: '#FFF' , fontSize: 20, marginTop: -5}}>x</Text>
                            </TouchableOpacity>
                                
                            </View>

                            {/* View para o Input e escolha de cor */}

                            <View>

                                <View style={{flexDirection: 'row'}}>
                                    <View style={{backgroundColor: tabColor[a], width: 10}}/>
                                    <TextInput
                                    multiline={true}
                                    value={newTask}
                                    placeholder="Digite uma tarefa..."
                                    onChangeText={(text) => setNewTask(text) }
                                    style={styles.textInput}
                                    />
                                </View>

                                <View style={{flexDirection: 'row', paddingTop: 10}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Prioridade: </Text><Text style={{fontSize: 18}}>{priority[a]}</Text>
                                </View>

                                {/* Botaos de prioridade */}

                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[0]}]} onPress={()=>{setA(0)}}/>       
                                    <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[1]}]} onPress={()=>{setA(1)}}/>            
                                    <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[2]}]} onPress={()=>{setA(2)}}/>
                                    <TouchableOpacity style={[styles.buttonColor,{backgroundColor: tabColor[3]}]} onPress={()=>{setA(3)}}/>                
                                </View>
                            </View>
                        </View>


                        <View style={styles.viewButtonCreate}>
                            <TouchableOpacity style={styles.buttonCreate} onPress={checkInputTask}>
                                <Icon name="checkmark-outline" size={30} color="#FFF"></Icon>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
            
        </View>
    );
}







        
    


const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 30
},
containerBox: {
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
    height: 60, 
    borderColor: '#F0F0F0',
    borderLeftColor: '#FFF',
    borderWidth: 1, 
    padding: 5, 
    fontSize: 20,
},
buttonColor:{
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    elevation: 2,
    marginRight: 10
},
viewButtonCreate:{
    flex: 1,
    position: 'absolute', 
    bottom: 50,
    right: 30,
},
buttonCreate:{
    width: 60, 
    height: 60, 
    backgroundColor: '#9100FA', 
    borderRadius: 30, 
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



