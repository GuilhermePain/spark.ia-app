import { Picker as PickerBase } from '@react-native-picker/picker';

export default function Picker(props: PickerProps) {
  return <PickerBase {...props} />;
}

Picker.Item = PickerBase.Item;

type PickerProps = React.ComponentProps<typeof PickerBase>;
