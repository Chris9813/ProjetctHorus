import React from "react";
import "../css/ToolBar.css"
export const ToolBarGridView = () => {
  return(
  
<div className="toolBarGridView">
  <div className="container">

     <div className="row align-items-center">

     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7">

       <div className="row ">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
              <div className="search-controller">
                <button className="search-btn">
                <i class="fa-solid fa-folder-tree"></i>
                </button>
                <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{color:"#9c9c9f"}}
                      >
                        Ordenar 
                      </a>
                      <div className="divider"></div>    
            </div>  
          </div>

      <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
        <div className="search-controller">
            <button className="search-btn">
            <i class="fa-solid fa-folder-plus"></i>
            </button>
            <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:"#9c9c9f"}}
                  >
                     Nuevo 
                  </a>
                  <div className="divider"></div>    
        </div>  
      </div>

      <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
        <div className="search-controller">
            <button className="search-btn">
            <i class="fa-solid fa-copy"></i>
            </button>
            <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:"#9c9c9f"}}
                  >
                    Mover a
                  </a>
                  <div className="divider"></div>    
        </div>  
      </div>

      <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
        <div className="search-controller">
            <button className="search-btn">
            <i class="fa-solid fa-arrow-up-long"></i>
            </button>
            <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:"#9c9c9f"}}
                  >
                    XXXX
                  </a>
                  <div className="divider"></div>    
        </div>  
      </div>


      <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
        <div className="search-controller">
            <button className="search-btn">
            <i class="fa-solid fa-wrench"></i>
            </button>
            <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:"#9c9c9f"}}
                  >
                    Ajustes
                  </a>
                  
        </div>  
      </div>
          
       </div>

      </div>

      <div className="col-xs-12 col-sm-12  col-md-12 col-lg-5 ">

        <div className="items row justify-content-end align-items-center">
         <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3">
         <div className="search-controller">
            <button className="search-btn">
            <i class="fa-solid fa-arrows-rotate"></i>
            </button>
            <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:"#9c9c9f"}}
                  >
                     Refresh
                  </a>
                  <div className="divider"></div>    
            </div> 
            </div>

            <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3">
         <div className="search-controller">
            <button className="search-btn">
            <i class="fa-solid fa-filter"></i>
            </button>
            <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{color:"#9c9c9f"}}
                  >
                     Filtro
                  </a>
                  <div className="divider"></div>    
            </div> 
            </div>


            <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3">
         <div className="search-controller">
            <button className="search-btn">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
       
                 
            </div> 
            </div>

          </div>
          </div>
        </div>
        </div>
      </div>
 
  
  );
};
