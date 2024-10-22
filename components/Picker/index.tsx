import {
  Picker as PickerBase,
  PickerItemProps,
} from '@react-native-picker/picker';
import View from '../View';

export default function Picker(props: PickerProps) {
  return (
    <View className="bg-slate-100 overflow-hidden rounded-lg shadow-lg">
      <PickerBase
        itemStyle={{ fontWeight: 600, fontFamily: "Medium" }}
        style={{ height: 47, marginTop: -6, fontFamily: "Medium" }}
        {...props}
      />
    </View>
  );
}

Picker.Item = (props: PickerItemProps) => <PickerBase.Item {...props} />;

type PickerProps = React.ComponentProps<typeof PickerBase>;
