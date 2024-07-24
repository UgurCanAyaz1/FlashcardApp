import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flashcard from '../components/Flashcard'

const Home = () => {

  let languageSelection = "english";
  let languageExplanation = "german";
  let level = "A1";

  return (
    <View>
      <Flashcard languageSelection={languageSelection} languageExplanation={languageExplanation} level={level}></Flashcard>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})