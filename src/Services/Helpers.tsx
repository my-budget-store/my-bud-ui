import Cookies from "js-cookie";

export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value);
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const removeCookie = (name: string) => {
  return Cookies.remove(name);
};
export const parseImageUrl = (image: ArrayBuffer) => {
  const binaryString = window.atob(image as any);
  const length = binaryString.length;
  const bytes = new Uint8Array(length);

  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const blob = new Blob([bytes], { type: "image/jpeg" });
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
};
