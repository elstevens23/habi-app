import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

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
  scrollView: {
    height: '50%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: '#000000',
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
  },
});
