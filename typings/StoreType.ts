interface StoreObserverData {
  callback: Function;
  bindObj: Object;
}

enum StoreChannelType {
  ADD_TODOITEM = 'ADD_TODOITEM',
  DELETE_TODOITEM = 'DELETE_TODOITEM'
}

export { StoreChannelType, StoreObserverData };
