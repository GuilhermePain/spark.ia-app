import { colors } from '@/constants';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import View from '../View';
import ThemedText from '../ThemedText';

export default function Loading(props: LoadingProps) {
  return (
    <View className="m-auto">
      <ActivityIndicator
        className="mx-auto"
        size={45}
        color={colors.light.primary}
        {...props}
      />
      <ThemedText className="mt-2" type="subtitle">
        Carregando...
      </ThemedText>
    </View>
  );
}

export interface LoadingProps extends ActivityIndicatorProps {}
