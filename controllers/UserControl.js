const User = require("../models/UserModel");
module.exports.addToLikedMovies = async (req, res) => {
  console.log("add route");
  try {
    const { email, data } = req.body;
    console.log({ email, data });
    let resData;
    const user = await User.findOne({ email });
    console.log("user", user);
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id == data.id);
      if (!movieAlreadyLiked) {
        resData = await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data],
          },
          { new: true }
        );
      } else
        return res.json({ msg: "Movie already in list", resData: resData });
    } else {
      resData = await User.create({ email, likedMovies: [data] });
    }
    return res.json({ msg: "Movie added succesfully", resData: resData });
  } catch (error) {
    return res.json({ msg: "error adding movie" });
  }
};

module.exports.getLikedMovies=async(req,res)=>{
  try{
    const{email}=req.params;
    const user= await user.findOne({email});
    if(user){
      return res.json({msg:"succes",movies:user.likedMovies});

    }else return res.json({msg:"user not found"});

  }catch(err){
    return res.json({msg:"error adding movies"});

  }
}