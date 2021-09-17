import React, { useState } from 'react';
import { 
StyleSheet, 
Text,
TouchableOpacity,
View, 
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';

export default function ListTasks({data, color, setTaks, task}) {


    return(
        <View>
            <View style={styles.container}> 
                <View style={
                    [
                        styles.viewBox, {
                            elevation: (data.status !== true) ? 1 :  0, 
                            opacity: (data.status !== true) ? 1 :  0.2
                            }
                    ]}>

                    <View style={{backgroundColor: color[data.color], width: 10}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: 60, height: 80}}>
                            <TouchableOpacity   style={{
                                width: 30, 
                                height: 30,
                                borderWidth: 1,
                                borderColor: (data.status !== true) ? '#D9D9D9' :  'none', 
                                backgroundColor: (data.status !== true) ? '#FFF' :  '#9100FA'
                            }}
                                               />
                        </View>

                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, paddingBottom: 5, paddingTop: 5,textDecorationLine: (data.status !== true) ? 'none' : 'line-through'}}>{data.task}</Text>
                    </View>
                    <TouchableOpacity  style={{width: 60, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
                       task.filter(a => a.task == data.task)
                    }}>
                        <Icon name="ios-trash" size={30} color="#9100FA" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    viewBox:{
        
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#FFF', 
        elevation: 2, 
        flexDirection: 'row',
        
    }
})