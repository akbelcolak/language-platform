import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/add`;

export function register(user) {
  return http.post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
    nativeLanguage: user.nativeLanguage,
    languageToLearn: user.languageToLearn,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
    skill: user.skill,
    email: user.email,
    password: user.password,
    birthdate: user.birthdate
  });
}
