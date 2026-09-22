//Instagram datatypes · JS
// ============================================
// JavaScript Data Types — Instagram Example
// Run: node instagram-datatypes.js
// ============================================
 
// ---------- 1. PRIMITIVE TYPES (7) ----------
 
// String → username, bio, caption
//let username = "rohan.codes";
//let bio = "Full-stack dev | Trainer";
 
// Number → followers, likes (integers and decimals are both "number")
/*let followers = 12500;
let engagementRate = 4.7;
 
// BigInt → huge counts beyond Number.MAX_SAFE_INTEGER (2^53 - 1)
let totalPlatformViews = 98765432109876543210n;
 
// Boolean → verified badge, private account
let isVerified = true;
let isPrivate = false;
 
// Undefined → declared but not assigned (location not tagged yet)
let location;
 
// Null → intentionally empty (profile picture removed)
let profilePic = null;
 
// Symbol → unique ID, never equal to another Symbol
let postId = Symbol("post");
let anotherPostId = Symbol("post");
 
// ---------- 2. NON-PRIMITIVE TYPE: OBJECT ----------
 
// Object → complete user profile
const profile = {
  username: username,
  bio: bio,
  followers: followers,
  isVerified: isVerified,
  profilePic: profilePic,
};
 
// Array (special object) → list of posts / hashtags
const hashtags = ["#javascript", "#mern", "#webdev"];
 
// Array of objects → comments on a post
const comments = [
  { user: "dev_anu", text: "🔥🔥" },
  { user: "code_kiran", text: "Great explanation!" },
];
 
// Function (callable object) → like a post
function likePost(post) {
  post.likes++;
  post.isLiked = true;
  return `${post.author}'s post now has ${post.likes} likes`;
}
 
// Object combining everything → a single post
const post = {
  id: postId,                  // Symbol
  author: username,            // String
  caption: "Learning JS data types 🚀",
  likes: 1520,                 // Number
  views: 2500000000000000000n, // BigInt
  isLiked: false,              // Boolean
  location: location,          // Undefined
  filter: null,                // Null
  hashtags: hashtags,          // Array
  comments: comments,          // Array of objects
  postedAt: new Date(),        // Date (object)
};
 
// ---------- 3. CHECK TYPES WITH typeof ----------
 
console.log("===== typeof results =====");
console.log("username      :", typeof username);          // string
console.log("followers     :", typeof followers);         // number
console.log("engagementRate:", typeof engagementRate);    // number
console.log("platformViews :", typeof totalPlatformViews);// bigint
console.log("isVerified    :", typeof isVerified);        // boolean
console.log("location      :", typeof location);          // undefined
console.log("profilePic    :", typeof profilePic);        // object  ← known JS quirk
console.log("postId        :", typeof postId);            // symbol
console.log("profile       :", typeof profile);           // object
console.log("hashtags      :", typeof hashtags);          // object
console.log("likePost      :", typeof likePost);          // function
console.log("postedAt      :", typeof post.postedAt);     // object
 
// ---------- 4. CORRECT CHECKS FOR TRICKY CASES ----------
 
console.log("\n===== Accurate checks =====");
console.log("Is profilePic null?  ", profilePic === null);           // true
console.log("Is hashtags an array?", Array.isArray(hashtags));       // true
console.log("Is postedAt a Date?  ", post.postedAt instanceof Date); // true
console.log("Symbols unique?      ", postId !== anotherPostId);      // true
 
// ---------- 5. USING THE DATA ----------
 
console.log("\n===== Post details =====");
console.log(`@${post.author}${isVerified ? " ✔" : ""}`);
console.log(`Caption  : ${post.caption}`);
console.log(`Hashtags : ${post.hashtags.join(" ")}`);
console.log(`Location : ${post.location ?? "Not tagged"}`);
console.log(`Filter   : ${post.filter ?? "No filter"}`);
console.log(`Views    : ${post.views.toString()}`);
console.log(likePost(post));
post.comments.forEach((c) => console.log(`  ${c.user}: ${c.text}`));
 
// ---------- 6. PRIMITIVE vs REFERENCE ----------
 
console.log("\n===== Primitive vs Reference =====");
 
// Primitive → copied by VALUE (like a screenshot)
let likesCopy = post.likes;
likesCopy = 9999;
console.log("Original likes:", post.likes);   // unchanged
console.log("Copied likes  :", likesCopy);
 
// Reference → copied by REFERENCE (like sharing a post link)
let sharedPost = post;
sharedPost.caption = "Caption edited via shared link";
console.log("Original caption:", post.caption); // changed!
 
// Spread creates an independent (shallow) copy
let repost = { ...post, caption: "Reposted!" };
//console.log("Repost caption  :", repost.caption);
//console.log("Original caption:", post.caption); // unchanged by repost*/

/*let email="harikaakkem2006@gmail.com"
let password="harika"
let isvalidemail=email.includes('@')
let isvalidpassword=password.length>=8
let validuser=isvalidemail && isvalidpassword
console.log(validuser)*/
console.log(5&&7&&false&&33)