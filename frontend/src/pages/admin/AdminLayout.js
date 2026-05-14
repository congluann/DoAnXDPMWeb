import React from "react";
import { Outlet } from "react-router-dom";
const AdminLayout = ({ children }) => {
  return (
    <div className="wrapper">

      {/* Preloader */}
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>

      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">

        <ul className="navbar-nav">
          <li className="nav-item">

            {/* FIX: button thay vì <a href="#"> */}
            <button
              className="nav-link btn btn-link"
              data-widget="pushmenu"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>

          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">Home</a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">

          <li className="nav-item">

            <button
              className="nav-link btn btn-link"
              data-widget="fullscreen"
              type="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </button>

          </li>

          <li className="nav-item">

            <button
              className="nav-link btn btn-link"
              data-widget="control-sidebar"
              type="button"
            >
              <i className="fas fa-th-large"></i>
            </button>

          </li>

        </ul>
      </nav>

      {/* Sidebar */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">

        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light">
            Xin chào user
          </span>
        </a>

        <div className="sidebar">

          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/dist/img/6830003119dfe.png"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>

            <div className="info">
              <span className="d-block text-white">
                Công Ty T2
              </span>
            </div>
          </div>

          {/* Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">

              <li className="nav-item menu-open">
                <span className="nav-link active">
                  <p>
                    CHỨC NĂNG
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </span>

                <ul className="nav nav-treeview">

                  <li className="nav-item">
                    <a href="/admin/category" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Category</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/admin/product" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Product</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/admin/blog" className="nav-link">
                      <i className="nav-icon fas fa-blog"></i>
                      <p>Blog</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/admin/about" className="nav-link">
                      <i className="nav-icon fas fa-info-circle"></i>
                      <p>About</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/admin/contact" className="nav-link">
                      <i className="nav-icon fas fa-envelope"></i>
                      <p>Contact</p>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="/logout" className="nav-link text-danger">
                      <i className="nav-icon fas fa-sign-out-alt"></i>
                      <p>Logout</p>
                    </a>
                  </li>

                </ul>
              </li>

            </ul>
          </nav>

        </div>
      </aside>

      {/* Content */}
      <div className="content-wrapper">
       <section className="content">
  <Outlet />
</section>
      </div>

    </div>
  );
};

export default AdminLayout;