import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Header from './src/component/header';
import SplashScreen from './src/page/splashScreen';
import {styles} from './App-styles';
import {
  beardedDragon,
  chameleon,
  fish,
  frog,
  lizard,
  spider,
  tortoise,
} from './images';
import Lizard from "./src/page/lizard";
import Subheader from "./src/component/subheader";

const enclosuresData = [
  {id: '1', title: 'Vivarium'},
  {id: '2', title: 'Terrarium'},
  {id: '3', title: 'Aquarium'},
  {id: '4', title: 'Hutch'},
  {id: '5', title: 'Mansion'},
  {id: '6', title: 'Lake House'},
];

const animalsData = [
  {id: '1', title: 'Harry the Wizard Lizard', animal: lizard, page: 'Lizard'},
  {id: '2', title: 'MC Hopper', animal: frog, page: 'Frog'},
  {id: '3', title: 'Tarantulina Jolie', animal: spider, page: 'Spider'},
  {id: '4', title: 'James Pond', animal: fish, page: 'Fish'},
  {id: '5', title: 'Shelly', animal: tortoise, page: 'Shelly'},
  {id: '6', title: 'Green Bean', animal: chameleon, page: 'Chameleon'},
  {
    id: '7',
    title: 'Lizanardo Da Vinci',
    animal: beardedDragon,
    page: 'BeardedDragon',
  },
];

const numberOfAnimals = animalsData.length;
const numberOfEnclosures = enclosuresData.length;

const HomeScreen = () => {
  const [splashIsHidden, setSplashIsHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplashIsHidden(true);
    }, 2500);
  }, []);

  return !splashIsHidden ? (
    <SplashScreen />
  ) : (
    <View style={styles.tabContainer}>
      <Header title="Welcome to the Habi app" />
      <Text>Home Screen</Text>
    </View>
  );
};

const GameScreen = () => {
  return (
    <View style={styles.tabContainer}>
      <Text>Game Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [activePage, setActivePage] = useState('HomeScreen');

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#FFFFFF' : '#9ee39a';

    const Item = ({style, props}) => (
      <TouchableOpacity
        onPress={() => {
          setActivePage(item.page);
          setSelectedId(item.page);
        }}
        style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.page)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Habi" />
      </View>
      <ScrollView style={{flex: 1}}>
        <View>
          <View style={styles.profile}>
            <Subheader title="Profile Overview" />
            <Text>
              <Text style={styles.textOne}>Name: </Text>
              <Text style={styles.textTwo}>Niall Paterson</Text>
            </Text>
            <Text>
              <Text style={styles.textOne}>Number of Animals: </Text>
              <Text style={styles.textTwo}>{numberOfAnimals}</Text>
            </Text>
            <Text>
              <Text style={styles.textOne}>Number of Enclosures: </Text>
              <Text style={styles.textTwo}>{numberOfEnclosures}</Text>
            </Text>
          </View>
          <View style={styles.scrollView}>
            <Header title="My Animals" />
            <FlatList
              data={animalsData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              style={styles.flatListContainer}
            />
          </View>
          <View style={styles.scrollView}>
            <Header title="My Enclosures" />
            <FlatList
              data={enclosuresData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


const SettingsScreen = () => {
  return (
    <View style={styles.tabContainer}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Game: {
      screen: GameScreen,
      navigationOptions: {
        tabBarLabel: 'Games',
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: {backgroundColor: '#83bf80'},
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#615af6',
    inactiveColor: '#46f6d7',
    barStyle: {backgroundColor: '#67baf6'},
  },
);

export default createAppContainer(TabNavigator);
