class CustomLogger {
    static log(message) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[LOG]: ${message}`);
      }
    }
  
    static print(data){
        if (process.env.NODE_ENV === 'development') {
           console.log(`[LOG]: ${JSON.stringify(data, null, 2)}`); 
        }
    }

    // Log a debug message, only in development environment
    static debug(message) {
      if (process.env.NODE_ENV === 'development') {
        console.debug(`[DEBUG]: ${message}`);
      }
    }
  
    // Log a warning message
    static warn(message) {
      console.warn(`[WARN]: ${message}`);
    }
  
    // Log an error message
    static error(message) {
      console.error(`[ERROR]: ${message}`);
    }
  }
  
export default CustomLogger;  
// Usage way:
//   Logger.log('This is a general log message.');
//   Logger.debug('This is a debug message.');
//   Logger.warn('This is a warning message.');
//   Logger.error('This is an error message.');
  