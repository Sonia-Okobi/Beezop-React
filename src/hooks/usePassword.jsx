import { useState } from 'react';

export default function useModal() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return [click, toggle];
}
