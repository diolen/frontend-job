import alt from './alt';
import Actions from './Actions';

class Store {
    constructor () {
        this.bindActions(Actions);

        this.submitStatus = 'WAITING_USER';
    }

    onSubmitingContact () {
        this.submitStatus = 'SENDING';
    }

    onSubmitedContact () {
        this.submitStatus = 'DONE';
    }

    onSubmitContactFail () {
        this.submitStatus = 'FAILED';
    }

    onSubmitReset () {
        this.submitStatus = 'WAITING_USER';
    }
}

export default alt.createStore(Store, 'Store');
