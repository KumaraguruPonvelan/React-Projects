import React from "react";



function Projects() {
  return (

    <div className="skills">
      <h1> Projects</h1>
      <ol className="List">

        <li className="item">
          <h2>Mental Health Prediction using Machine Learning:  </h2>
          <span>Mental wellness of an individual is the state of mind of that person and also
            provides an indication of his/her general nature. Mental illness is an outcome of
            imbalances in brain chemistry. </span>
          <br></br>
          <span>Collected data from online available dataset, provided by an OSMI (Open Sourcing
            Mental Illness) survey. The dataset mainly consists of data of working individuals. It
            awareness about work related mental illness. We have applied machine learning
            algorithm to create a model. It has been implemented on a website for users to get
            knowledge about their mental illness. The webpage shows a probability and
            recommendation to the user based on the inputs provided.</span>
        </li>

        <li className="item">
          <h2>Frontend Projects: </h2>
          <span>Developed a Dynamic front end responsive Web development website to provide an
            Optimal User Experience across various devices, I have Updated the Git Hub link for
            reference. </span>
        </li>


      </ol>
    </div>
  );
}

export default Projects;