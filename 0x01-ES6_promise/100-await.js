import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const obj = await Promise.all([uploadPhoto(), createUser()]);
    return ({ photo: obj[0], user: obj[1] });
  } catch (err) {
    return ({ photo: null, user: null });
  }
}