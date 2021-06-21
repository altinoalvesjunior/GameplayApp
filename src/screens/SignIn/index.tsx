import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { styles } from './style';

import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {

    <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
    />


    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title={"Entrar com Discord"} activeOpacity={0.5} />
            </View>
        </View>
    );
}