```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct usage using functional update
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```