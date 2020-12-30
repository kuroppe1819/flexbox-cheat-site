const register = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then(() => {
                // nothing
            })
            .catch((e) => console.log(e));
    }
};

export const serviceWorkerRegistration = {
    register,
};
