import {View, Text, SafeAreaView} from 'react-native';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import {horizontalScale} from '../../assets/styles/scaling';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* <Search onSearch={(value) => {console.log(value)}}/> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(24),
        }}>
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Enviroment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Education'}
          donationTitle={'Genius Rubik'}
          price={50}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(24),
        }}>
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Education'}
          donationTitle={'Genius Rubik'}
          price={50}
        />
        <SingleDonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Education'}
          donationTitle={'Genius Rubik'}
          price={50}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
