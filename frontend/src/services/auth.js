export default function isAuth() {
  return localStorage.getItem("user") != null;
}
