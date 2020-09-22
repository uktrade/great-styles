import React from "react";

export default { title: "Pros and Cons" };

export const ProsAndCons = () => (
  <div className="m-s">
    <div className="box box--no-pointer pros-and-cons">
      <h3 className="h-l text-blue-deep-80 p-b-xs">Pros</h3>
      <ul className="list-arrow">
        <li>
          <i className="fas fa-angle-right"></i>
          <span>Your own bank may be more familiar with your business</span>
        </li>
        <li>
          <i className="fas fa-angle-right"></i>
          <span>Bank loans let you keep full control of your company</span>
        </li>
      </ul>
    </div>
  </div>
);
