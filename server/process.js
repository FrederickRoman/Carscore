const Process = {
    processUncaughtExceptionHandler(error) {
        console.log('uncaughtException: ', error);
        process.exit(1);
    },
    processUnhandledRejection(error, promise) {
        console.log('unhandledRejection of promise: ', promise);
        console.log('error: ', error);
    },
    monitor() {
        process
            .on('uncaughtException', this.processUncaughtExceptionHandler)
            .on('unhandledRejection', this.processUnhandledRejection);
    }
}

module.exports = Process;