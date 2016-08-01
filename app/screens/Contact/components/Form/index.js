import React from 'react';
import Actions from 'app/flux/Actions';

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    Actions.submitContact({foo: 'bar'});
};

const handleClickNewContact = (evt) => {
    evt.preventDefault();
    Actions.submitReset();
};

const handleClickTryAgain = (evt) => {
    evt.preventDefault();
    Actions.submitContact({foo: 'bar'});
};

export default ({status, children}) => {
    switch (status) {
        case 'SENDING':
            return (
                <div className="alert alert-info">
                    Sending contact...
                </div>
            );

        case 'DONE':
            return (
                <div className="alert alert-success">
                    Contact sent successfully, <a href="#" className="alert-link" onClick={handleClickNewContact}>cadastrar novo contato</a>.
                </div>
            );

        case 'FAILED':
            return (
                <div className="alert alert-danger">
                    Failed to register contact. <a href="#" className="alert-link" onClick={handleClickTryAgain}>Tentar novamente</a>.
                </div>
            );
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {children}
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
};
