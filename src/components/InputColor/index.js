import React from "react";
import { TwitterPicker } from 'react-color';
import { arrayColors, triangle} from './constants';

const InputColor = ({onChange, color}) => {
    return(
        <TwitterPicker 
            triangle={triangle} 
            onChange={onChange} 
            color={color} 
            colors={arrayColors} 
        />
    )
}

export default InputColor;