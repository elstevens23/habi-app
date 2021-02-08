import React from 'react';
import {StyleSheet} from 'react-native';
import * as Dimensions from "eslint/lib/linter/rules";

export const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  header: {
    height: 80,
    padding: 15,
    backgroundColor: '#83bf80',
    alignSelf: 'center',
    width: '100%',
  },
  profile: {
    backgroundColor: '#f69b31',
    width: '100%',
    padding: 15,
    textAlign: 'center'
  },
  textOne: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textTwo: {
    fontSize: 20,
  },
  scrollView: {
    height: 500,
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: '#000000',
  },
  flatListContainer: {
    flex: 1,
    overflow: 'hidden',
    borderWidth: 0,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});
