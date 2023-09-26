import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const user = await createUser();
  const photo = await uploadPhoto();
  try {
    return Promise.resolve({ photo, user });
  } catch (e) {
    return Promise.resolve({ photo: null, user: null });
  }
}
