import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * @description Overrides the PUSH and REPLACE methods in history to
 * save the window scroll position for the route.
 *
 * @param { Object } scrollData - Contains pathname and its scroll position.
 */
const useScrollMemory = scrollData => {
    const history = useHistory();

    useEffect(() => {
        const { push, replace } = history;

        // Override the history PUSH method to automatically set scroll state.
        history.push = (path, state = {}) => {
            scrollData[history.location.pathname] = window.scrollY;
            push(path, state);
        };

        // Override the history REPLACE method to automatically set scroll state.
        history.replace = (path, state = {}) => {
            scrollData[history.location.pathname] = window.scrollY;
            replace(path, state);
        };

        // Listen for location changes and set the scroll position accordingly.
        const unregister = history.listen((location, action) => {
            window.scrollTo(0, action !== 'POP' ? 0 : scrollData[location.pathname] ?? 0);
        });

        // Unregister listener when component unmounts.
        return () => {
            unregister();
        };
    }, [history, scrollData]);
};

export default useScrollMemory;
