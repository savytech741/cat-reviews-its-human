// Entry for make.fun bounty "Make the AI Judge Laugh: Cat Reviews Its Human"
// A one-star review, written by a house cat about the human it lives with.
// Rules for the entry: a single line, under 200 characters, deadpan shape
// of a real review, with a complaint only a cat would make.
const MAX_LENGTH = 200;

function catReview(): string {
  return "One star. He wakes me at 3am to ask why I'm awake at 3am, then goes back to sleep like he didn't start it. I live here. He is the guest.";
}

const review = catReview();

// The bounty requires one single line under 200 characters.
if (review.includes("\n") || review.length >= MAX_LENGTH) {
  throw new Error(
    `Review must be a single line under ${MAX_LENGTH} characters (got ${review.length}).`,
  );
}

console.log(review);
