import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {WebView} from 'react-native-webview';

const Payment = ({amount, currency, description, navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const [liqpayData, setLiqpayData] = useState(null);

  useEffect(() => {
    if (donationItemInformation) {
      axios
        .post(
          'https://intense-inlet-09611-9e5c1d64b5c3.herokuapp.com/create-payment', // Замініть на ваш реальний сервер
          {
            amount: donationItemInformation.price,
            currency: 'USD', // Ви можете змінити валюту на 'UAH'
            description: 'Payment for donation',
          },
        )
        .then(response => {
          console.log('Response Data:', response.data);
          setLiqpayData(response.data);
        })
        .catch(error => {
          console.error('Error creating payment', error);
        });
    }
  }, [donationItemInformation, amount, currency, description]);

  if (!liqpayData) {
    return <Text style={style.loadingText}>Loading...</Text>;
  }

  // Генеруємо форму для LiqPay
  const formHtml = `
  <html>
    <body>
      <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
        <input type="hidden" name="data" value="${liqpayData.data}" />
        <input type="hidden" name="signature" value="${liqpayData.signature}" />
        <input type="submit" value="Pay Now" />
      </form>
      <script type="text/javascript">
        document.forms[0].submit();
      </script>
    </body>
  </html>
  `;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}
        </Text>
        <WebView
          originWhitelist={['*']}
          source={{html: formHtml}}
          style={{flex: 1}}
        />
    </SafeAreaView>
  );
};

export default Payment;
