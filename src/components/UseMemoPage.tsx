import React, { useMemo, useState } from 'react';

const UseMemoPage: React.FC = () => {
  const [numberA, setNumberA] = useState<number>(0);
  const [numberB, setNumberB] = useState<number>(0);

  const result = useMemo(() => {
    return numberA * numberB;
  }, [numberA, numberB]);

  return (
    <div className="page">
      {/* A input */}
      <input
        type="number"
        value={numberA}
        onChange={event => setNumberA(+event.target.value)}
      />

      {/* B input */}
      <input
        type="number"
        value={numberB}
        onChange={event => setNumberB(+event.target.value)}
      />

      {/* Text */}
      <span>The result for {numberA} * {numberB} = {result}</span>
    </div>
  );
}

export default UseMemoPage;
