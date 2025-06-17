import { request } from 'express';
import mealModel from '../Models/mealModel.js';
import todoModel from '../Models/models.js';
import workoutModel from '../Models/workoutModel.js';
import sendEmail from '../Utils/sendEmail.js';
import dotenv from 'dotenv';
dotenv.config();

export const findallWorkout=async(req) =>{
    console.log("PARAMS",req.params)
    const allWorkout= await workoutModel.find({username:req.query.username, date:req.query.date});
    console.log(allWorkout)
    return allWorkout;
};



export const addNewUser=async(req,res)=>{
    console.log(req.body)
    let userDuplicate = await todoModel.findOne({username:req.body.username});
    if(userDuplicate){
        let resp={loginstatus:"Already exists", username:userDuplicate.username}
        return resp;
    }
    const user = new todoModel(req.body);

    //send mail after signup
    const message = `
      <h2>Hello ${req.body.username}!</h2>
      <p>I hope you are doing well, Welcome to your fitness journey!!</p>

      <p>Regards,</p>
      <p>Prasad Deshpande<p>
      <p>Relationship Manager<p>
      <p>Web Team Celtics</p>
      <p>Email: webteamceltics@outlook.com</p>
    `;

    const subject = "Your Account has been created";
    const send_to = req.body.username;
    const sent_from = process.env.EMAIL_USER;

    //try-catch
    try {
        await sendEmail(subject, message, send_to, sent_from);
        (await user.save());
        //res.status(200).send({ success: true, message: "Sign UP Email Sent" });
        const response={ success: true, message: "Sign UP Email Sent", username: req.body.username }
        return response
        //(await user.save());
        //return (await user.save());
    } catch (error) {
        console.log("EEEE",error)
        //res.status(500);
        throw new Error("Email not sent, please try again");
    }
    //return (await user.save());
}

export const checkLogin=async(req)=>{
    console.log("ddsds"+req.body.username)
    let user = await todoModel.findOne({username:req.body.username, password:req.body.password}).exec();
    
    if(!user){
        const res={loginstatus:"Account doesn't exist"}
        return res
    }
    if(user.username==req.body.username && user.password==req.body.password){
       console.log("TRUUUUUUEEEE")
       let resp={loginstatus:"Sucessful", username:req.body.username}
        return resp
    }
    const loginFailureresp={loginstatus:"Failed", username:req.body.username}
    return loginFailureresp
}

export const addWorkout=async(req)=>{
    console.log(req.body)
    let workout = new workoutModel(req.body);
    return (await workout.save());
}

export const updateWorkout=async(req)=>{
    console.log(req.body)
         let workout = await workoutModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ).exec()
        console.log("aedfsdfsd",workout)
        return workout

        }

export const deleteWorkout= async(req,res)=>{
    try{
    let deletedWorkout= await workoutModel.findByIdAndDelete(req.params.id).exec();
    console.log("Deleteddddd",deletedWorkout)
    }
    catch(err){
        console.log("Error",err)
    }
   
}


// -----------------------------------------------------------------------


export const deleteMeal= async(req,res)=>{
    try{
    let deletedMeal= await mealModel.findByIdAndDelete(req.params.id).exec();
    console.log("Deleteddddd",deletedMeal)
    }
    catch(err){
        console.log("Error",err)
    }
}


export const updateMeal=async(req)=>{
    console.log(req.body)
         let meal = await mealModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ).exec()
        console.log("meal update",meal)
        return meal

        }


export const addMeal=async(req)=>{

        console.log("insde add meal")


        console.log(req.body)
        let meal = new mealModel(req.body);
        return (await meal.save());
        }


export const findallMeals=async(req) =>{
        console.log("PARAMS",req.params)
        const allMeals= await mealModel.find({username:req.query.username, date:req.query.date});
        console.log(allMeals)
        return allMeals;
                        };
                        














