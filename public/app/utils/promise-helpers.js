export const handleStatus = res =>
  res.ok ? res.json() : Promise.reject(res.statusText);

  export const log = res => {
    console.log(res);
    return res;
  }
