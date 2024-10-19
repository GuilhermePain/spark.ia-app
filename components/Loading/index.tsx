import { Colors } from '@/constants/Colors';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import View from '../View';
import ThemedText from '../ThemedText';

export default function Loading(props: LoadingProps) {
  return (
    <View className="m-auto -mt-10">
      <ActivityIndicator
        className="mx-auto"
        size={45}
        color={Colors.light.primary}
        {...props}
      />
      <ThemedText className="mt-2" type="subtitle">
        Carregando...
      </ThemedText>
    </View>
  );
}

export interface LoadingProps extends ActivityIndicatorProps {}
