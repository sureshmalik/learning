// QUESTION - 1  useEffect and useLayoutEffect 
// Both are both React hooks that allow you to perform side effects in function components. However, they have different timings in the component lifecycle, 
// which can affect when the side effects are executed.
// useEffect:
// Timing: useEffect is executed after the browser has painted the screen and after the component has rendered or re-rendered.
// Synchronization: It runs asynchronously after the browser has completed rendering, so it does not block painting or layout.
// useLayoutEffect:
// Timing: useLayoutEffect is executed synchronously after all DOM mutations but before the browser has painted the screen. It runs before the browser updates the layout and paints.
// Synchronization: It runs synchronously after the DOM has been updated but before the browser has painted, so it can block painting and layout if the side effect is intensive.
// ** IF we are using authentication (checking authentication, AuthToken) we can use useLayoutEffect, in begining and here only control stops and not go furher
//    down to render other components or make other API calls
