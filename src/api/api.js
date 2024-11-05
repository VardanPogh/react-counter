export const fetchInitialValue = () => {
    return Promise.resolve({ data: { initialValue: Math.floor(Math.random() * (100000 - 1) ) + 1  }});
};
