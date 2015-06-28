# A Gentle Introduction to Machine Learning 

## Overview

### Introduction to the Introduction

The purpose of this workshop is to give you an broad, accurate, although somewhat cursory understanding of machine learning.

More particularly, it aims to help you understand and program some of the common algorithms used in machine learning.  It aims to guide you through what is involved in training these algorithms and verifying this training.  And it aims to do all this over the subfields of supervised machine learning, unsupervised machine learning, and reinforcement learning.

If none of that made any sense, that's ok.  Part of the point of the workshop is to explain these and other terms.  I'll introduce them slowly from now on.

Machine Learning is generally a very mathematical field, which can make it somewhat intimidating.  This introduction tries to lower that mathematical barrier by assuming only that the student has (1) a good understanding of Javascript and a (2) decently good knowledge of high school algebra.  I will explain some terms from linear algebra before introducing particular algorithms, but these are all quite easy to grasp.

Ok.  So what is machine learning?

### What is Machine Learning?

Let's contrast the process of coding and using a machine learning algorithm with the process of coding and using a non-machine-learning algorithm.

Suppose you wished to write a non-machine learning algorithm that could detect when an image has a face in it.  You might come up with an idea for a program that searches for symetrical dark spots in the image, with a brighter spot above them and two brighter spots below them--that is, two eyes beneath a forehead and above cheeks.  (This is the basis of facial detection with [Haar-like features](https://en.wikipedia.org/wiki/Haar-like_features).   You might try out the algorithm on some images, and tweak the settings to make it work better.  You could go back and forth between algorithm and data a few times.

But then, when you were satisfied with it, you could use the function in your program and you would be done.  If you had found the algorithm online, you could have just used it in your program without doing anything else.

The same task could be done by machine learning.  In this case, you'd also need to begin with an algorithm.  But instead of directly writing an algorithm that detects a face, you would write an algorithm that learns from experience.  After writing such an algorithm--or just choosing one from an ML (machine learning) library--you would then train it.  To train it, you would show it hundreds, or thousands, or millions of images with faces and images without faces, each correspondingly labelled as having or not having a face.  The algorithm would learn how to classify images as having or not having faces from this training data.  You would probably go back and forth between tweaking the algorithm and its settings and tweaking the training data.

Then, after writing the algorithm and training it, would you be able to use it in your program.  Even if you had found the algorithm online, you would still have needed to train it, unless you found an algorithm pre-trained to recognize faces.

So machine learning adds some stages to the process of going from nothing to a working product.  Non-ML algorithms are ready to go from the start, once the algorithm is done; ML algorithms nees to be trained before they can be used.

### A More Formal Definition of ML

Here's a widely quoted, more formal definition of machine learning:

> A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.

Or, to again put things more colloquially, a machine learning algorithm is an algorithm that gets better at doing something when you give it experience.

### Kinds of Machine Learning Algorithm

Machine learning has broad aplicablity.  It's used for computer vision, stock trading, self-driving cars, voice recognition, face recognition, bioengineering, and more.  So of course the field and the algorithms in it can be divided into further sub-categories.

The main way that machine learning algorithms are divided is by learning method.  To put this another way, the main way that ML algorithms are categorized according to the kind of experience they learn from.

There are other ways to categorize ML algorithms--according to their output, for instance.  But classification according to the kind of experience from which ML algorithms learn is probably the most fundamental.

When divided this way, there are three main categories of ML algorithm:
1. **Supervised Learning**
2. **Unsupervised Learning**
3. **Reinforcement Learning.**

Each of these categories presents distinct oportunities and challenges; the workshop will be built around implementing one of each of these.  So it's worth taking a little time to understand why they are distinct from each other.

### Supervised Learning

In supervised learning, the experience from which the algorithm learns is a set of paired example inputs and desired outputs.

The face-detection algorithm discussed above would be an example of supervised learning.  In it, the data that the algorithm trains on is a set of images together with a value indicating whether there is a face in the image or not.

Learning to recognize hand-written letters would be another example of supervised learning.  The training data in that case would be a set of images of individual hand-written characters, labelled with the correct character.  The algorithm would learn from this to correctly label new images of hand-written characters.  This is the problem we will work on in the first section of the workshop.

Both of the above are instances of machine learning that deals with *classification* problems.  In such problems, the input is some kind of data and the output is a label identifying that data as belonging to a particular type.  Supervised learning can also learn to solve *regression* problems.  A regression problem is one in which the desired output, instead of being a label, is a continuous value.

The recently-popular [Microsoft program](http://how-old.net/#) which tried to identify someone's age from a photo is an example of an attempt to solve a regression problem; the image is the input, and a continuous value is the output.  Another example might be a program that predicts stock prices from previous stock prices.  We won't be learning any regression algorithms, but it's important to know they exist.

K-nearest neighbors, support vector machines, naive Bayes, neural networks, and logistic regression are all very popular machine learning algorithms used for supervised learning problems.

### Unsupervised Learning

As the name indicates, the experience from which an algorithm learns in unsupervised learning is a set of example inputs--without any desired outputs attached to them.

The question that probably comes to mind is "What one can learn from an unlabeled set of data?"  It might seem impossible.  But it is nevetheless possible to learn to characterize the structure of such data in many interesting ways.

One thing one can do with unlabelled data is cluster analysis.  Supppose you were given a dataset with the heights, weights, shoe-sizes, 500m and 50m sprint times, and maximum bench-press weights of some college athletes.  You might find that there would be several different clusters of data points.  There might be a cluster of people who weighed more and had large bench-press weights, which might indicate the football players.  There might be another cluster of data around people with good 500m sprint times and lower weights, which indicates the track-and-field atheletes.  And so on and so forth.  Trying to count and locate such clusters can be very interesting, and is one of the things that unsupervised learning algorithms can do.

Suppose you were to feed a bunch of writing from an unknown alphabet (such as the supposed alphabet of the [Voynich manuscript](https://en.wikipedia.org/wiki/Voynich_manuscript)) into a supervised learning algorithm.  A good algorithm could figure out how many characters there were in the alphabet, and tell you what character belonged to each kind.

There are other things that can be done with unsupervised algorithms, but for now we'll stop at clustering.  K-means, principle component analysis, and neural networks can be used for unsupervised learning.

### Reinforcement Learning

Reinforcement learning is signficantly different from either supervised or unsupervised learning.

In reinforcement learning, the algorithm you write controls an agent inside some particular environment, which gets feedback in the form of a reward or punishment.  The agent then learns to act so as to maximize the reward it recieves.  Let me give an example from outside of machine learning to help you understand this.

Once some animal intelligence researchers decided to try to teach a group of dolphins to do [novel tricks](http://www.theguardian.com/science/2003/jul/03/research.science).  To do this, they began to reward dolphins with fish whenever the dolphin did some trick that they had not done before during the training session.  At first the dolphins recieved many fish, as they ran through their initial repertoir of tricks.  Then they slowed down, and seemed to get frustrated because they could not figure out what to do to receive a reward.  Finally, they seemed to hit on the idea--and immediately they began to do many things they had never done before, so they could get the reward.

The dolphins are like the agent controlled by your machine learning algorithm.  The fish are the like rewards the environment doles out.  The problem, then, is for your algorithm to figure out what actions and what sequences of actions will result in the greatest reward--even though the algorithm is never explicitly told this.  It may be the case that actions with a great short-term reward result in long-term losses, which is another difficulty with this kind of learning.  As in supervised learing, there's a notion of the environment telling you what is right and what is wrong; unlike in supervised learning, though, the signals for right and wrong aren't tied to any particular input or output.

Reinforcement learning is one of the most complex and interesting types of machine learning, so I'll save any further discussion of it utill the section devoted to it.  Temporal difference learning, dynamic programming, and Monte-Carlo techniques are different methods of reinforcement learning.

## Prelude: Linear Algebra

### Introduction

Machine learning often depends on linear algebra.  The following will give you an extremely basic, theoretically barren, coding-oriented overview of the linear algebra necessary to get through the next few lessons.

### Vectors -- Introduction

Think of a vector as a bunch of numbers that indicate a position or direction.  The easiest way to represent a vector in Javascript is as an array of numbers.

A one-dimensional vector would be a single number that indicates position or direction along a single dimension, like a number line.  In writing, you could indicate that variable was a single-dimensional vector by writing **A** ∈ R<sup>1</sup>.  This means simply that **A** is vector composed of one real number.  Switching to Javascript array notation: [5] would indicate a position 5 units to the right of the origin of a number line, or perhaps a velocity of [5] from anywhere within the number line; a vector of [-2] would indicate a position 2 units to the left, or perhaps a velocity of from anywhere on the number line [-2].

A three-dimensional vector, similarly, would indicate position or velocity in three dimensions, such as along an X, Y, and Z location.  In writing, you could indicate that the variable **B** was a three-dimensional vector by writing **B** ∈ R<sup>3</sup>.  Switching to Javascript, again: The vector [0,0,0] would indicate something at the center of the coordinate system, or something completely motionless.  The vector [0,5,2] would indicate something zero units along the x-axis, five units along the y-axis, and one unit along the z-axis, or something.  Or it could represent motion in the corresponding direction.

A three-dimensonal vector belongs in a three-dimensional space; a one-dimensional vector in a one-dimensional space; and, as we will see, an n-dimensional vector in an n-dimensional space.

### Vectors -- Positions and Directions

Vectors can be understood to represent (among other things) positions or velocities.

When thinking of them as indicating positions, it is natural to picture their base as sitting at the origin of the n-dimensional space, and their point at the location indicated by the vector itself.  On a two-dimensional plane, you could draw the vector [3,5] as an arrow reaching from [0,0] to [3,5].  This corresponds roughly with the way of thinking of vectors as positions.

Alternately, you could think of a vector as with its base at some other location, and it's point as stretching to a location elsewhere.  So you could draw the vector [3,5] as a line reaching from [10,10] to [13,15].  This corresponds more with the way of thinking of vectors as velocity.

Either way makes sense under different contexts--neither is more right than another.  For our purposes, though, vectors will generally be taken to siginify positions in n-dimensional space.

### Vectors -- In Higher Dimensions

Vectors can exist in four, ten, or a million dimensions; like vectors of smaller dimensionality, these can be thought of as indicating position in a higher-dimensional space.

This sometimes causes difficulty, because people think they need to try to visualize, or internally picture locations in a million-dimensional space.  This is, of course, impossible.

But we are related to mathematical objects rather as the medieval theologians said we were related to immaterial things: even if you cannot _picture_ them, you can still conceive of them and think about them.  Don't worry about trying to visualize a vector in a million-dimensional space.

All the _operations_ for vectors in a lower-dimensional space still apply to vectors in a higher-dimensional space, and so as long as you keep the operations straight you can still understand what is going on.  Whether you add, substract, find the norms for, or find hyperplanes defined by three, ten, or million dimensional vectors, all these operations are still defined the same way.

So what are those operations?

### Vector Addition

Vector addition allows you to add two vectors of equal dimensionality--that is, vectors that have the same number of numbers in them.  To do this you just add the first elements of each together, the second elements of each together, and so on, until you come up with a new vector composed of the sums of the corresponding elements of the first two.

Vector addition is not well-defined for vectors of different lengths -- it is meaningless to add a three-dimensional vector to a five-dimensional vector.

If we treat vectors as arrays of numbers, the following code adds two vectors.

    function vectorAdd(arrOne, arrTwo){
        return arrOne.map(function(_,index){return arrOne[index] + arrTwo[index]});
    }

Geometrically, adding vector **A** and vector **B** could be thought of as moving from the start of **A** to the end of **A**, then moving **B** units from the end of **A**.  [1,1] added to [2,5] makes [3,6], which is the same location you would end up at if you started at [0,0], moved [1,1] units, then moved another [2,5] units.

### Vector Substraction

Vector subtraction works pretty much the same way as vector addition.  When you subtract vector **A** from vector **B**, you make a vector whose first element is the first element of **B** less the first element of **A**, whose second element is the second element of **B** less the second element of **A**, and so on.  Again, subtraction is only well-defined for vectors of the same length.

Geometrically, this gives you a direction pointing from the position of the subtracted vector to the position of the vector substracted from.  So, for instance, if you subtract [3] from [1], you get the vector [-2], which points from [3] to [1].  If you subtract, say, [5,5] from [5,-5], then you get [0,-10], which points from [5,5] to [5,-5].

This code would subtract two vectors, again assuming we are representing vectors as arrays of numbers:

    function vectorSub(arrOne, arrTwo){
        return arrOne.map(function(_,index){return arrOne[index] - arrTwo[index]});
    }

### The Euclidean Norm

There are two more thing that you need to know about vectors before we can get to supervised learning.

The first is what the Euclidean norm of a vector is.

There are many different **norms** for measuring the length of vectors; a norm is generally speaking a function that assigns a positive length to any vector in any dimensionality.  Each norm takes a vector and returns a positive number.  The one that we'll use is called the **Euclidean Norm**.

To product the Euclidean norm for a vector, take the square root of the sums of the squares of the elements.

So, for the vector [3,4], the Euclidean Norm is [5]:

    Math.sqrt(3*3+4*4) //returns 5

This formula should be familiar to anyone who has done geometry.  The Euclidean Norm is also defined for arbitrarily-dimensioned vectors, however.  The following returns the Euclidean norm for [1,1,1,1]:

    Math.sqrt(1*1 + 1*1 + 1*1 + 1*1); //Returns two 
    
The following Javascript code would return the Euclidean norm for any vector passed in to it.

    function euclideanNorm(arr){
        return Math.sqrt( arr.reduce(function(old, n){return old + n*n },0) )
    }

### Distance

The second thing is to know how you can also use the Euclidean norm to find the distance between the points indicated by two vectors, in any dimensionality.

    function dist(vectorOne, vectorTwo){
        return euclideanNorm(vectorSub(vectorOne, vectorTwo));
    }
    
It should now be clear why you can do this.  Remember, this distance is well defined for vectors with an arbitrarily large dimensionality as well as vectors in "normal" two and three dimensional spaces.

## Supervised Learning

### Introduction

In supervised learning, you'll recall, the training data consists of possible inputs paired with the desired output for that input.  From this training data, the algorithm attempts to generalize so that it can predict the correct output when it recieves input it has not seen before.

More concretely, a supervised learning algorithm might recieve images with cats in them and other images without cats in them, labelled as having cats in them and not having cats in them.  And from this training data it should be able to figure out whether a new image that it has never seen before has a cat in it or not.

The input, in the algorithm that we will consider, will be a vector of arbitrary length, standing for a specific location in N-dimensional space.  (This is a farily standard way of representing input to a ML algorithm.)  The output will be a number, indicating a classification.  

### K-Nearest-Neighbors

K-nearest neighbors is the algorithm we will use to classify vectors of arbitrary length in N-dimensional space.

K-nearest neighbors is very simple.  The "k" in k-nearest-neighbors stands for an arbitrary constant such as 3 or 7, which will be set whenever the algorithm runs.  To explain how it works, I'll give an example of it in action.

Suppose that we want to be able to tell whether a particular student got into college on the strength of a football scholarship or a track-and-field scholarship from that student's weight and height.  To train an algorithm to determine this, we have gathered data for 100 athletes, each labelled by scholarship type and with weight and height information.  You could represent this in Javascript with an array like this:

    var trainingData = [
        [[220,72],0],
        [[160,69],1],
        [[250,74],0],
        [[150,65],1],
        ...
    ];
    
The first element of each element in the array is the vector giving the weight in pounds and the height in inches of the person in question; the second element is 0 if they are a football player and 1 if they are a track-and-field athlete.

Each column in a set of training data such as this is referred to as a **feature**.  There are two features in the above set of data; the first feature is given in pounds, and the second feature is given in inches.

Now, having been given this training data, I want to find out which class a new athlete belongs to.  I have his stats:

    var unknownAthlete = [230,70];

As the first step of the k-nearest-neighbors algorithm, I would find the distances between the point defined by this vector and the points defined by every vector in the training data.  To find the distance between the first training point and the point to be classified, first find the difference between the first pair of features (230-220) and square it.  Find the diffence between the second pair of features (70-72) and square it.  Add the two amounts, and find the square root; this is the distance between the first training point and the new point.  Do the same thing for all the other training points.

After finding the distance between the athlete we are trying to classify and all the training data for other atheletes, we could sort them from closest to furthest away.  And finally we could then look at the _k_ closest athletes.  We would then count up all the classifications among these _k_ nearest athletes.  The most common of these we would choose as the classification most likely for the athlete in question.

### K-Nearest-Neighbors, continued

Here's the algorithm, put a bit more--although still not very--formally:

1. When training the algorithm, the algorithm simply stores all of the training vectors it receives together with their classification.  It applies no processing to them at all.
2. On being given a point to classify, the algorithm finds the distance (the Euclidean norm) between that point and every one of the stored training points.
3. The algorithm then looks at the classification of the *k* closest training points.  It judges the point that it is attempting to classify to be of the class that is most common among these *k* nearest neighbors.

This algorithm is fairly simple, but can get surprisingly good results.

You may use this algorithm as a _binary classifier_--that is, as a classifier that chooses between only two different classes.  When doing this, it is common for people to use an odd number for the value of _k_.  This makes it impossible for there to be a tie.  When using the algorithm to classify more than two classes, you can make it choose randomly between tied classes or use some other ad-hoc measure to resolve conflict.

### Coding

If you look in the folder 001_knn, you'll find the test specs for k-nearest-neighbors as well as a mostly-empty file in which you can implement it.

Before testing, be sure to have npm installed in the top-level folder, and to have mocha installed globally.  Run "mocha knn_specs.js" from the command line to test it.  

There are more specific instructions and advice for how to complete it inside the specs.

You'll have a chance to see how well k-nearest neighbors does against some randomly-generated data.  And you'll also have a chance to see how well k-nearest neighbors does when trained against the MNIST data.  

Put briefly, the MNIST data is a collection of 60,000 labelled, 28 by 28 images of hand-written digits from 0 to 9.  Seeing how well an algorithm does against the MNIST data is a fairly standard way of testing out different supervised ML techniques.

I've already converted the MNIST data into a format easily accessible in Javascript: each image is represented as an array 724 numbers, each standing for a pixel in the image.  Each number has a value from 0 to 255, depending on whether the corresponding pixel is black or white in the MNIST data.

When you uncomment tests for the MNIST data, a sub-program will create a set of images in 001_knn; each will display the images that your knn algorithm classed as 0s, or as 1s, or as 2s, and so on.

### Problems with K-Nearest-Neighbors

There are a few problems with k-nearest neighbors as we've implemented it.

One problem is that the runtime for each prediction increases proportionately with the amount of training data put in.  This is really problematic. Generally speaking, runtime should be faster than training, but in k-nearest-neighbors training is nearly instantanious while runtime grows with the amount of training data.

Some algorithms get rid of unnecessary training points to try to mitigate this problem.  Read what Wikipedia has to say about the [Hart Algorithm](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm#Data_reduction) to see one algorithm that does this.

## Problems with K-Nearest Neighbors, continued

Another potential problem with k-nearest neighbors, as we've implemented it, has to do with data scaling.

In the example above with athletes, imagine if the heights of the athletes were given in miles rather than in inches.  If this were the case, then all of the heights would be very small--and so the amount that the heights contribute to the distances in KNN would be very small.  It will turn out that height is basically ignored entirely by KNN in such a case.

But we obviously don't want the results of the KNN algorithm to depend on the units of the data fed into it.  To avoid this problem, one thing you can do is **normalize** features.  When you normalize the data, you scale it so that the smallest value of any set of features is 0 and the greatest value of any set of features is 1, and ever other value for that feature is something in between.  This means that, no matter how much variance there is naturally in different parameters in the training data, each parameter in the training data will count equally.

### Extra Credit / Other Algorithms

1. Implement the Hart Alorithm in your KNN object.  More specifically, implement a function which, when run, will remove all superfluous data points given the current training data and current k-size in the algorithm.  When reading the Wikipedia summary, remember that different points will remain relevant for different k-numbers, so the algorithm has to take that into account.
2. Implement a normalize function in your KNN object.  When run, it should scale each feature in the training data so that the largest vector is 1 and the smallest is 0.

## Unsupervised Learning

### Introduction

In unsupervised learning, the training data for the ML algorithm is not paired with some kind of correct output.  The goal is to try to find structure in this data despite this lack.

One of the ways to try to find structure in data like this is to cluster it.  Suppose you had never seen an armadillo, a giraffe, or a manatee.  If I were to give you a thousand photos of these three animals, all mixed together without any labelling, you still would be able to tell that the photos were of three kinds of things.  You would also be able to group each with its kind.  Clustering ML algorithms aim to do this kind of thing.

The only kind of unsupervised learning we'll be doing is clustering.  Unsupervised learning algorithms can do things other than cluster, however.

For instance, others can do latent variable analysis. In latent variable analysis, the ML algorithm attempts to determine if features in the training data can be summarized as the result of other, unseen, and fewer features.  If so, then the values for each of the visible features should be equally well summarized by a set of values for other, invisible features.  This both allows one to find possible causal factors for the data and to decrease the dimensionality of the data.

### Introduction to Clustering

There are two distinct clustering tasks:

1. Given a particular number of clusters to find in a set of data, find where these clusters are located.  For instance, being told that there are three kinds of letters in a set of images of human writing, group these images into three groups.
2. Given a particular set of data, find how many clusters are contained in it.  For instance, being told there are some number of letters in a set of images of human writing, determine how many letters there are in it.

The second task usually involves the first; trying to find how many clusters are contained in a particular set of data would probable involve figuring out where these clusters are located.  The first is also the task we'll focus on, though.  So we'll start with k-means clustering, which is a method of solving the first task.

As an aside, you should note that the notion of "cluster" is vague.  The notion of what a "good" cluster is, is correspondingly vague; the task of counting how many clusters are in a given set of data is therefore also vague.  Suppose you had a data-set of 1000 hand-written characters: every character had been written either by Bob or Alice, and every character was either an "A" or a "D."  A's differ from D's in systematic ways--but the characters written by Bob probably differ from the characters written by Alice in systematic ways as well.  So should a clustering algorithm group the characters into two groups or into four?  It depends on the purpose of the algorithm; there is no universally right answer, only a right answer relative to a situation.  Such difficulties are one of the reasons that we're focussing on the first and not the second task.

### K-Means -- The Goal

The goal of k-means is to group the data, a set of n-dimensional vectors, into _k_ clusters that satisfy a particular property.

Each cluster is defined one n-dimensional vector--so there are k cluster-defining vectors.  Every point in the data belongs to the cluster-defining vector to which it is closest.  (If you're familiar with the concept of [Vornoi Cells](https://en.wikipedia.org/wiki/Voronoi_diagram), k-means partitions space into n-dimensional voronoi cells.)

As I mentioned, however, these cluster-defining vectors should be arranged to satisfy a particular property.

Informally, the _k_ cluster-defining vectors should be arranged so that they are very close to the data points in their cluster.  More formally, the cluster-defining vectors should be arranged to minimize the squared distance from each data point to the vector to which it belongs.  

Let me put all of that into one sentence: A set of data perfectly clustered according to k-means would have _k_ cluster-defining vectors placed such that the sum of the squared distances from each data point to the cluster-defining vector to which it belongs would be the smallest possible amount.

You'll note that this defines k-means in terms of a goal, however.  A goal is not the same as an algorithm.  What would be some means of _finding_ these cluster-defining vectors, or at least finding vectors close to them?

### K-Means -- Lloyd's Algorithm

It is common in machine learning to attempt to aproximate an idea solution with a more rough algorithm.

Lloyd's algorithm is a way to come to an aproximation of the above ideal solution.  It is by far the most common way of attempting to come to such an aproximation, though, to the extent that often it is simply called the k-means algorithm.

This is the basic idea behind the algorithm.

1. Randomly choose k cluster-defining vectors within the space of the data, where k is the pre-determined number of clusters whose centers must be found.  (One way of doing this is to choose random points from the training data as starting locations.)
2. Assign each data vector to the cluster-defining vector to which it is closest.
3. Shift each of the k cluster-defining vectors so they are located in the midpoint of the data assigned to them.  (A vector located at the average location of a set of other vectors is a "centroid."  So another way to say this is to shift each of the k vectors so it is at the centroid of the data that belongs to it.)
4. If none of the centroids shifted, or all of them shifted less than a particular amount, return those vectors as the cluster-defining vectors for the data.  Otherwise, go back to step 2 and repeat.

As stated, the vectors returned from the algorithm are known as "centroids."  In mathematics, a centroid occupies the average or mean position of all of the shapes around it in the region, just as the centroids above occupy the average or mean position of all the shapes to which they are closest.

This might be a bit difficult to understand.  If you would like a visual representation, [Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering#Standard_algorithm) has a useful visual explanation of this sequence.

### K-Means - Local Minima

When the centroids have stopped moving, then Lloyd's algorithm has completed.  However, this does not mean that the algorithm has found the clustering which best minimizes the sum of the squared distances.  Or, to put this another way -- Lloyd's algorithm does not always produce the goal k-means sets forth.  It produces an aproximation, and often a bad aproximation.

Consider a dataset that consists of eight points, portrayed like this in beautiful ASCII art:

    ..                                      ..
    
    ..                                      ..
    
Suppose two centroids randomly chosen were placed something like this.

    ..                  C                   ..
    
    ..                  C                   ..
    
As it happens, they will both remain in place when k-means runs.   The top centroid is closest to the top four points, and at their average location, just as the bottom centroid is closest to the bottom four points, and at their average location.  So Lloyd's algorithm will keep them in place, and return them as cluster-defining vectors for the data.

Even so, a better location for each centroid would clearly be as follows.

    ..                                      ..
    C                                       C
    ..                                      ..
    
The clustering here is much tighter.  The sum of the squared distances of each point to the centroid to which it belongs is much less.  Nevertheless, there is no guarantee the k-means algorithm will come to this globally best solution.

Generally speaking, a poor solution that an algorithm can get "stuck" at while attempting to make incremental improvements is called a **local minima** or **local maxima**.  It makes sense to call it local minima right now, because we're trying to minimize the sum of squared distances, but the two ideas are otherwise the same.

Here's another instance of k-means converging on a local minima.  The initial locations are on the left; the final convergence is on the right.  You will note that although there are four points, the four clusters converged on by k-means are by no means the best possible clusters.

![Local minima](https://en.wikipedia.org/wiki/K-means_clustering#/media/File:K-means_convergence_to_a_local_minimum.png)

### Local Minima, continued

The problems caused by local minima (or local maxima) are not unique to k-means or unsupervised learning.  They happen in every field of machine learning. 

Many algorithms work by slowly shifting their parameters towards a better solution.  Just as k-means shifts centroids from location to location in an attempt to minimize the sum of squared distances, other ML algorithms shift their parameters about in an attempt to minimize or maximize some other amount.  Sometimes, however, the algorithm finds itself with parameters such that any small shift makes the solution worse--even though this particular set of parameters is not the absolute best.  This is a local minima or maxima.

Here's an analogy for a local maxima.  Suppose you're trying to maximize the amount of money that you earn.  You could work harder at your current job, which is in retail.  You could read books on persuasion to maximize the amount of sales that you make.  You could work more hours.  But after you've done all these things, you might find that you still do not earn nearly as much as your friend, Bob, who is a software engineer.  If you wish to make more money, you might have to do more than small shifts; you might have to make a career change, and earn less than you currently do for a while.

Local minima or maxima in ML algorithms are like that.  These algorithms fail to find the best overall solution because they get stuck in acceptable local solutions, where any small change in an direction results in the situation becoming worse.  And because these algorithms work only by making small changes, they get stuck there.

Ways of dealing with local minima and maxima constitue an entire field.  Different ways are available depending on the algorithm in question.

One way to try to deal with local minima in k-means is to run Lloyd's algorithm several times; each time, start it with a different randomized set of centroids.  Each time you run it, save the solution.  After running it so many times, you could choose from these saved solutions the solution which has the smallest squared distance from the data points to the array.  This is likely not the globall best solution, but because it is the best of a sample, it is probably ok.

### Coding and Extra Credit

If you open the folder 002_kmeans, you'll see a spec file defining characteristics for k-means and an empty file in which to build the k-means constructor.

As before, the spec file can be run by typing "mocha kmeans_specs.js" at the command line.   More detailed instructions for what to do are included in the spec file itself.  You will need to read these.

When fully uncommented, the specs will also make images of the groups that the algorithm comes up with. 

There is also an extended extra-credit section to the spec file.  Feel free to try to do it, but don't be discouraged if you find it difficult.

### Problems

K-means will not locate clusters correctly in many cases.

Consider what happens in two dimensions, when there is an enormous circular set of data points, with a smaller, tighter, and also circular set of datapoints just a small distance from its edge, like a plannet skimming the surface of a red giant.  If you were to place one centroid in the center of the  small set, and another in the centroid in the center of the large set, the half-way point between them would be deep within the larger set of data.  So in such a case, k-means will classify a large part of the large set as belonging to the small set, erroneously.

To put the above paragraph more briefly, k-means always marks the border between centroids at the half-way mark.  Sometimes this does not reflect the actual borders between clusters.  This is problematic.

K-means also has difficult with any data which is not clustered roughly sphereically.  If data should cluster in a long narrow crescent, sweeping through 2d, 3d, or 784d space, k-means will not identify it as a single cluster, because clusters always consist in those points closer to a single centroid than to any other centroid.  So this,  too, is a significant problem with k-means.  Nonspherical clusters will result in many different elements being misclassified.

There are, of course, many other methods of clustering. DBSCAN, OPTICS, and hierarchical clustering are clustering methods.

## Reinforcement Learning

### Introduction

In supervised learning, the ML algorithm learns from input paired with the correct output.  From this it learns to output data after being given input that has not been so paired.

In unsupervised learning, the ML algorithm learns from data that lacks such a pairing.  From this it learns to characterize the structure of the data.

In reinforcement learning, the ML algorithm learns from interacting with an environment.  From this, it learns to act to maximize a reward signal from the environment.

This task is very different than either of the former two kinds of machine learning.  So we can approach the ideas involved in this gradually.

I'll start off, therefore, by describing the a simplified learning problem.  After explaining an algorithm that solves it, I'll move to the full reinforcement learning problem.

### N-Armed Bandit

Imagine a one-armed bandit: a casino-style gambling maching, with the spinning cherries and coins.

Suppose, though, that instead of having a single arm it has _n_ arms.  Each of these arms returns some some particular reward on average: the first arm, for instance, might average 5 on each pull, while the second arm might average 10, and so on.  Of course, each arm only returns these rewards on average: different individual pulls on the first arm might return 0, or 30, or 0.5, or some other number.

(Suppose also, contrary to fact, that it is possible to win a positive amount on average while playing the machine.)

You do not know what any arm averages when you start.  Your goal, however, is to maximize the reward you receive over some finite number of pulls--say, a thousand pulls.

If you knew which arm averaged the most, then you could simply use that arm each time to maximize your reward over time.  So you probably want to try to determine which arm returns the most on average.  Furthermore, the more sure you are about which arm gives the highest average reward, the more sure you can be that you are pulling the arm most likely to maximize your reward over time.

The only way to be sure about which arm gives the highest average reward, however, is to try each arm.  The only way to be very sure it to try each arm a great deal.  The more time you spend trying each arm, however, the less time you have to use whatever arm you currently judge best.  So the more time you take trying to be sure which arm is the best, the less time you have to pull the arm you currently judge to be best.

This is the explore / exploit tradeoff.  If you want to use the knowledge you have, you are generally giving up on a chance to gain new knowledge.  If you want to gain new knowledge, you are generally giving up a chance to use the knowledge you have.  It is fundamental to reinforcement learning, to the n-armed bandit problem, and many real-life problems.

A doctor who has several experimental treatments for a potentially-fatal disease, for instance, is faced with the same basic difficulty.  Will he use the most promising treatment from the start, and thereby risk the possibility that he is not using a much better treatment?  Or will he try many different treatments, and accept that many people will not get the treatment he currently judges best?

### ɛ-Greedy

There are many interesting ways of approaching the n-armed bandit problem and the explore / exploit tradeoff, but I'm going to focus on a very simple method called ɛ-greedy.  That's pronounced "epsilon-greedy."  (Epsilon is a Greek character typically used by mathematicians to indicate a small amount.)

The ɛ-greedy algorithm is a slightly more complex version of a simple greedy algorithm.  A greedy algorithm would simply maintain an estimate of which arm seems best, and always choose it.  It would estimate which arm is best by looking at the average of the amounts each arm has returned so far.

The ɛ-greedy algorithm does nearly the same thing, but with a few differences.  Here's the algorithm:

1. Initialize starting guesses for the average value of each of the _n_ arms of the n-armed bandit.
2a. With probability (1-ɛ), choose whatever arm you estimate to have the highest average value, or choose randomly among those which are tied for the highest average value.
2b. Otherwise, with probability ɛ, choose any of the  _n_ arms at random.
3. After either choice, update the average value for the arm that you picked.
4. Go back to 2, until you have run out of choices.

In short, ɛ-greedy algorithm is just like a greedy algorithm most of the time: with probability (1-ɛ), it simply chooses what currently appears to it to be best.  But some of the time, it will also choose a random action.  So it usually exploits, but with probability ɛ explores.

### Reinforcement Learning -- Introduction

The _n_ armed bandit is an example of a _non-associative_ learning problem.  It is non-associative because good and bad actions are not associated with any particular states.  A bad action is always bad, and a good action is always good.  The full reinforcment learning problem, however, is _associative_. There can be in different states, and actions that are good in some states might not be good in others.

In a full reinforcement learning problem, the thing learning and making decisions, which is controlled by the algorithm, is called the _agent_.  The thing it interacts with is called the _environment_.  Agent and environment interact over the course of a series of discrete time steps.  The series terminates when the training episode ends, although there are usually many training episodes.

(Reinforcement learning can be divided into both _episodic_ and _continous_ learning, but to simplify matters I'm going to act as if all learning took place in episodes.  Episodes are like games in chess; everything about the environment gets reset after an episode ends, although the agent can still retain knowledge that it has acquired from the episode of training.)

### Reinforcement Learning -- Terminology

As stated, agent and environment interact over a series of discrete times steps.  These are usually denominated by a lower-case 't'.

In each time step during the episode, the agent receives some representation of the environment's _state_.  This is usually indexed by the time-step that the agent recieves it, and so is called s<sub>t</sub>.  On the basis of this state, the agent selects an _action_ which is similarly denominated as a<sub>t</sub>.  One time step later, the agent recives a new state s<sub>t+1</sub> with reward r<sub>t+1</sub>; it decides to perform action a<sub>t+1</sub>, and so on.  The reward is always a single real number.  The goal of the agent, of course, is to maximize the reward received over time, not the reward recieved in any particular time-step.

Suppose our agent were a program meant to handle elevators in a building.  The state recieved by the agent could be a list of the up and down buttons currently depressed in all locations on all floors and of the floors on which each elevator currently rests.  The action selected by the agent could be lifting, lowering, or opening any elevator.  The reward would be some kind of signal inversely related to the wait-time at each elevator floor: it would be higher the shorted the wait each person experienced.  The agent would then aim to maximize the reward over time by lifting, lowering, or opening the elevators to minimize wait-time.

### Markov Property

Let me talk about state signals for a bit.

A state signal, s<sub>t</sub>, is said to satisfy the "Markov Property" when it compactly summarizes all relevant information from past states in the environment.

Let me give an example. Suppose I were to tell you the location of all the chess pieces on a board, and ask you what the best move was.  Any further information about all the previous locations of these pieces at earlier game-states would be superfluous--it would be unnecessary for determining what the best move is now.  So the state signal of the location of all the pieces of the board is Markov.

Similarly, the location, velocity, and spin of a cannonball is Markov--after you know all these things about it, any further information about its past location, velocity, or spin is irrelevant to predicting its future.

To put things in a mildly technical fashion, a state signal is Markov if the probability that s<sub>t+1</sub> = s' given s<sub>t</sub>, is the same as the probability that s<sub>t+1</sub> = s' given s<sub>t</sub> and any set of s<sub>t-1</sub>, s<sub>t-2</sub>... s<sub>t-n</sub>.

A number of learning algorithms are guaranteed to converge to the best possible solution, given that the state signal they work from satisfies the Markov property. In fact, many if not most real-life state signals do *not* satisfy the Markov Property; the problem we will solve does not have a state signal that does this.  But the algorithms that are guaranteed to work with a Markov state-signal nevertheless also often work very well with a state-signal that is not Markov.

One more thing about state signals.  If the state has continuous values, as the states will in the problem we'll be working with, then there are obviously an infinite number of different states possible.  There area a few ways of dealing with this: We'll round each continuous value to a discrete value, so that there are a finite rather than infinite number of different states possible.

### Policies

There are a few more terminological and conceptual things we need to get over before we can get to the algorithm.

A _policy_ is a mapping from every possible state to an action or actions.  Every agent needs to have a policy, because every agent needs to be able to decide what to do on being given any particular state.  A policy is usually denominated by the character 𝜋.

Policies can be either _stochastic_ or _determinate_.  A determinate policy alwasy returns the same action on being given the same state. One writes a determinate policy as a function taking a single state, 𝜋(s), whichthen returns some action a.  On the other hand, a stochastic policy will sometimes return some action from a state and sometimes retun some other action.  One can write a stochastic policy as a function taking two variables, 𝜋(s,a), which returns the probability that the policy will indicate action a on being given state s.

This may sound somewhat complex, but is really very simple.  When we say a professor has a policy of penalizing five points for every day a paper is late, we're informally indicating how 𝜋(s) maps onto a set of actions for the professor.

### Action-Value Functions

Some policies can clearly be better than others.  The policy of waking up when your alarm goes off is better, at least so far as rewards recieved from one's employer, than the policy of hitting snooze two dozen times.  More formally, one policy is better than another if following the better policy from any state results rewards in greater or equal to those which occur from following the worse policy.

Each state has a different expected value, then, beneath different policies.  Similarly, taking a particular action from a particular state will have a different expected value beneath different policies.  This later quantity is the quantity with which we'll be concerned in this.





