export default function divideFunction(numerator, denominator) {
    try {
      if (denominator !== 0) {
        return (numerator / denominator);
      }
      throw Error;
    } catch (err) {
      throw Error('cannot divide by 0');
    }
  }