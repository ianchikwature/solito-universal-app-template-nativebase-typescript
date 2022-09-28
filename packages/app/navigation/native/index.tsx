import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from 'app/features/home/screen'
import { UserDetailScreen } from 'app/features/user/detail-screen'
import SignInScreen from "app/features/auth/SignIn";
import SignUpScreen from "app/features/auth/SignUp";
import ProductDetailScreen from "app/features/auth/ProductScreen";
import OtpVerificationScreen from "app/features/auth/OTP";

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  },
  'sign-in' : undefined
  'sign-up': undefined
  'one-time-passcode': undefined
  'product-detail': {
    id: string
  },
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name="sign-in"
        component={SignInScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name="sign-up"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
        }}
      />
      <Stack.Screen
        name="product-detail"
        component={ProductDetailScreen}
        options={{
          title: 'Product Details',
        }}
      />
      <Stack.Screen
        name="one-time-passcode"
        component={OtpVerificationScreen}
        options={{
          title: 'OTP Verification',
        }}
      />
    </Stack.Navigator>
  )
}
