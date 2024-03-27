class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    //    As for success status code is less than 400
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
