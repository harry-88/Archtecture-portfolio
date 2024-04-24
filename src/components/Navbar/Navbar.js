import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <header>
        <div class="navContainer">
          <input type="checkbox" name="check" id="check" />
          <div class="logo-container">
            <h3 class="logo">
              M.<span>Fraz</span>
            </h3>
          </div>

          <div class="nav-btn">
            <div class="nav-links">
              <ul>
                <li class="nav-link">
                  <Link href={"/"}>Home</Link>
                </li>
                <li class="nav-link">
                  <a href="#">
                    Services<i class="fas fa-caret-down"></i>
                  </a>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <Link href={"/planning"}>Planning</Link>
                        {/* <a href="#">Planning</a> */}
                      </li>
                      <li class="dropdown-link">
                        <Link href={"/visualization"}>3D Visualization</Link>
                      </li>
                      <li class="dropdown-link">
                        <Link href={"/animation"}>Animation</Link>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <a href="#">
                    Projects<i class="fas fa-caret-down"></i>
                  </a>
                  <div class="dropdown">
                    <ul>
                      <li class="dropdown-link">
                        <a href="#">
                          Architecture<i class="fas fa-caret-down"></i>
                        </a>
                        <div class="dropdown second">
                          <ul>
                            <li class="dropdown-link">
                              <a href="#">Plans</a>
                            </li>
                            <li class="dropdown-link">
                              <a href="#">Elevation</a>
                            </li>
                            <div class="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      <li class="dropdown-link">
                        <a href="#">
                          Interior Designing<i class="fas fa-caret-down"></i>
                        </a>
                        <div class="dropdown second">
                          <ul>
                            <li class="dropdown-link">
                              <a href="#">APARTMENT</a>
                            </li>
                            <li class="dropdown-link">
                              <a href="#">COMMERCIAL</a>
                            </li>
                            <li class="dropdown-link">
                              <a href="#">RESDENTIAL</a>
                            </li>
                            <div class="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      <div class="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li class="nav-link">
                  <Link href={"/contact-us"}>Contact Me</Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="hamburger-menu-container">
            <div class="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div class="overlay"></div>
      </section>
    </div>
  );
}
