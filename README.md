# IMDB Data

[![Build Status](https://travis-ci.org/nas5w/imdb-data.svg?branch=master)](https://travis-ci.org/nas5w/imdb-data)

This is the ubiquitous "Large Movie Review Dataset" from Stanford University in `json` format. A discussion of the dataset can be found [here](http://ai.stanford.edu/~amaas/data/sentiment/). The dataset is comprised of 50,000 movie reviews from IMDb.

This version of the dataset differs slightly from the source data. Rather than being pre-split into test and training data, this dataset simply presents all records. The records are evenly split between positive and negative sentiment.

## Usage

You can install the dataset using npm. This will download the **63.3 MB** data file.

```bash
npm i imdb-data
```

Next, require the data in your project.

```javascript
const reviews = require("imdb-data");
```

You can check to see that there are 50,000 reviews.

```javascript
console.log(reviews.length);
// 50000
```

## Data Structure

Each element in the `reviews` array contains a text property `t` and a sentiment property `s`. we can see this in the first element of the array:

```javascript
console.log(reviews[0]);
```

```
{
    t: 'Once again Mr. Costner has dragged out a movie for far longer than necessary. Aside from the terrific sea rescue sequences, of which there are very few I just did not care about any of the characters. Most of us have ghosts in the closet, and Costner's character are realized early on, and then forgotten until much later, by which time I did not care. The character we should really care about is a very cocky, overconfident Ashton Kutcher. The problem is he comes off as kid whothinks he's better than anyone else around him and shows no signs of a cluttered closet. His only obstacle appears to be winning over Costner. Finally when we are well past the half way point of this stinker, Costner tells us all about Kutcher's ghosts. We are told why Kutcher is driven to be the best with no prior inkling or foreshadowing. No magic here, it was all I could do to keep from turning it off an hour in.',
    s: 0
}
```

A sentiment of `1` indicates a positive review whereas a sentiment of `0` indicates a negative review.
