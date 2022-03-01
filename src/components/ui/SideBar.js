import React , {useState, useEffect}from "react";

const SideBar = (props) => {

  const [inactive ,setInactive]= useState(false);
  useEffect(() => {
    if(inactive){
        document.querySelectorAll('.toolBarGridView').forEach(el =>
            {
            el.classList.remove("active");
            })
    }
}, [inactive])
  return (
    
    <div className={`side-menu ${inactive ? 'inactive': ''}`} style={{ backgroundColor: "#efeeed" }} 
    onClick={()=>{
      setInactive(!inactive);
      
   }}>
      <aside className="w-25">
        <h1 className="h1-sidebar">
          File<span>Station</span>
        </h1>
        <div  className="divizor">
          <div className="mt-5 mx-4">
            <div className="d-flex flex-row">
              <i className="icon far fa-folder ms-1 "></i>
              <h2 className="mt-1 ">Horus+</h2>
            </div>
            <hr />

            <div className="d-flex flex-row">
              <i className="icon fas fa-star me-1"></i>
              <h2 className="mt-1">Favoritos</h2>
            </div>
            <hr />

            <div className="d-flex flex-row">
              <i className="icon fas fa-user-friends"></i>
              <h2 className="mt-1">Compartido</h2>
            </div>
            <hr />

            <div className="d-flex flex-row">
              <i className="icon fas fa-trash-alt me-1 ms-2"></i>
              <h2 className="mt-1">Papelera Reciclaje</h2>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
