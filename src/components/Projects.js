import React from "react";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {/* Project 1 */}
      <h3>1. User Management System React</h3>
      <p>
        A responsive user management application built using React
        that allows users to add, edit, delete, and manage user data efficiently.
      </p>
      <p><b>Tech:</b> React, CSS, JavaScript</p>
      <p>
        <a href="https://github.com/AkankshaDhamak">GitHub</a> 
      </p>
      <hr />

      {/* Project 2 */}
      <h3>2. User Management System</h3>
      <p>
        A web-based user management system designed to perform
        CRUD operations and maintain user records effectively.
      </p>
      <p><b>Tech:</b> HTML, CSS, JavaScript,Angular</p>
    <p>
        <a href="https://github.com/AkankshaDhamak">GitHub</a> 
      </p>

      <hr />

      {/* Project 3 */}
      <h3>3. Course Management System</h3>
      <p>
        A course management platform that helps manage course details,
        student information, and course-related operations.
      </p>
      <p><b>Tech:</b> React, Node.js, Express, MongoDB</p>
      <p>
        <a href="https://github.com/AkankshaDhamak">GitHub</a> 
      </p>

    </section>
  );
}

export default Projects;