import userData from "../data.json";

export const getUsers = () => {
  return userData.users || {};
};

export const addUser = (email, password) => {
  if (!email || !password) return false;

  // Update the JSON object
  userData.users[email] = password;

  // Save to localStorage to mimic persistence
  localStorage.setItem('users', JSON.stringify(userData.users));
  return true;
};
