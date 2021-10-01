import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '_LINKS';

export const all = async () => {
  const links = await AsyncStorage.getItem(STORAGE_KEY);

  return JSON.parse(links) || [];
};

export const save = async (link) => {
  let links = await all();

  if (links.some(l => l.id === link.id)) {
    return;
  }

  links.push(link);

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(links));
};

export const remove = async (id) => {
  const links = await all();

  let excluded = links.filter(l => l.id !== id);

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(excluded));

  return excluded;
};