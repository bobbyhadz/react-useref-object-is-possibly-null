import {useEffect, useRef} from 'react';

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 👉️ ref could be null here
    if (inputRef.current != null) {
      // 👉️ TypeScript knows that ref is not null here
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" id="message" />
      <button>Click</button>
    </div>
  );
}
