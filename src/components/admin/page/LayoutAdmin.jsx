import React from 'react'
function LayoutAdmin() {
  return (
    <>
      <div className="nav-header">
        <a href="#" className="brand-logo">
          CGV
        </a>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
      <div className="deznav">
        <div className="deznav-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <a className=" ai-icon" href="/admin" aria-expanded="false">
                <i className="fa-solid fa-users" />
                <span className="nav-text">Customer</span>
              </a>
            </li>
            <li>
              <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                <i className="fa-solid fa-people-roof" />
                <span className="nav-text">Cinemas </span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="/admin/add-cinema">Add Cinema</a>
                </li>
                <li>
                  <a href="/admin/list-cinema">All Cinemas</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                <i className="fa-solid fa-person-booth" />
                <span className="nav-text">Theaters </span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="/admin/add-theater">Add Theater</a>
                </li>
                <li>
                  <a href="/admin/list-theater">All Theaters</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                <i className="fa-solid fa-clapperboard" />
                <span className="nav-text">Movie</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="/admin/add-movie">Add movie</a>
                </li>
                <li>
                  <a href="/admin/list-movie">All movie</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow ai-icon" href="#" aria-expanded="false">
                <i className="fa-solid fa-clipboard-list" />
                <span className="nav-text">Schedules </span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="/admin/add-schedule">Add Schedule</a>
                </li>
                <li>
                  <a href="/admin/list-schedule">All Schedules</a>
                </li>
              </ul>
            </li>
            <div className="copyright">
              <p>
                Tixia Ticketing Admin Dashboard <br />© 2022 All Rights Reserved
              </p>
              <p className="op5">
                Made with <span className="heart" /> by DexignZone
              </p>
            </div>
          </ul>
        </div>
      </div>
    </>

  )
}

export default LayoutAdmin;