import store from 'configureStore';

const data = store.getState();

const showData = () => console.log(data);

export default showData;
