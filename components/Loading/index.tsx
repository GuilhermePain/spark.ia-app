import { Colors } from '@/constants/Colors';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

export default function Loading(props: LoadingProps) {
  return (
    <ActivityIndicator
      className="m-auto"
      size={45}
      color={Colors.light.primary}
      {...props}
    />
  );
}

export interface LoadingProps extends ActivityIndicatorProps {}
