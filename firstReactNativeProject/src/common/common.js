import React,{Component} from 'react';
import{
    Dimensions
} from 'react-native';

export function getDimensionWitdh(x){
    var width = Dimensions.get('window').width;
    if(x)
        width = width + x;

    return width;
}
export function getDimensionHeight(y){
    var height = Dimensions.get('window').height;
    if(x)
        height = height + y;

    return height;
}