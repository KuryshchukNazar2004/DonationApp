import {SafeAreaView, ScrollView} from 'react-native';
import Input from '../../components/Input/Input';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  console.log('email', email)

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Input
          keyboardType={'email-address'}
          label={'Email'}
          placeholder={'Enter your email ...'}
          onChangeText={value => setEmail(value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
