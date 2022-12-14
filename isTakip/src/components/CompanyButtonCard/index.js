import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './CompanyButtonCard.style'

const CompanyButtonCard = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default CompanyButtonCard;