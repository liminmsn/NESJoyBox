import { registerPlugin } from '@capacitor/core';
interface CameraType {
    taking_photos(): Promise<{ value: any }>;
}

const Camera = registerPlugin<CameraType>('Camera');
export default Camera;