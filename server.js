const app = exress();

//cors allows us to give a response to a request from a different origin 
//than the server. When in prod turn off app.use(cors)comments.
//app.use(cors());