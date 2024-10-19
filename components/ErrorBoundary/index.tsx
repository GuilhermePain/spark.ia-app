import {
  ErrorBoundary as ErrorBoundaryBase,
  ErrorBoundaryProps as ErrorBoundaryType,
} from 'react-error-boundary';
import Image from '../Image';

type ErrorBoundaryProps = ErrorBoundaryType;

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <ErrorBoundaryBase
      fallback={
        <div className="flex w-full h-full">
          <Image
            className="w-52 h-44 mx-auto"
            resizeMethod="scale"
            resizeMode="contain"
            source={require('../../assets/images/bug.png')}
          />
        </div>
      }
    >
      {props.children}
    </ErrorBoundaryBase>
  );
}
