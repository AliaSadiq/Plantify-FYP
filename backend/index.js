const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

// Load environment variables
dotenv.config();

// Routes
const socialgroupRouter = require("./routes/socialgroup.route.js");
const campaignRoute = require("./routes/campaign.route.js");
const userRoute = require("./routes/user.route.js");
const testimonialRoute = require("./routes/testimonial.route.js");
const campaignCommentRoute = require("./routes/campaign-comment.route.js");
const userMessageRoute = require("./routes/user-message.route.js");
const campaignReportRoute = require("./routes/campaign-report.route.js");
const sellerRoute = require("./routes/seller.route.js");
const donationRoutes = require('./routes/donation.route.js');
const reviewRoutes = require("./routes/social-review.route.js");
const requestCampaignRoute = require("./routes/campaign-request.route.js");
const questionRoutes=require("./routes/social-question.route.js");
const teamroute=require("./routes/team.route.js");

const app = express();


// Rate limiting
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour."
});
app.use('/api/user', limiter);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
  {
    origin:["https://plantify-fyp.vercel.app/"],
    methods:["POST","GET","PUT","DELETE"],
    credentials: true
  }
));
app.get("/",(req,res) => {
  res.json("Hi hello");
})
// Routes
app.use("/api/campaigns", campaignRoute);
app.use("/api/socialgroup", socialgroupRouter);
app.use("/api/user", userRoute);
app.use("/api/testimonial", testimonialRoute);
app.use("/api/campaign-comment", campaignCommentRoute);
app.use("/api/user-message", userMessageRoute);
app.use("/api/campaign-report", campaignReportRoute);
app.use("/api/donations", donationRoutes);
app.use("/api/request-campaign", requestCampaignRoute);
app.use("/api/sellers", sellerRoute);
app.use("/api/socialgroup-review", reviewRoutes);
app.use("/api/socialgroup-question", questionRoutes);
app.use("/api/socialteams", teamroute);

// MongoDB connection using environment variable
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });
  
 
  
