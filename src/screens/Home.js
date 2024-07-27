import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button } from '@rneui/base';
import { Input, ListItem } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { changeLanguageSelection, changeLanguageExplanation, changeLevel } from '../store/slices/dataSlice';


const Home = ({ navigation }) => {
  const [expandedLevel, setExpandedLevel] = useState(false);
  const [expandedPractice, setExpandedPractice] = useState(false);
  const [expandedKnown, setExpandedKnown] = useState(false);

  const dispatch = useDispatch();

  const navigate2Flashcard = () => {
    navigation.navigate("FlashcardScreen");
  };

  const handleLevelSelect = (level) => {
    dispatch(changeLevel(level));
    setExpandedLevel(false);
  };

  const handleLanguagePracticeSelect = (language) => {
    dispatch(changeLanguageSelection(language.toLowerCase()));
    setExpandedPractice(false);
  };

  const handleLanguageKnownSelect = (language) => {
    dispatch(changeLanguageExplanation(language.toLowerCase()));
    setExpandedKnown(false);
  };

  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const languagePractice = ["English", "German", "Turkish"];
  const languageKnown = ["English", "German", "Turkish"];

  return (
    <ScrollView>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Select Level</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedLevel}
        onPress={() => setExpandedLevel(!expandedLevel)}
      >
        {levels.map((level, index) => (
          <ListItem key={index} onPress={() => handleLevelSelect(level)} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{level}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>

      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Select Language for Practice</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedPractice}
        onPress={() => setExpandedPractice(!expandedPractice)}
      >
        {languagePractice.map((language, index) => (
          <ListItem key={index} onPress={() => handleLanguagePracticeSelect(language)} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{language}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>

      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>Select Known Language</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expandedKnown}
        onPress={() => setExpandedKnown(!expandedKnown)}
      >
        {languageKnown.map((language, index) => (
          <ListItem key={index} onPress={() => handleLanguageKnownSelect(language)} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{language}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>

      <Button onPress={navigate2Flashcard} title="Click Here for Flashcards" color="#841584" />
      {/* <Button onPress={navigate2Flashcard} title="Click Here to Add Word" color="#841584" /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
