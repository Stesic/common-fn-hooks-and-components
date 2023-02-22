

const useOnUnmount = (callback, dependencies) => {
    const isUnmounting = React.useRef(false);
  
    useEffect(() => () => (isUnmounting.current = true), []);
  
    useEffect(
      () => () => {
        if (isUnmounting.current) {
          callback();
        }
      },
      dependencies,
    );
  };
  