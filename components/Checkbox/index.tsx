import CheckboxBase from "react-native-bouncy-checkbox";

export default function Checkbox(props: CheckboxProps) {
  return <CheckboxBase {...props} />;
}

type CheckboxProps = React.ComponentProps<typeof CheckboxBase>;
