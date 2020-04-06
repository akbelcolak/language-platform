import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/user/add`;

export function register(user) {
  return http.post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.location,
    nativeLanguage: user.nativeLanguage,
    languageToLearn: user.languageToLearn,
    phoneNumber: user.phoneNumber,
    Gender: user.Gender,
    skill: user.skill,
    email: user.email,
    password: user.password,
    birthdate: user.birthdate
  });
}
