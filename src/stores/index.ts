import Icestore from '@ice/store';
import todos from './todos';
import logger from '@ice/store-logger';
const icestore = new Icestore();

const middlewares: ((ctx, next) => {})[] = [];

if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(logger)
}

icestore.applyMiddleware(middlewares);

const stores = icestore.registerStores({
    todos,
})

export default stores;
