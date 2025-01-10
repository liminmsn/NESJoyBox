import { registerPlugin } from '@capacitor/core';
interface AlertType {
    echo(options: { value: string }): Promise<{ value: string }>;
}

const Alert = registerPlugin<AlertType>('Alert');
export default Alert;