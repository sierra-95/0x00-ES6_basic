export default function guardrail(mathFunction) {
    const queue = [];
    try {
      if (mathFunction() instanceof Error) {
        throw Error();
      }
      queue.push(mathFunction());
      return (queue);
    } catch (err) {
      queue.push('Error: cannot divide by 0');
      return (queue);
    } finally {
      queue.push('Guardrail was processed');
    }
  }