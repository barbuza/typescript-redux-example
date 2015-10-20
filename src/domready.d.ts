declare module DomReady {

  function domready(callback: () => void): void;

}

declare module 'domready' {

  export default DomReady.domready;

}
