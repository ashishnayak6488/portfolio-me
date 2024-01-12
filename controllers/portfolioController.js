const mongoose = require("mongoose");

const {
  Intro,
  About,
  Education,
  Project,
  Contact,
} = require("../model/portfolioModel");

const User = require('../model/userModel')

const getPortfolioData = async (req, res, next) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const educations = await Education.find();
    const projects = await Project.find();
    const contacts = await Contact.find();

    return res.status(200).json({
      intro: intros[0],
      about: abouts[0],
      educations: educations,
      projects: projects,
      contact: contacts[0],
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Update intro Section

const updateIntro = async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      data: intro,
      success: true,
      message: "Intro Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Update About Section

const updateAbout = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      data: about,
      success: true,
      message: "About Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Add Educations

const addEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();

    return res.status(200).json({
      data: education,
      success: true,
      message: "Educations Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Update Education Section

const updateEducation = async (req, res) => {
  try {
    const education = await Education.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      data: education,
      success: true,
      message: "Education Update Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete Education Section

const deleteEducation = async (req, res) => {
  try {
    const educations = await Education.findOneAndDelete({ _id: req.body._id });

    return res.status(200).json({
      data: educations,
      success: true,
      message: "Education Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Add Projects

const addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    return res.status(200).json({
      data: project,
      success: true,
      message: "Project Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Update Project Section

const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      data: project,
      success: true,
      message: "Project Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete Project Section

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.body._id });

    return res.status(200).json({
      data: project,
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//Update intro Section

const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      data: contact,
      success: true,
      message: "Contact Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//admin-login

const adminLogin = async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username , password: req.body.password});
    user.password = "";
    if (user) {
        return res.status(200).json({
          data: user,
          success: true,
          message: "Login Successfully",
        });
    }
    else{
      return res.status(404).json({
          data: user,
          success: false,
          message: "Invalid Username / Password",
        });
    }

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getPortfolioData,
  updateIntro,
  updateAbout,
  addEducation,
  updateEducation,
  deleteEducation,
  addProject,
  updateProject,
  deleteProject,
  updateContact,
  adminLogin
};
