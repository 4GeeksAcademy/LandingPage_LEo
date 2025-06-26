import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {

  return (  
    <div className='p-2 col-11 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
      <div className="card">
          <img
            src={props.image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Find Out Morel</a>
          </div>
        </div>
    </div>    
  )
}

const CardContainer = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-wrap justify-content-center">

     <Card title="Card title 1" image="https://picsum.photos/id/870/200/300?grayscale&blur=2"/>      
     <Card title="Card Title 2" image="https://picsum.photos/seed/picsum/200/300"/>
     <Card title="Card Title 3" image="https://picsum.photos/id/237/200/300"/>
     <Card title="Card title 4" image="https://picsum.photos/200/300?grayscale"/>
      </div>
    </div>
  );
};

export default CardContainer;