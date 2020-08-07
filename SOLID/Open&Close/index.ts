/**
 ** Should not add stuff to complete classes
 ** software หลััก ควรง่ายต่อการต่อยอด และ ไม่ควรถูกแก้ไข(ทำได้โดย extends)
 */

class ErrorHandler {
  private messageBox: any;
  constructor(messageBox: any) {
    this.messageBox = messageBox;
  }

  wrapError(err, publicRes, magnitude) {
    let error = {
      originalError: err,
      publicRes,
      magnitude,
    };
    if (magnitude < 5) {
      this.handleWarning("Warning", publicRes);
    } else {
      this.handleError("Critical Bug", publicRes);
    }
  }

  private handleWarning(strHeader, strRes) {
    this.messageBox.show(strHeader, strRes);
  }
  private handleError(strHeader, strRes) {
    this.messageBox.show(strHeader, strRes);
  }
}

class ErrorLogger {
  private _apiEndpoint: string = "api/v1/log";
  constructor(private _httpClient) {}
  toLogError(err): Promise<any> {
    return this._httpClient.post(this._apiEndpoint, err);
  }
}

export class ErrorHandlerLogging extends ErrorHandler {
  private _logger: ErrorLogger;
  constructor(messageBox, logger: ErrorLogger) {
    super(messageBox);
    this._logger = logger;
  }

  wrapError(err, publicRes, magnitude) {
    this._logger.toLogError(err).then(() => {
      super.wrapError(err, publicRes, magnitude);
    });
  }
}
