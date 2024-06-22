class ApiError extends Error {
  public readonly statusCode: number;
  public readonly internalCode: number;

  constructor(message: string, statusCode: number, internalErrorCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.internalCode = internalErrorCode;
  }
}

export { ApiError };
