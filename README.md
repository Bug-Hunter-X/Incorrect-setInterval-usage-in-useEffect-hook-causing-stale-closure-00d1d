# Incorrect setInterval usage in useEffect hook

This example demonstrates a common mistake when using `setInterval` within a React component's `useEffect` hook. The issue arises from the way closures work in JavaScript, specifically how the callback function passed to `setInterval` captures the value of `count` at the time of its definition, not at the time of its execution.