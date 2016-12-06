import ReactiveStore from './ReactiveStore';
import { extendObservable, computed } from 'mobx';
import * as Schema from './Schema';

let AppStore = new ReactiveStore<Schema.AppStore>();

extendObservable(AppStore.getState(), {
	currentVideoId: null,
	currentIndex: 0,
	redditVideos: []
});

(window as any).AppStore = AppStore;
export default AppStore;