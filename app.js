const express = require("express");
const app = express();

const { mean, median, mode } = require("./functions");
const ExpressError = require("./errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:functionName", function (request, response, next) {
  try {
    let functionName = request.params.functionName;
    console.log(functionName);
    let nums = [];
    let queries = request.query.numbers;
    let queriesNoComma = queries.split(",");
    for (let n of queriesNoComma) {
      if (isNaN(Number(n))) {
        throw new ExpressError(`${n} is not a number`, 400);
      } else if (!queries) {
        throw new ExpressError("nums are required", 400);
      } else {
        nums.push(Number(n));
      }
    }
    let result = eval(functionName)(...nums);
    return response.json({
      operation: "mean",
      value: result,
    });
  } catch (e) {
    next(e);
  }
});

app.use(function (request, response, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return notFoundError;
});

app.use(function (error, request, response, next) {
  let status = error.status || 500;
  let message = error.message;

  return response.status(status).json({ error: { message, status } });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
