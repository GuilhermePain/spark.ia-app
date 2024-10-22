import {
  BlurView as BlurViewBase,
  BlurViewProps as BlurViewBaseProps,
} from 'expo-blur';

export default function BlurView(props: BlurViewProps) {
  return <BlurViewBase {...props} />;
}

export interface BlurViewProps extends BlurViewBaseProps {}
