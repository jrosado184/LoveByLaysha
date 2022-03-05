const Phone = (x) => {
  const str =
    String(x).slice(0, 3) +
    "-" +
    String(x).slice(3, 6) +
    "-" +
    String(x).slice(6, 10);

  const spl = String(x).split("");
  if (spl.includes("-")) {
    return x;
  } else {
    return str;
  }
};

export default Phone;
