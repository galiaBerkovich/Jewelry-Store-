import React from "react";

export default function Read() {
  return (
    <div style={{fontFamily: 'Calibri Light'}}>
      <div>
        <div style={{fontSize: '200%'}}> Read Me - Galia Bercovici - 207284233 </div>
      </div>
      <div>
        <ol>
            <div> Store name: Galron Jewelry </div>
          <li>
            <div> What are you selling? </div>
              Jewelry
          </li>
          <li>
            <div>What additional page(s) did you add? How to operate it? </div>
              <ol>
                <li> WishList Page - Click on the "Wishlist" button in the linksbox. </li>
                <li> About Page - Click on the "About" button in the linksbox. </li>
                <li> NewsLetter page - Click on the "NewsLetter" button in the linksbox. </li>
                <li> ProductPage - Click on any product in the products page. </li>
              </ol>
          </li>
          <li> <div> What was hard to do? </div> </li>
            <ul>
              <li> It was my first time that i created a fullstack web application, so everything was pretty hard to learn from beggining. But, the hardest part was the backend side and working with the DB. </li>
            </ul>
          <li>
            <div >
            Who is your partner? name and id. What did you do? What did your
            partner do?
            </div>
          </li>
            Yaron Talitman 205359839
          <br/>
            We worked together through the whole time, we met in person every day for more than 2 weeks. 
            We designed together both the fronend and backend and server side and we decided together to work with MongoDB so we learned it from the beggining together. 

          <li> <div> Specify all the different routes your app supports </div> </li>
            <ol>
              <li> /register</li>
              <li> /login</li>
              <li> /home</li>
              <il>/products/:category</il>
              <li> /product/:id</li>
              <li> /cart/</li>
              <li> /about</li>
              <li> /readme</li>
              <li> /readmeYaron</li>
              <li> /wishlist</li>
              <li> /newsletter</li>
            </ol>
        </ol>
      </div>
    </div>
  );
}
