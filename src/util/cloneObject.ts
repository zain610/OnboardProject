export default (obj: any) => {
  let copy: any = {};
  Object.keys(obj).map((k: string) => (copy[k] = ""));
  return copy;
};
