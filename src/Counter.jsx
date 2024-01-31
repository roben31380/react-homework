import { useState } from 'react';

function Counters() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1)
  };

  return (
    <>
    <Counter count={count} onCount={handleCount} />
    <Counter count={count} onCount={handleCount} />
    </>
    
    
  )

}


function Counter({count,onCount}) {

  return (
    <button type="button" className="Counter" onClick={onCount}>
      {count} 번
    </button>
  );
}

export default Counters;
