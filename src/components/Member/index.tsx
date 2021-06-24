import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

import { Avatar } from '../../components/Avatar';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/theme';

type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type Props = {
    data: MemberProps;
}

export function Member({data}: Props) {

    const isOnline = data.status === 'online';
    const { primary, on } = theme.colors;

    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />

            <View>
                <Text style={styles.title}>
                    { data.username }
                </Text>

                <View style={styles.status}>
                    <View 
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnline ? on : primary
                            }
                        ]}
                    />

                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Disponível' : 'Ocupado' }
                    </Text>
                </View>
            </View>

        </View>
    );
}
