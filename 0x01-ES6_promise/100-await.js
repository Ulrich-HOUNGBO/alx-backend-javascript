import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    return Promise.resolve({ photo, user });
  } catch (e) {
    return Promise.resolve({ photo: null, user: null });
  }
}
