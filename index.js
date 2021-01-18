import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const playButton = require('../../assets/images/play_button.png');

const SelectDate = ({ navigation, route }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isOtpSelected, setIsOtpSelected] = useState(false);

  const nextClick = (isOtpSelection) => {
    if (isOtpSelection) {
      navigation.navigate('Transactions');
    }
  };

  const closeClick = () => {
    navigation.replace('Transactions');
  };

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>
        Select Date
      </Text>
      <View style={styles.closeImage}>
        <TouchableOpacity
          onPress={closeClick}
        >
          <Image source={playButton} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>
          Start Date
      </Text>
      </View>
      <View>
        <Text>
          2 Nov
      </Text>
      </View>
      <View>
        <Image source={playButton} />
      </View>
      <View>
        <Text>
          End Date
      </Text>
      </View>
      <View>
        <Text>
          4 Nov
      </Text>
      </View>
      <View style={styles.mobilefied}>
        <View />
        <View>
        <CalendarList
  // Callback which gets executed when visible months change in scroll view. Default = undefined
  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // Enable or disable scrolling of calendar list
  scrollEnabled={true}
  // Enable or disable vertical scroll indicator. Default = false
  showScrollIndicator={true}
  />
        </View>
        <View style={styles.ButtonView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => nextClick(isOtpSelected)}
          >
            <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectDate;
