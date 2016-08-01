import alt from './alt';

class Actions {
    constructor () {
        this.generateActions(
            'submitingContact',
            'submitedContact',
            'submitContactFail',
            'submitReset'
        );
    }

    submitContact (formPayload) {
        this.actions.submitingContact();

        // Mock
        if (Math.random() > 0.7) {
            window.setTimeout(() => this.actions.submitedContact(), 750);
        } else {
            window.setTimeout(() => this.actions.submitContactFail(), 750);
        }

        /**
         * ajax
         * .then((res) => {
         *     this.actions.submitedContact();
         * })
         * .catch((err) => {
         *     this.actions.submitContactFail();
         * })
         */
    }
}

export default alt.createActions(Actions);
