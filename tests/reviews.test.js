const reviews = require("../reviews");

test("there are 50,000 reviews", () => {
  expect(reviews.length).toBe(50000);
});

test("the first review has a text prop and a sentiment prop", () => {
  expect(reviews[0].t !== null && reviews[0].s !== null).toBe(true);
});

test("there are 25,000 positive reviews", () => {
  const positive = reviews.filter(review => review.s === 1);
  expect(positive.length).toBe(25000);
});

test("there are 25,000 negative reviews", () => {
  const negative = reviews.filter(review => review.s === 0);
  expect(negative.length).toBe(25000);
});
