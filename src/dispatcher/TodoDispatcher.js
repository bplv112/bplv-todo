import { Dispatcher } from 'flux';

class TodoDispatcher extends Dispatcher {
	previousPayload = {}

	dispatch = payload => {
		if (this._isDispatching) {
			console.log('Dispatched', payload, 'in the middle of', this.previousPayload);
		}

		this.previousPayload = payload;
		super.dispatch(payload);
	}
}

export default new TodoDispatcher();