import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Card } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import wordList from '../assets/wordList.json';

const Flashcard = () => {
    const languageSelection = useSelector(state => state.data.languageSelection);
    const languageExplanation = useSelector(state => state.data.languageExplanation);
    const level = useSelector(state => state.data.level);

    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchWords = async () => {
        try {
            // Clear AsyncStorage to remove old word list
            await AsyncStorage.removeItem('wordList');

            // Store the new word list in AsyncStorage
            await AsyncStorage.setItem('wordList', JSON.stringify(wordList));

            // Get the new Stored list in AsyncStorage
            const storedWords = await AsyncStorage.getItem('wordList');

            if (storedWords) {
                // Convert stored list to json object
                const parsedWords = JSON.parse(storedWords);

                // Convert object to array
                const result = Object.keys(parsedWords).map((key) => parsedWords[key]);

                // Filter the list based on level
                const filterResult = result.filter((item) => item.level === level);
                setWords(filterResult);
            }
        } catch (error) {
            console.error('Error fetching words:', error);
        }
    };

    useEffect(() => {
        fetchWords();
    }, [languageSelection, languageExplanation, level]);

    if (words.length === 0) return <Text>Loading...</Text>;

    const currentWord = words[currentIndex];

    return (
        <View>
            <Card>
                { languageSelection === "english" ? <Text style={styles.word}>{currentWord.english}</Text> : null }
                { languageSelection === "german" ? <Text style={styles.word}>{currentWord.german}</Text> : null }
                { languageSelection === "turkish" ? <Text style={styles.word}>{currentWord.turkish}</Text> : null }
                { languageExplanation === "english" ? <Text style={styles.word}>{currentWord.english}</Text> : null }
                { languageExplanation === "german" ? <Text style={styles.word}>{currentWord.german}</Text> : null }
                { languageExplanation === "turkish" ? <Text style={styles.word}>{currentWord.turkish}</Text> : null }
                <Button title="Next" onPress={() => setCurrentIndex((currentIndex + 1) % words.length)} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    word: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    definition: {
        fontSize: 18,
        marginVertical: 10,
        textAlign: 'center'
    },
});

export default Flashcard;
